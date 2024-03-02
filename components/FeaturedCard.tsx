import React from "react";
import { View, Text, Image } from "react-native";

const FeaturedCard = () => {
  return (
    <View
      style={{
        paddingRight: 12,
        paddingTop: 5,
        width: "100%",
        backgroundColor: "#F0F0F0",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              fontFamily: "Rubik_500Medium",
              paddingHorizontal: 20,
            }}
          >
            Today's Article
          </Text>
          <Image
            source={require("../assets/images/card_heart_icon.png")}
            style={{
              height: 16,
              width: 20,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 8,
            paddingLeft: 20,
          }}
        >
          <Image
            source={require("../assets/images/featured_flourish_icon.png")}
            style={{
              height: 78,
              width: 117,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik_400Regular",
              }}
            >
              How do you build{"\n"}stress reselience?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 6,
              }}
            >
              <Image
                source={require("../assets/images/featured_clock_icon.png")}
                style={{
                  height: 13,
                  width: 13,
                }}
              />
              <Text
                style={{
                  fontFamily: "Rubik_400Regular",
                  paddingLeft: 5,
                }}
              >
                5 min
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 6,
              }}
            >
              <Image
                source={require("../assets/images/featured_acc_icon.png")}
                style={{
                  height: 13,
                  width: 13,
                }}
              />
              <Text
                style={{
                  fontFamily: "Rubik_500Medium",
                  color: "#A59AC8",
                  paddingLeft: 5,
                }}
              >
                Julia. T
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeaturedCard;
