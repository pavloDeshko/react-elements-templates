import Renderer, {ReactTestInstance} from "react-test-renderer"
import React,{ReactElement} from "react"

//import Template, {initTemplate, template, T, t, initT}from './lib/index'
// Basic:
import Tt from './lib/index'
// default, T is React component
// feel free to import under whatever name you like

// Everything:
import {
  T, Template, //  React component
  t, template, //  alternatively, function with the same return type - use whatever feels best
  initT , initTemplate // factory function to customize templates, see below
} from './lib/index'

beforeAll(()=>{
  jest.spyOn(console,'error').mockImplementation(()=>{})
})
afterAll(()=>{jest.restoreAllMocks()})

const render = (el: ReactElement): ReactTestInstance => {
  return Renderer.create(el).root
}


it('smoke - should export the same values', () => {
  expect(t).toBe(template)
  expect(T).toBe(Template)
  expect(initT).toBe(initTemplate)
})

describe('Template Component', () => {
  it('renders correctly with empty values object and no placeholders', () => {
    const tree = render(<Template values={{}}>{'some template without placeholders' as const}</Template>)
    expect(tree.children).toEqual(['some template without placeholders'])
  })

  it('renders correctly with a single placeholder', () => {
    const tree = render(
      <Template values={{ placeholder: 'value'}}>{'some template with %placeholder%s' as const}</Template>
    )
    
    expect(tree.children).toEqual(['some template with ', 'value', 's'])
  })

  it('renders correctly with multiple identical placeholders', () => {
    const tree = render(
      <Template values={{ placeholder: 'value'}}>
        {'some template with %placeholder%s and more %placeholder%s' as const}
      </Template>
    )
    
    expect(tree.children).toEqual(['some template with ', 'value', 's and more ', 'value', 's'])
  })

  it('renders correctly with several different placeholders', () => {
    const tree = render(
      <Template values={{ placeholder1: 'value1', placeholder2: 'value2' }}>
        {'some template with %placeholder1% and %placeholder2%' as const}
      </Template>
    )
    
    expect(tree.children).toEqual(['some template with ', 'value1', ' and ', 'value2'])
  })

  it('renders correctly with placeholder at the start of the template', () => {
    const tree = render(
      <Template values={{ placeholder: 'value'}}>
        {'%placeholder% at the start of the template' as const}
      </Template>
    )
    
    expect(tree.children).toEqual(['value', ' at the start of the template'])
  })

  it('renders correctly with placeholder in the middle of the template', () => {
    const tree = render(
      <Template values={{ placeholder: 'value'}}>
        {'some template with %placeholder% in the middle' as const}
      </Template>
    )
    
    expect(tree.children).toEqual(['some template with ', 'value', ' in the middle'])
  })

  it('renders correctly with placeholder at the end of the template', () => {
    const tree = render(
      <Template values={{ placeholder: 'value'}}>
        {'template ends with %placeholder%' as const}
      </Template>
    )
    
    expect(tree.children).toEqual(['template ends with ', 'value'])
  })

  it('renders correctly with an empty template', () => {
    const tree = render(
      <Template values={{ placeholder: 'value'}}>
        {'' as const}
      </Template>
    )
    
    expect(tree.children).toEqual([])
  })

  it('renders correctly with empty placeholder value', () => {
    const tree = render(<Template values={{ placeholder: ''}}>{'some template with %placeholder%' as const}</Template>)
    
    expect(tree.children).toEqual(['some template with '])
  })

  it('renders correctly when the template consists only of placeholders', () => {
    const tree = render(
      <Template values={{ placeholder1: 'value1', placeholder2: 'value2' }}>
        {'%placeholder1%%placeholder2%' }
      </Template>
    )
    
    expect(tree.children).toEqual(['value1', 'value2'])
  })

  it('renders correctly with component (div) as value', () => {
    const tree = render(
      <Template values={{ placeholder: <div>custom component value</div>}}>
        {'some template with %placeholder%' as const}
      </Template>
    )

    expect((tree.children[1] as ReactTestInstance).type).toBe('div')
    expect((tree.children[1] as ReactTestInstance).children).toEqual(['custom component value'])
  })

  it('renders correctly with custom component as value', () => {
    const Comp = () => <span>custom component value</span>
    const tree = render(
      <Template values={{ placeholder: <Comp /> }}>
        {'some template with %placeholder%' as const}
      </Template>
    )
    
    expect((tree.children[1] as ReactTestInstance).type).toBe(Comp)
    expect(((tree.children[1] as ReactTestInstance).children[0] as ReactTestInstance).type).toBe('span')
    expect(((tree.children[1] as ReactTestInstance).children[0] as ReactTestInstance).children).toEqual(['custom component value'])
  })
})

describe('Custom instance with init function', () => {
  const {Template:InitTemplate} = initTemplate({delimiters:['{{', '}}']as const,throwInDev:false}) 

  it('renders correctly with placeholder at the start using custom syntax', () => {
    const tree = render(
      <InitTemplate values={{ placeholder: 'value'}}>
        {'{{placeholder}} at the start of the template'}
      </InitTemplate>
    )
    
    expect(tree.children).toEqual(['value', ' at the start of the template'])
  })

  it('renders correctly with placeholder in the middle using custom syntax', () => {
    const tree = render(
      <InitTemplate values={{ placeholder: 'value' }}>
        {'some template with {{placeholder}} in the middle' as const}
      </InitTemplate>
    )
    
    expect(tree.children).toEqual(['some template with ', 'value', ' in the middle'])
  })

  it('renders correctly with placeholder at the end using custom syntax', () => {
    const tree = render(
      <InitTemplate values={{ placeholder: 'value' }}>
        {'template ends with {{placeholder}}' as const}
      </InitTemplate>
    )
    
    expect(tree.children).toEqual(['template ends with ', 'value'])
  })

  it('renders correctly when the template consists only of placeholders using custom syntax', () => {
    const tree = render(
      <InitTemplate values={{ placeholder1: 'value1', placeholder2: 'value2' }}>
        {'{{placeholder1}}{{placeholder2}}' as const}
      </InitTemplate>
    )
    
    expect(tree.children).toEqual(['value1', 'value2'])
  })

  it('does not throw when throwInDev set via init and leaves template as is', () => {
    process.env.NODE_ENV = 'development'
    
    const tree = render(
      <InitTemplate values={{ placeholder1: 'value1' }}>
        Template without placeholders
      </InitTemplate>
    )
    expect(tree.children.join()).toContain('Template without placeholders')
    expect(()=>tree).not.toThrow()
  })
})

describe('different delimiters specified inline', ()=>{
  it('renders correctly with several different placeholders', () => {
    const tree = render(
      <Template values={{ placeholder1: 'value1', placeholder2: 'value2' }} delimiters={['{{','}}']}>
        {'some template with {{placeholder1}} and {{placeholder2}}'}
      </Template>
    )
    
    expect(tree.children).toEqual(['some template with ', 'value1', ' and ', 'value2'])
  })
  it('renders correctly with several different placeholders used as function', () => {
    const tree = render(
      template('some template with {{placeholder1}} and {{placeholder2}}',{ placeholder1: 'value1', placeholder2: 'value2' },['{{','}}'] as const)
    )
    
    expect(tree.children).toEqual(['some template with ', 'value1', ' and ', 'value2'])
  })
})

describe('function version used directly',()=>{
  it('renders correctly with several different placeholders', () => {
    const tree = render(
      template('some template with %placeholder1% and %placeholder2%',{ placeholder1: 'value1', placeholder2: 'value2' })
    )
    expect(tree.children).toEqual(['some template with ', 'value1', ' and ', 'value2'])
  })
})

describe('Runtime Errors', () => {
  const noPlaceholder = (throwInDev:boolean|undefined =undefined) => {
    render(
      <Template values={{ placeholder1: 'value1' }} throwInDev={throwInDev}>
        Template without placeholders
      </Template>
    )
  }
  
  const noValue = (throwInDev:boolean|undefined=undefined) => {
    return render(
      <Template values={{}} throwInDev={throwInDev}>
        Template with placeholders %placeholder1%
      </Template>
    )
  }

  it('throws error for placeholder key present in values but not in template', () => {
    process.env.NODE_ENV = 'development'

    expect(()=>noPlaceholder()).toThrow('Template without placeholders')
  })

  it('throws error for placeholder in template but not in values', () => {
    process.env.NODE_ENV = 'development'

    expect(()=>noValue()).toThrow('placeholder1')
  })

  it('does not throw error in production and leaves template as is', () => {
    process.env.NODE_ENV = 'production'

    expect(noValue().children.join()).toContain('%placeholder1%')
    expect(()=>noPlaceholder()).not.toThrow()
  })

  it('does not throw when throwInDev set inline and leaves template as is', () => {
    process.env.NODE_ENV = 'development'

    expect(noValue(false).children.join()).toContain('%placeholder1%')
    expect(()=>noPlaceholder(false)).not.toThrow()
  })
})


/*
()=>{
  <>
  <Template values={{}}>{'bla%bla%'}</Template>
  <Template values={{}}>{'bla%bla%'as const}</Template>
  <Template values={{blaaaa:33}}>{'bla%bla%'as const}</Template>

  <Template values={{}} delimiters={['{{','}}']}>{'bla{{bla}}'as const}</Template>
  <Template values={{bla:33}} delimiters={['{{','}}'] as const}>{'bla{{bla}}'as const}</Template>
  <Template values={{blaaaa:33}} delimiters={['{{','}}'] as const}>{'bla{{bla}}'as const}</Template>

  </>

  template('bla%bla%' ,{blaaa:33})
  template('bl{{bla}}' ,{blaaa:33}, ['{{','}}'] as const)

  const {Template:T,template:t} = initTemplate({delimiters:['{{','}}']});
  <>
  <T values={{}}>{'bla{{bla}}'}</T>
  <T values={{bla:33}}>{'bla{{bla}}'as const}</T>
  <T values={{blaaaa:33}}>{'bla{{bla}}'as const}</T>
   
  </>
  t('bla%bla%' ,{blaaa:33})
  t('bl{{bla}}' ,{blaaa:33}, ['{{','}}'] as const)

  const {Template:Tc,template:tc} = initTemplate({delimiters:['{{','}}']}as const);
  <>
  <Tc values={{}}>{'bla{{bla}}'}</Tc>
  <Tc values={{bla:33}}>{'bla{{bla}}'as const}</Tc>
  <Tc values={{blaaaa:33}}>{'bla{{bla}}'as const}</Tc>
  </>
  tc('bla%bla%' ,{blaaa:33})
  tc('bl{{bla}}' ,{blaaa:33}, ['{{','}}'] as const)

}  */


