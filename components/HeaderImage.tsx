import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export const HeaderImage = () => {
  return (
    <ImageBackground
      style={{ width: "100%", height: 200, zIndex: -1, position: "absolute" }}
      contentFit="cover"
      contentPosition={{ top: -1, left: 0.5 }}
      source={require("../assets/images/HeaderImage.png")}
    >
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0)",
          "rgba(255, 255, 255, 0.124)",
          "rgba(255, 255, 255, 0.6919)",
          "#f2f2f2",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.9 }}
        style={{ height: "100%", width: "100%" }}
      ></LinearGradient>
    </ImageBackground>
  );
};
