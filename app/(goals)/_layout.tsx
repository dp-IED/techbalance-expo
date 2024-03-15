import { GoalType } from "@/types/GoalType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(sharedTopBar)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
