import { Redirect, Slot, SplashScreen } from "expo-router";

import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext, AuthProvider } from "@/ctx/AuthProvider";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { supabase } from "@/scripts/initSupabase";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    let projectId = null;
    if (
      Constants.expoConfig &&
      Constants.expoConfig.extra &&
      Constants.expoConfig.extra.eas
    ) {
      projectId = Constants.expoConfig.extra.eas.projectId;
    }

    token = await Notifications.getExpoPushTokenAsync({
      projectId: projectId,
    });
  }

  return token?.data ?? null;
}

SplashScreen.preventAutoHideAsync();

export default function Root() {
  const [fontsLoaded, fontError] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Register for push notifications

  const [expoPushToken, setExpoPushToken] = useState<string | null | undefined>(
    null
  );
  const [notification, setNotification] =
    useState<Notifications.Notification>();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
      if (token == null) {
        return;
      }
      //update Users row with token
      supabase.auth.getUser().then((user) => {
        supabase
          .from("Users")
          .select("*")
          .eq("id", user?.data.user?.id)
          .then((res) => {
            console.log(user?.data.user?.id);
            console.log(res);
          });
        // save token to database
        supabase
          .from("Users")
          .update({ expo_push_token: token })
          .eq("id", user?.data.user?.id)
          .then((res) => {
            console.log(res);
          });
      });
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    if (
      notificationListener.current == null ||
      notificationListener.current == undefined
    ) {
      console.log("notification listener added");
      return;
    }

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }

      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  SplashScreen.hideAsync();

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
