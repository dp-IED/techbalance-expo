import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { TextInputStyle } from ".";
import { useReducer } from "react";
import Toast from "@/components/Snackbar";
import { supabase } from "@/scripts/initSupabase";

export default function Login() {
  const login = async () => {
    // Check if the email and password are valid
    if (state.email === "" || state.password === "") {
      dispatch({
        type: "SET_ERROR",
        payload: "Please enter an email and password",
      });
      return;
    }

    // Sign in with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password,
    });


    // If there is an error, display it
    if (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  interface State {
    email: string;
    password: string;
    error: string;
  }

  type Action =
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_PASSWORD"; payload: string }
    | { type: "SET_ERROR"; payload: string };

  const initialState: State = {
    email: "",
    password: "",
    error: "",
  };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

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
      {
        // Show the error message if there is one
        state.error ? <Toast main={state.error} /> : null
      }
      <TouchableOpacity
        onPress={() => {
          login();
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
