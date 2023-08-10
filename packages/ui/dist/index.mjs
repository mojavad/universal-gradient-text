'use client'

// src/GradientText/GradientText.tsx
import React3 from "react";
import { Platform as Platform2 } from "react-native";

// src/GradientText/WebGradient.tsx
import React from "react";
import { Text } from "react-native";

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
  return /* @__PURE__ */ React.createElement(Text, { ...props }, /* @__PURE__ */ React.createElement(
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
import React2 from "react";
import { Text as Text2 } from "react-native";
import { LinearGradient as ExpoGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
var NativeGradient_default = ({ direction, colors, ...props }) => {
  const [start, end] = directionToStartAndEndPoint(direction);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(MaskedView, { maskElement: /* @__PURE__ */ React2.createElement(Text2, { ...props }) }, /* @__PURE__ */ React2.createElement(ExpoGradient, { colors, start, end }, /* @__PURE__ */ React2.createElement(Text2, { ...props, style: [props.style, { opacity: 0 }] }))));
};

// src/GradientText/GradientText.tsx
var GradientText_default = ({ direction = "ltr", colors, ...props }) => {
  if (!colors || colors.length < 2) {
    throw new Error(
      "expo-text-gradient: The `colors` array must have at least two colors specified."
    );
  }
  if (Platform2.OS === "web") {
    return /* @__PURE__ */ React3.createElement(WebGradient_default, { direction, colors, ...props });
  } else {
    return /* @__PURE__ */ React3.createElement(NativeGradient_default, { direction, colors, ...props });
  }
};
export {
  GradientText_default as GradientText
};
