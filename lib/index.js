"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initT = exports.initTemplate = exports.t = exports.template = exports.T = exports.Template = exports._initTemplate = void 0;
var react_1 = require("react");
var _initTemplate = function (_a) {
    var _b = _a.delimiters, d0 = _b[0], d1 = _b[1], _c = _a.throwInDev, throwInDev = _c === void 0 ? true : _c;
    var _throwInDev = throwInDev;
    var template = function (template, values, delimiters, throwInDev) {
        if (delimiters === void 0) { delimiters = [d0, d1]; }
        if (throwInDev === void 0) { throwInDev = _throwInDev; }
        var escape = function (s) { return s.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'); };
        var notUsed = new Set(Object.keys(values));
        var regex = new RegExp("(.*?)".concat(escape(delimiters[0]), "(.*?)").concat(escape(delimiters[1])), 'g');
        var result = [];
        var currentMatch;
        var prevIndex = regex.lastIndex;
        while (!!(currentMatch = regex.exec(template))) {
            var key = currentMatch[2];
            if (process.env['NODE_ENV'] == 'development' && throwInDev && !(key in values)) {
                throw new Error("Value for placeholder \"".concat(key, "\" in template \"").concat(template, "\" was not provided."));
            }
            result.push(currentMatch[1], key in values ? values[key] : d0 + key + d1);
            notUsed.delete(key);
            prevIndex = regex.lastIndex;
        }
        result.push(template.slice(prevIndex));
        if (process.env['NODE_ENV'] == 'development' && throwInDev && notUsed.size > 0) {
            throw new Error("Placeholder \"".concat(Array.from(notUsed.values()), "\" value was not utilized in template \"").concat(template, "\"."));
        }
        return react_1.createElement.apply(void 0, __spreadArray([react_1.Fragment, undefined], result.filter(function (v) { return v !== ''; }), false));
    };
    var Template = function (props) {
        return template(props.children, props.values, props.delimiters, props.throwInDev);
    };
    return __assign({ template: template, Template: Template }, { t: template, T: Template });
};
exports._initTemplate = _initTemplate;
var def = (0, exports._initTemplate)({ delimiters: ['%', '%'] });
/**
 * React component variant for react-elements-templates.
 * @param {object} props - Component props.
 * @param {string} props.children - The template string.
 * @param {object} props.values - Object with values(ReactNode) to substitute in the template. Keys are placeholders (without delimiters).
 * @param {string[]} [props.delimiters] - Optinal tuple [start,end] of alternative delimiters to use for this output. Default ar initialized values are used otherwise.
 * @param {boolean} [props.throwInDev=true] - Optinal flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production) for this output. Default ar initialized value is used otherwise.
 * @returns {ReactElement} Resultant React Fragment (string or single component in some cases).
 */
exports.Template = def.Template;
exports.T = exports.Template;
exports.default = exports.Template;
/**
 * Function variant for react-elements-templates.
 * @param {string} template - The template string.
 * @param {object} values - Object with values(ReactNode) to substitute in the template. Keys are placeholders (without delimiters).
 * @param {string[]} [delimiters] - Optinal tuple [start,end] of alternative delimiters to use for this output. Default ar initialized values are used otherwise.
 * @param {boolean} [throwInDev=true] - Optinal flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production) for this output. Default ar initialized value is used otherwise.
 * @returns {ReactElement} - Resultant React Fragment (string or single component in some cases).
 */
exports.template = def.template;
exports.t = exports.template;
/**
 * Initializes react-elements-templates with specified options.
 * @param {object} options - Options for initializing the template engine.
 * @param {string[]} [options.delimiters=['%','%']] - Tuple of start and end delimiters. Default is ['%','%']
 * @param {boolean} [options.throwInDev=true] - Flag indicating whether errors (missing or unused value) should be thrown in development mode (NEVER thrown in production). Default is true.
 * @returns {object} Object containing the `template` function and the `Template` component, as well as their aliases `t` and `T`.
 */
exports.initTemplate = exports._initTemplate;
exports.initT = exports.initTemplate;
