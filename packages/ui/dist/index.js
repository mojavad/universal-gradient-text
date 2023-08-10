'use client'
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  GradientText: () => GradientText_default
});
module.exports = __toCommonJS(src_exports);

// src/GradientText/GradientText.tsx
var import_react3 = __toESM(require("react"));
var import_react_native3 = require("react-native");

// src/GradientText/WebGradient.tsx
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");

// src/GradientText/utils.ts
var directionToCSS = (direction) => {
  switch (direction) {
    case "ltr":
      return "to right";
    case "rtl":
      return "to left";
    case "up":
      return "to top";
    case "down":
      return "to bottom";
    default:
      throw new Error("Direction is not correct type.");
  }
};
var colorsToStringCSS = (colors) => colors.join(", ");
var directionToStartAndEndPoint = (direction) => {
  switch (direction) {
    case "ltr":
      return [
        { x: 0, y: 0 },
        { x: 1, y: 0 }
      ];
    case "rtl":
      return [
        { x: 1, y: 0 },
        { x: 0, y: 0 }
      ];
    case "up":
      return [
        { x: 0, y: 1 },
        { x: 0, y: 0 }
      ];
    case "down":
      return [
        { x: 0, y: 0 },
        { x: 0, y: 1 }
      ];
    default:
      throw new Error("Direction is not correct type.");
  }
};

// src/GradientText/WebGradient.tsx
var WebGradient_default = ({ direction, colors, ...props }) => {
  return /* @__PURE__ */ import_react.default.createElement(import_react_native.Text, { ...props }, /* @__PURE__ */ import_react.default.createElement(
    "span",
    {
      style: {
        backgroundImage: `linear-gradient(${directionToCSS(
          direction
        )}, ${colorsToStringCSS(colors)})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    },
    props.children
  ));
};

// src/GradientText/NativeGradient.tsx
var import_react2 = __toESM(require("react"));
var import_react_native2 = require("react-native");
var import_expo_linear_gradient = require("expo-linear-gradient");
var import_masked_view = __toESM(require("@react-native-masked-view/masked-view"));
var NativeGradient_default = ({ direction, colors, ...props }) => {
  const [start, end] = directionToStartAndEndPoint(direction);
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(import_masked_view.default, { maskElement: /* @__PURE__ */ import_react2.default.createElement(import_react_native2.Text, { ...props }) }, /* @__PURE__ */ import_react2.default.createElement(import_expo_linear_gradient.LinearGradient, { colors, start, end }, /* @__PURE__ */ import_react2.default.createElement(import_react_native2.Text, { ...props, style: [props.style, { opacity: 0 }] }))));
};

// src/GradientText/GradientText.tsx
var GradientText_default = ({ direction = "ltr", colors, ...props }) => {
  if (!colors || colors.length < 2) {
    throw new Error(
      "expo-text-gradient: The `colors` array must have at least two colors specified."
    );
  }
  if (import_react_native3.Platform.OS === "web") {
    return /* @__PURE__ */ import_react3.default.createElement(WebGradient_default, { direction, colors, ...props });
  } else {
    return /* @__PURE__ */ import_react3.default.createElement(NativeGradient_default, { direction, colors, ...props });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GradientText
});
