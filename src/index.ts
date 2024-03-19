import {createElement, ReactNode, Fragment} from 'react'

type _Delimiter = readonly[string,string]

export const _initTemplate = <D extends _Delimiter>({delimiters:[d0,d1], throwInDev=true}:{ delimiters:D, throwInDev?:boolean})=>{
  const _throwInDev = throwInDev
  type _GetTemplateKeys<T extends string, DD extends _Delimiter> = T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ..._GetTemplateKeys<Rest,DD>] : []
  type Values<T extends string, DD extends _Delimiter> = 
    DD extends [string,string] ? Record<string,ReactNode> :_GetTemplateKeys<T, DD> extends [] ? Record<string,ReactNode> : {[KK in _GetTemplateKeys<T,DD>[number] ]:ReactNode}
  
  const template = <T extends string, DD extends _Delimiter = D>(template:T, values:Values<T, DD>, delimiters :DD = [d0,d1] as any as DD, throwInDev = _throwInDev)=>{
    const escape = (s:string)=>s.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
    
    const notUsed = new Set(Object.keys(values))
    const regex = new RegExp(`(.*?)${escape(delimiters[0])}(.*?)${escape(delimiters[1])}`, 'g')

    const result :ReactNode[]= []
    let currentMatch :RegExpExecArray|null
    let prevIndex = regex.lastIndex

    while(!!(currentMatch = regex.exec(template))){
      const key = currentMatch[2] as string

      if(process.env['NODE_ENV'] == 'development' && throwInDev && !(key in values)){
        throw new Error(`Value for placeholder "${key}" in template "${template}" was not provided.`)
      }

      result.push(
        currentMatch[1], 
        key in values ? (values as any)[key] : d0+key+d1
      )

      notUsed.delete(key)
      prevIndex = regex.lastIndex
    }
    
    result.push(template.slice(prevIndex))

    if(process.env['NODE_ENV'] == 'development' && throwInDev && notUsed.size > 0){
      throw new Error(`Placeholder "${Array.from(notUsed.values())}" value was not utilized in template "${template}".`)
    }
    
    return createElement(Fragment,undefined, ...result.filter(v=>v!==''))
  }

  const Template = <T extends string, DD extends _Delimiter = D>(props:{ children:T, values: Values<T,DD>, delimiters?:DD, throwInDev?:boolean}) => {
    return template<T,DD>(props.children, props.values, props.delimiters, props.throwInDev)
  }
  
  return {template,Template,... {t:template, T:Template}}
}

const def = _initTemplate({delimiters:['%','%'] as const})

/**
 * React component variant for react-elements-templates.
 * @param {object} props - Component props.
 * @param {string} props.children - The template string.
 * @param {object} props.values - Object with values(ReactNode) to substitute in the template. Keys are placeholders (without delimiters).
 * @param {string[]} [props.delimiters] - Optinal tuple [start,end] of alternative delimiters to use for this output. Default ar initialized values are used otherwise.
 * @param {boolean} [props.throwInDev=true] - Optinal flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production) for this output. Default ar initialized value is used otherwise.
 * @returns {ReactElement} Resultant React Fragment (string or single component in some cases).
 */
export const Template = def.Template
export {Template as T}
export default Template

/**
 * Function variant for react-elements-templates.
 * @param {string} template - The template string.
 * @param {object} values - Object with values(ReactNode) to substitute in the template. Keys are placeholders (without delimiters).
 * @param {string[]} [delimiters] - Optinal tuple [start,end] of alternative delimiters to use for this output. Default ar initialized values are used otherwise.
 * @param {boolean} [throwInDev=true] - Optinal flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production) for this output. Default ar initialized value is used otherwise.
 * @returns {ReactElement} - Resultant React Fragment (string or single component in some cases).
 */
export const template = def.template
export {template as t}

/**
 * Initializes react-elements-templates with specified options.
 * @param {object} options - Options for initializing the template engine.
 * @param {string[]} [options.delimiters=['%','%']] - Tuple of start and end delimiters. Default is ['%','%']
 * @param {boolean} [options.throwInDev=true] - Flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production). Default is true.
 * @returns {object} Object containing the `template` function and the `Template` component, as well as their aliases `t` and `T`.
 */
export const initTemplate = _initTemplate
export {initTemplate as initT}
