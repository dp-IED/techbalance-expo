import { Redirect, Slot, Tabs } from "expo-router";
import { useContext, useState } from "react";
import { AuthContext } from "@/ctx/AuthProvider";
import Landing from "./landing";

export default function Layout() {
	const { user } = useContext(AuthContext);
	const [showTabs, setShowTabs] = useState<boolean>(false);
	if (user) {
		return <Redirect href="/(home)" />;
	}

	return (
		<>
			{showTabs ? (
				<Tabs>
					<Tabs.Screen
						name="index"
						options={{
							tabBarLabel: "Sign Up",
							headerShown: false,
							tabBarLabelPosition: "beside-icon",
							// hide the icon for the tab
							tabBarIconStyle: {
								display: "none",
							},
						}}
					/>
					<Tabs.Screen
						name="login"
						options={{
							tabBarLabel: "Log-in",
							headerShown: false,
							tabBarLabelPosition: "beside-icon",
							// hide the icon for the tab
							tabBarIconStyle: {
								display: "none",
							},
						}}
					/>
					<Tabs.Screen
						name="landing"
						options={{
							href: null,
						}}
					/>
				</Tabs>
			) : (
				<Landing 
          setShowTabs={setShowTabs} 
          headerText="Welocme to"
          actionText="Continue"
          onPressAction={() => setShowTabs(true)}
          // imageURL={require("../../assets/images/progress_poly.png")}
          imageURL=""
        />
			)}
		</>
	);
}
