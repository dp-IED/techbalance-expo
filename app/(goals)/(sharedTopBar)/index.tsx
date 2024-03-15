import { View, Text } from "@/components/Themed";
import { TouchableOpacity, ScrollView, TextInput } from "react-native";
import { GoalType } from "@/types/GoalType";
import { useEffect, useState } from "react";
import {
  router,
  useLocalSearchParams,
  useGlobalSearchParams,
} from "expo-router";
import FilterButton from "@/components/FilterButton";

export type defaultValues = {
  frequency: string;
  time: string;
  reminder: boolean;
  reminderTime: Date;
};

export default function AddGoal() {
  // get the selected tab from the url (if it exists)
  const { tab } = useLocalSearchParams<{ tab: GoalType }>();
  const [selectedFilter, setSelectedFilter] = useState<string>("Recent");

  const BodySuggestedGoals: {
    [key: string]: {
      label: string;
      default: defaultValues;
    }[];
  } = {
    Recent: [
      {
        // we should make this into a proper type that overlaps with the Goal type / rework the Goal type
        // nb: these defaults could be set on a per-user basis (i.e they update when the user changes them in the next page)
        // TODO: revisit these and make them more type safe
        label: "Go to the gym",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Digital detox for half a day",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Swap a sugary drink for water or tea",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Go for a walk",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },

      {
        label: "Take a shower",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Implement a 'no screens' hour before bed",
        default: {
          frequency: "1",
          time: "Evening",
          reminder: false,
          reminderTime: new Date(new Date().setHours(19, 0, 0)),
        },
      },
    ],
  };

  const PeopleSuggestedGoals: {
    [key: string]: {
      label: string;
      default: defaultValues;
    }[];
  } = {
    Recent: [
      {
        label: "Study in a social setting",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Plan a meetup",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Practice active listening",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Speak to a family member",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Smile at a stranger",
        default: {
          frequency: "One-time",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Donate unused clothes",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
    ],
  };

  const SelfSuggestedGoals: {
    [key: string]: {
      label: string;
      default: defaultValues;
    }[];
  } = {
    Recent: [
      {
        label: "Meditate for 10 minutes",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Journal for 5 minutes",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Take a nap",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Read a book",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Drink a glass of water",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
      {
        label: "Stretch for 5 minutes",
        default: {
          frequency: "1",
          time: "any",
          reminder: false,
          reminderTime: new Date(),
        },
      },
    ],
  };

  const SuggestedGoals =
    tab === "Body"
      ? BodySuggestedGoals
      : tab === "People"
      ? PeopleSuggestedGoals
      : SelfSuggestedGoals;

  const SuggestedGoal = (props: { label: string; onPress: () => void }) => {
    const { label, onPress } = props;
    return (
      <TouchableOpacity
        style={{
          display: "flex",
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 24,
          paddingRight: 24,
          alignItems: "center",
          gap: 10,
          backgroundColor: "#F6F5FA",
          borderRadius: 30,
        }}
        onPress={() => onPress()}
      >
        <Text
          style={{
            color: "#9F92C7",
            fontFamily: "Rubik",
            fontSize: 16,
            fontWeight: "600",
            lineHeight: 18,
            letterSpacing: 0.2,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const [customGoal, setCustomGoal] = useState<string>("");

  return (
    <View
      style={{
        width: 361,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 20,
        paddingBottom: 29,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 28,
        borderRadius: 24,
      }}
    >
      <Text
        style={{
          color: "#49454F",
          fontFamily: "Rubik",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: 20,
        }}
      >
        Recommended Goals
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 4,
          paddingBottom: 4,
          alignItems: "flex-start",
          gap: 12,
          alignSelf: "stretch",
        }}
      >
        {Object.keys(SuggestedGoals).map((key, index) => (
          <FilterButton
            key={index}
            label={key}
            selected={selectedFilter === key}
            onPress={() => {
              setSelectedFilter(key);
            }}
          />
        ))}
      </View>
      {Object.entries(SuggestedGoals).map(([key, value], index) => (
        <View
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            justifyContent: "center",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <ScrollView
            contentContainerStyle={{
              display: "flex",
              width: 550,
              alignItems: "center",
              alignContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              // make more than one suggested goal per vertical axis and make it scrollable horizontally
              value.map((goal, index) => (
                <SuggestedGoal
                  key={index}
                  label={goal.label}
                  onPress={() => {
                    router.push({
                      pathname: "/(goals)/(sharedTopBar)/details",
                      params: {
                        type: tab,
                        label: goal.label,
                        frequency: goal.default.frequency,
                        time: goal.default.time,
                        reminder: goal.default.reminder ? "true" : "false",
                        reminderTime: goal.default.reminderTime.toISOString(),
                      },
                    });
                  }}
                />
              ))
            }
          </ScrollView>
        </View>
      ))}
      <TextInput
        placeholder="Enter a new goal..."
        placeholderTextColor={"#DFDAEC"}
        style={{
          display: "flex",
          height: 43,
          paddingLeft: 16,
          alignItems: "center",
          gap: 10,
          alignSelf: "stretch",
          backgroundColor: "#F6F5FA",
          borderRadius: 30,
          fontFamily: "Rubik",
          fontSize: 18,
          color: "#9F92C7",
          fontWeight: customGoal.length > 0 ? "600" : "bold",
        }}
        value={customGoal}
        onChangeText={(_n) => {
          setCustomGoal(_n);
        }}
      />
    </View>
  );
}
