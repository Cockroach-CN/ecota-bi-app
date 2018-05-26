
import { CSSProperties } from "react";

const classList = (...classNames) => {
    if (classNames && classNames.length > 0) {
        return classNames.filter((c) => !!c).join(" ") || undefined;
    }
}

window.merge = (arg1, arg2) => {
    if (arg1 === null || arg1 === undefined || arg2 === null || arg2 === undefined) {
        throw Error("Cannot convert undefined or null to object");
    }
    const result = Object({});
    [arg1, arg2].forEach(arg => {
        for (const nextKey in arg) {
            if (arg.hasOwnProperty(nextKey)) {
                result[nextKey] = arg[nextKey];
            }
        }
    })
    return result;
}

function getType(obj) {
    //tostring会返回对应不同的标签的构造函数
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
}

const o2o = (data) => {
    var type = getType(data);
    var obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        //不再具有下一层次
        return data;
    }
    if (type === 'array') {
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(o2o(data[i]));
        }
    } else if (type === 'object') {
        for (var key in data) {
            obj[key] = o2o(data[key]);
        }
    }
    return obj;
}

const PAGEMAP = {
    MAIN: "main",
    LIST: "list",
    INFO: "info"
}

export {
    o2o,
    PAGEMAP,
    classList,
}