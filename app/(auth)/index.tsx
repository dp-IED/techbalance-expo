// this is the signup page

import Toast from "@/components/Snackbar";
import { supabase } from "@/scripts/initSupabase";
import { router } from "expo-router";
import { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const TextInputStyle = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  placeholder: {
    color: "black",
  },
});

export default function Signup() {
  interface State {
    email: string;
    password: string;
    passwordConfirmation: string;
    error: string;
  }

  type Action =
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_PASSWORD"; payload: string }
    | { type: "SET_PASSWORD_CONFIRMATION"; payload: string }
    | { type: "SET_ERROR"; payload: string };

  const initialState: State = {
    email: "",
    password: "",
    passwordConfirmation: "",
    error: "",
  };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "SET_PASSWORD_CONFIRMATION":
        return {
          ...state,
          passwordConfirmation: action.payload,
        };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  async function register() {
    if (state.password !== state.passwordConfirmation) {
      // warn about any password mismatch
      dispatch({
        type: "SET_ERROR",
        payload: "Passwords do not match",
      });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: state.email,
      password: state.password,
    });

    if (!error && !data) {
      alert("Check your email for the login link!");
    }
    if (error) {
      alert(error.message);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 24,
        }}
      >
        Sign up
      </Text>
      <TextInput
        placeholder="Email"
        value={state.email}
        autoCapitalize="none"
        keyboardType="email-address"
        style={TextInputStyle.input}
        placeholderTextColor={TextInputStyle.placeholder.color}
        onChangeText={(text) => dispatch({ type: "SET_EMAIL", payload: text })}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        value={state.password}
        style={TextInputStyle.input}
        placeholderTextColor={TextInputStyle.placeholder.color}
        onChangeText={(text) =>
          dispatch({ type: "SET_PASSWORD", payload: text })
        }
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        autoCapitalize="none"
        value={state.passwordConfirmation}
        style={TextInputStyle.input}
        placeholderTextColor={TextInputStyle.placeholder.color}
        onChangeText={(text) =>
          dispatch({ type: "SET_PASSWORD_CONFIRMATION", payload: text })
        }
      />
      {
        // Show the error message if there is one
        state.error ? <Toast main={state.error} /> : null
      }
      <TouchableOpacity
        onPress={() => {
          register();
          router.push("/(home)");
        }}
        style={{
          backgroundColor: "#add8e6",
          padding: 16,
          borderRadius: 8,
          marginTop: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
