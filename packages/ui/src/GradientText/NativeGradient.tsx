import React from "react";
import { Text } from "react-native";
import { LinearGradient as ExpoGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { directionToStartAndEndPoint } from "./utils";
import { GradientProps } from "./GradientText";

export default ({ direction, colors, ...props }: GradientProps) => {
  const [start, end] = directionToStartAndEndPoint(direction);
  return (
    <>
      <MaskedView maskElement={<Text {...props} />}>
        <ExpoGradient colors={colors} start={start} end={end}>
          <Text {...props} style={[props.style, { opacity: 0 }]} />
        </ExpoGradient>
      </MaskedView>
    </>
  );
};
