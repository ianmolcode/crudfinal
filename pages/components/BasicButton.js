import React from "react";
import { Alert, Button, StyleSheet } from "react-native";

const BasicButton = ({ title, color, targetAddress }) => {
  return (
    <Button
      style={{ backgroundColor: "lightgrey" }}
      title={title}
      color={color}
      onPress={targetAddress}
    />
  );
};

export default BasicButton;

const styles = StyleSheet.create({});
