import { Dimensions, PixelRatio, Platform } from "react-native";

export const screenHeight = Dimensions.get("screen").height;
export const screenWidth = Dimensions.get("screen").width;

export const toSize = (input) => {
  const scaleVertical = screenHeight / 812;
  const scaleHorizontal = screenWidth / 375;
  const scale = Math.min(scaleVertical, scaleHorizontal);
  if (Platform.OS === "android") {
    return PixelRatio.roundToNearestPixel(scale * input);
  } else {
    return scale * input;
  }
};

export const images = {
  MarkerHeart: require("./icons/ic_marker_heart.png"),
};
