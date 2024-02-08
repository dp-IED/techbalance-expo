import Svg, { Path, Text, G, TextPath } from "react-native-svg";

const CircularText = ({ children, ...props }) => {
  return (
    <Svg {...props}>
      <Path
        id="circlePath"
        d="M134.23,67.3325 a67.3325,67.3325 0 1,0 0.1,0"
        fill="none"
      />
      <G rotation="0" origin="134.23, 67.3325">
        <Text fill="#000" fontSize="20">
          <TextPath href="#circlePath" startOffset="0%">
            {children}
          </TextPath>
        </Text>
      </G>
    </Svg>
  );
};

export default CircularText;
