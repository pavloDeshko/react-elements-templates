# React Elements Templates [![Build Status](https://travis-ci.com/pavloDeshko/react-elements-templates.svg?branch=main)](https://travis-ci.com/pavloDeshko/react-elements-templates) 
String templates that can accept React Elements as data values (parameters). 
Tiny (less then 1kb), zero runtime dependencies.
___
Install:
```
npm i react-elements-templates
```

```
yarn add react-elements-templates
```

Templates are great tools for decoupling your code and user messages, but usually they fall short if you data values come not as simple strings, but as HTML or React components.
> [!IMPORTANT]
> __React Elements Templates can take any ReactNode (Element, string, array, etc - basically anything that's valid in JSX) and put it in the right place inside your string template. The returned value is React Fragment (or string in some simple cases) which can be used in you JSX right away.__

_TypeScript can analyze your templates and make sure they're getting all values they need at compile time, see [Usage with TypeScript](#usage-with-typescript)._
___
### Basic use cases
Imports:
```javascript
// Basic:
import T from 'react-elements-templates'
// default, T is React component
// feel free to import under whatever name you like

// Everything:
import {
  T, Template, //  React component
  t, template, //  alternatively, function with the same return type - use whatever feels best
  initT , initTemplate // factory function to customize templates, see below
} from 'react-elements-templates'
```

Simple string - works like any template:
```javascript
const message = "%greeting%, %towhom%! :)";
//...

<SomeJSX>
  <T values={{greeting:'hello', towhom:'world'}}>{message}</T>
</SomeJSX>

// OR there's function version t(...) or template(...) with the same return signature. Use whatever feels best for your code.

const content = t(message, {greeting:'hello', towhom:'world'});
<SomeJSX>{content}</SomeJSX>
```
_You can use any delimiters you like instead of %...%, see [Customizing](#customizing)._  

With Html element as value:
```javascript
const message = "Hello, %profile_link%! We are happy to see you again.";
//...

<T values={{
  profile_link:<a href={user.profile}>{user.name}</a>
}}>{TEXT.GREETING}</T>
// Equivalent to following inline JSX: 
// <>Hello,{<a href="https://mysite.com/bill">Bill</a>}! We are happy to see you again.</>
```

Third party or custom React component:
```javascript
const message = "Please contact use at %link%";
//...

<T values={{
  link: <Link href={'https://'+settings.feedback_link}>{settings.feedback_link_text}</Link>
}}>{message}</T>
```

Array of elements (don't forget key prop):
```javascript
<T values={{phones: settings.phones.map(ph=>
  <p><a href={"tel:"+ph} key={ph}>{ph}</a></p>
)}}>{TEXT.CONTACT_US}</T>
// Returns Fragment containing each phone number wrapped in <a> and <p> elements
```
And so on - any {value} that can go inside JSX can be passed as data value to template.
___
### Customizing

To get customized version of React Elements Templates you can use initT (or initTemplate) factory function called with options object:

```javascript
import {initT} from 'react-elements-templates'  //or initTemplate

const {T : MyT} = initT({ 
// returns object containing normally exported values - {t, T, template, Template} - now customized
  delimiters:['{{','}}'] as const, 
  // tuple of [start, end] custom delimiters. Omit "as const" if you're not using TypeScript, see below
  throwInDev:false 
  // won't throw errors of missing placeholder or value even in development, see below
});

<MyT values={{custom:"cool"}}>
  {'my template with {{custom}} syntax'}
</MyT>
```

Also you can pass options object as a prop for single-use customization:
```javascript
<T values={{custom:"cool"}}
  options={{delimiters:['{{','}}'] as const}} {/*Omit "as const" if you're not using TypeScript, see below*/}
>
  {'my template with {{custom}} syntax'}
</T>;

// OR as third argument to function t(...)

t('my template with {{custom}} syntax',
  {custom:"cool"},
  {delimiters:['{{','}}'] as const}/*Omit "as const" if you're not using TypeScript, see below*/
);
```
___
### Errors thrown in Development

Don't let nasty placeholders to creep into UI!
By default React Elements Templates will throw an error on render in development if:
  1. value for placeholder found in template was not provided
  2. template doesn't contain certain placeholder for which value was provided


```javascript
const message = 'and %foo% ,and %bar%';
//...

<T values={{foo: 'Foo!'}}>{message}</T>
// Error: Value for placeholder "bar" in template "and %foo%, and %bar%" was not provided.

<T values={{
  foo: 'Foo!',
  bar: 'Bar!',
  foobar: 'FooBar!'
}}>{message}</T>
// Error: Placeholder "foobar" value was not utilized in template the 'and %foo% ,and %bar%'.
```
> [!IMPORTANT]
>__Those errors are NEVER thrown in production (if process.env['NODE_ENV'] is not 'development'), in which case template is silently rendered as is.__

Behavior can be turned off, see [Customizing](#customizing).  

Also see [Usage with TypeScript](#usage-with-typescript) on how to catch those at compile time!
___
### Usage with TypeScript

Here's a good one :-)
If your template string values are defined __"as const"__ (their type is string literal, not simply 'string'), TS will be able to make sure all values are provided for every given template:
```typescript
const TEXT = {
  ABOUT:"the %life%, the %universe%..."
  // etc...
} as const;
//...

<T values={{
  universe: '42'
}}>{TEXT.ABOUT}</T>;
//Property 'life' is missing in type '{ universe: string }' but required in type '{ life: ReactNode; universe: ReactNode }'.

<T values={{
  life:42,
  universe:42, 
  everything:42
}}>{TEXT.ABOUT}</T>
// Object literal may only specify known properties, and 'everything' does not exist in type '{ life: ReactNode; universe: ReactNode }'.
```
> [!TIP]
> NOTE: If you're importing you text from JSON file check out [this](https://github.com/microsoft/TypeScript/issues/32063#issuecomment-800162987) <a> for hacks on how to make them __"as const"__. Or maybe by time you're reading this TS supports it out of the box already!

Also don't forget __"as const"__ if you're passing custom delimiters (either to initT factory or component/function directly). Otherwise TS will infer its types as [string, string] and accept values object with any keys.
```typescript
initT({delimiters: ['{{','}}'] as const});

<T values={{}}
  options={{delimiters:['{{','}}'] as const}}
>{'some template'}</T>
```
___
### MIT