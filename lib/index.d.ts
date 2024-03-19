import { ReactNode } from 'react';
type _Delimiter = readonly [string, string];
export declare const _initTemplate: <D extends _Delimiter>({ delimiters: [d0, d1], throwInDev }: {
    delimiters: D;
    throwInDev?: boolean | undefined;
}) => {
    t: <T extends string, DD extends _Delimiter = D>(template: T, values: DD extends [string, string] ? Record<string, ReactNode> : (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK in (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; }, delimiters?: DD, throwInDev?: boolean) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
    T: <T_1 extends string, DD_1 extends _Delimiter = D>(props: {
        children: T_1;
        values: DD_1 extends [string, string] ? Record<string, ReactNode> : (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK_1 in (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; };
        delimiters?: DD_1 | undefined;
        throwInDev?: boolean | undefined;
    }) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
    template: <T extends string, DD extends _Delimiter = D>(template: T, values: DD extends [string, string] ? Record<string, ReactNode> : (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK in (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; }, delimiters?: DD, throwInDev?: boolean) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
    Template: <T_1 extends string, DD_1 extends _Delimiter = D>(props: {
        children: T_1;
        values: DD_1 extends [string, string] ? Record<string, ReactNode> : (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK_1 in (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; };
        delimiters?: DD_1 | undefined;
        throwInDev?: boolean | undefined;
    }) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
};
/**
 * React component variant for react-elements-templates.
 * @param {object} props - Component props.
 * @param {string} props.children - The template string.
 * @param {object} props.values - Object with values(ReactNode) to substitute in the template. Keys are placeholders (without delimiters).
 * @param {string[]} [props.delimiters] - Optinal tuple [start,end] of alternative delimiters to use for this output. Default ar initialized values are used otherwise.
 * @param {boolean} [props.throwInDev=true] - Optinal flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production) for this output. Default ar initialized value is used otherwise.
 * @returns {ReactElement} Resultant React Fragment (string or single component in some cases).
 */
export declare const Template: <T extends string, DD extends _Delimiter = readonly ["%", "%"]>(props: {
    children: T;
    values: DD extends [string, string] ? Record<string, ReactNode> : (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK in (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; };
    delimiters?: DD | undefined;
    throwInDev?: boolean | undefined;
}) => import("react").FunctionComponentElement<{
    children?: ReactNode;
}>;
export { Template as T };
export default Template;
/**
 * Function variant for react-elements-templates.
 * @param {string} template - The template string.
 * @param {object} values - Object with values(ReactNode) to substitute in the template. Keys are placeholders (without delimiters).
 * @param {string[]} [delimiters] - Optinal tuple [start,end] of alternative delimiters to use for this output. Default ar initialized values are used otherwise.
 * @param {boolean} [throwInDev=true] - Optinal flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production) for this output. Default ar initialized value is used otherwise.
 * @returns {ReactElement} - Resultant React Fragment (string or single component in some cases).
 */
export declare const template: <T extends string, DD extends _Delimiter = readonly ["%", "%"]>(template: T, values: DD extends [string, string] ? Record<string, ReactNode> : (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK in (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; }, delimiters?: DD, throwInDev?: boolean) => import("react").FunctionComponentElement<{
    children?: ReactNode;
}>;
export { template as t };
/**
 * Initializes react-elements-templates with specified options.
 * @param {object} options - Options for initializing the template engine.
 * @param {string[]} [options.delimiters=['%','%']] - Tuple of start and end delimiters. Default is ['%','%']
 * @param {boolean} [options.throwInDev=true] - Flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production). Default is true.
 * @returns {object} Object containing the `template` function and the `Template` component, as well as their aliases `t` and `T`.
 */
export declare const initTemplate: <D extends _Delimiter>({ delimiters: [d0, d1], throwInDev }: {
    delimiters: D;
    throwInDev?: boolean | undefined;
}) => {
    t: <T extends string, DD extends _Delimiter = D>(template: T, values: DD extends [string, string] ? Record<string, ReactNode> : (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK in (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; }, delimiters?: DD, throwInDev?: boolean) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
    T: <T_1 extends string, DD_1 extends _Delimiter = D>(props: {
        children: T_1;
        values: DD_1 extends [string, string] ? Record<string, ReactNode> : (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK_1 in (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; };
        delimiters?: DD_1 | undefined;
        throwInDev?: boolean | undefined;
    }) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
    template: <T extends string, DD extends _Delimiter = D>(template: T, values: DD extends [string, string] ? Record<string, ReactNode> : (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK in (T extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD[0]}${infer Key}${DD[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; }, delimiters?: DD, throwInDev?: boolean) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
    Template: <T_1 extends string, DD_1 extends _Delimiter = D>(props: {
        children: T_1;
        values: DD_1 extends [string, string] ? Record<string, ReactNode> : (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []) extends [] ? Record<string, ReactNode> : { [KK_1 in (T_1 extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...Rest extends `${infer _Start}${DD_1[0]}${infer Key}${DD_1[1]}${infer Rest}` ? [Key, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[number]]: ReactNode; };
        delimiters?: DD_1 | undefined;
        throwInDev?: boolean | undefined;
    }) => import("react").FunctionComponentElement<{
        children?: ReactNode;
    }>;
};
export { initTemplate as initT };
//# sourceMappingURL=index.d.ts.map