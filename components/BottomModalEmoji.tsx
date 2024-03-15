import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import ButtonNormal from "./ButtonNormal";

const ModalTester = (props: {
  toggleModal: () => void;
  isModalVisible: boolean;
  data: { id: number; text: string; emoji: string }[];
  changeData: (data: { id: number; text: string; emoji: string }[]) => void;
}) => {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={props.isModalVisible}
        style={styles.view}
        onBackdropPress={props.toggleModal}
        onBackButtonPress={props.toggleModal}
        backdropColor={"black"}
        backdropOpacity={0.5}
        avoidKeyboard={true}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={props.toggleModal}
            style={styles.pressable}
          >
            <View style={styles.closeContainer}>
              <AntDesign name="close" size={25} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerTextStyle}>Add other feeling</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type a feeling"
          />
          <ButtonNormal
            title={"Confirm"}
            onPress={() => {
              const newData = props.data.concat({
                id: props.data.length + 1,
                text: text,
                emoji: "😃",
              });
              props.changeData(newData);
              props.toggleModal();
            }}
            active={true}
            color={"#D9D8EB"}
            height={50}
            style={{ marginHorizontal: 50, marginTop: 60 }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 400,
    padding: 16,
    gap: 25,
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  pressable: {},
  centeredView: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  closeContainer: {
    paddingVertical: 10,
  },

  headerTextStyle: {
    fontSize: 28,
    fontFamily: "Rubik_500Medium",
    color: "#4F455C",
  },
  input: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#F0F3FF",
    paddingHorizontal: 20,
    fontFamily: "Rubik_500Medium",
    fontSize: 18,
  },
});

export default ModalTester;
