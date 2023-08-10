import React from 'react';
import { TextProps } from 'react-native';

type Direction = "ltr" | "rtl" | "up" | "down";
type GradientProps = {
    direction: Direction;
    colors: string[];
} & TextProps;
declare const _default: ({ direction, colors, ...props }: GradientProps) => React.JSX.Element;

export { GradientProps, _default as GradientText };
