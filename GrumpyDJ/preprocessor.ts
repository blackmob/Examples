"use strict";
import * as tsc from "typescript";
var babelJest = require("babel-jest");
var webpackAlias = require("jest-webpack-alias");

export const process = (src, path: string) => {
        if (path.endsWith(".ts") || path.endsWith(".tsx")) {
            src = tsc.transpile(src,
                {
                    module: tsc.ModuleKind.CommonJS,
                    jsx: tsc.JsxEmit.React
                },
                path,
                []
            );
            src = babelJest.process(src, path);
            src = webpackAlias.process(src, path);
        }
    return src;
};