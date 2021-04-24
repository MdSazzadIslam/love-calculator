import React, { memo, useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

const Button = ({ title, onPress, disabled, ...rest }) => {
  debugger;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      {...rest}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Lato-Regular",
  },
});
