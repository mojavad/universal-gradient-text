import React from "react";
import { Platform, TextProps } from "react-native";
import WebGradient from "./WebGradient";
import NativeGradient from "./NativeGradient";

export type Direction = "ltr" | "rtl" | "up" | "down";

export type GradientProps = {
  direction?: Direction;
  colors: string[];
} & TextProps;

export default ({ direction = "ltr", colors, ...props }: GradientProps) => {
  if (!colors || colors.length < 2) {
    throw new Error(
      "expo-text-gradient: The `colors` array must have at least two colors specified."
    );
  }

  if (Platform.OS === "web") {
    return <WebGradient direction={direction} colors={colors} {...props} />;
  } else {
    return <NativeGradient direction={direction} colors={colors} {...props} />;
  }
};
