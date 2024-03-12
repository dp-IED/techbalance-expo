import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ButtonWithIcon = ({
  title,
  onPress,
  style,
  active,
  color, 
  icon
}: {
  title: string;
  onPress: () => void;
  style?: object;
  active: boolean;
  color: string;
  icon: any;
}) => {
  const buttonStyle = StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: 'row',
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: active ? color : "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 1,
      paddingHorizontal: 80,
      paddingVertical: 10,
      borderRadius: 30,
      borderColor: "#5C5D72",
      borderWidth: active ? 0 : 1,
      marginVertical: 10,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style, buttonStyle.button]}>
        <Image source={icon}/>
        <Text
          style={{
            color: "#5C5D72",
            fontFamily: "Rubik_500Medium",
            fontSize: 16,
            marginHorizontal: 10
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
