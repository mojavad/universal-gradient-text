import { Direction } from "./GradientText";

export const directionToCSS = (direction: Direction) => {
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

export const colorsToStringCSS = (colors: string[]) => colors.join(", ");

export const directionToStartAndEndPoint = (direction: Direction) => {
  switch (direction) {
    case "ltr":
      return [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
      ];
    case "rtl":
      return [
        { x: 1, y: 0 },
        { x: 0, y: 0 },
      ];
    case "up":
      return [
        { x: 0, y: 1 },
        { x: 0, y: 0 },
      ];
    case "down":
      return [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
      ];
    default:
      throw new Error("Direction is not correct type.");
  }
};
