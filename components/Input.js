import React, { memo } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const Input = ({ value, placeholderText, iconName, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.inputText}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        multiline={false}
        {...props}
      />
    </View>
  );
};
export default memo(Input);
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    fontSize: 14,
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  inputText: {
    flex: 1,
    borderColor: "lightgray",
    borderRadius: 2,
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Lato-Regular",
    color: "#333",
    textAlign: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
