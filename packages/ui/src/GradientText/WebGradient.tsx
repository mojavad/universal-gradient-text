import React from "react";
import { Platform, Text } from "react-native";
import { colorsToStringCSS, directionToCSS } from "./utils";
import { GradientProps } from "./GradientText";

export default ({ direction, colors, ...props }: GradientProps) => {
  return (
    <Text {...props}>
      <span
        style={{
          backgroundImage: `linear-gradient(${directionToCSS(
            direction
          )}, ${colorsToStringCSS(colors)})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {props.children}
      </span>
    </Text>
  );
};
