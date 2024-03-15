import TabButton from "@/components/TabButton";
import { GoalType } from "@/types/GoalType";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Slot,
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageSourcePropType,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BackButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.canGoBack() && router.back();
      }}
    >
      <Feather name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );
};
export default function Layout() {
  const params = useGlobalSearchParams<{
    tab: GoalType;
  }>();

  const [tab, setTab] = useState<GoalType | null>(params.tab);

  console.log("Hell", tab);

  const categories: {
    label: GoalType;
    icon: ImageSourcePropType;
    onPress: () => void;
  }[] = [
    {
      label: "Body",
      icon: require("@/assets/images/body.png"),
      onPress: () => {
        setTab("Body");
        router.replace({
          pathname: "/(goals)/(sharedTopBar)/",
          params: { tab: "Body" },
        });
      },
    },
    {
      label: "Self",
      icon: require("@/assets/images/self.png"),
      onPress: () => {
        setTab("Self");
        router.replace({
          pathname: "/(goals)/(sharedTopBar)/",
          params: { tab: "Self" },
        });
      },
    },
    {
      label: "People",
      icon: require("@/assets/images/people.png"),
      onPress: () => {
        setTab("People");
        router.replace({
          pathname: "/(goals)/(sharedTopBar)/",
          params: { tab: "People" },
        });
      },
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#DFDAEC",
        gap: 40,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          gap: 104,
          paddingHorizontal: 16,
        }}
      >
        <BackButton />
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categories.map((category, index) => (
          <TabButton
            key={index}
            icon={category.icon}
            label={category.label}
            selected={tab ? tab === category.label : false}
            onPress={category.onPress}
          />
        ))}
      </View>
      <Slot />
    </SafeAreaView>
  );
}
