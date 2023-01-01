import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BasicButton from "./components/BasicButton";
import axios from "axios";

const HomePage = () => {
  // To Store the value from Frontend
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  // Function to send the Data
  const submitData = async () => {
    const data = {
      name: userName,
      phone: phone,
      age: age,
    };

    const res = await axios.post("/createUser", data);
    console.log(res);
  };

  // To handle the Default
  const handleSubmit = (event) => {
    event.preventDefault();
    // To submit the Data
    submitData();
    // But Empty the previous Details
    setUserName("");
    setPhone("");
    setAge("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>CRUD APP</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            flex: 1,
          }}
        >
          <View>
            <TextInput
              keyboardType="default"
              style={styles.inputTextStyle}
              placeholder="Name"
              onChangeText={(newUserName) => setUserName(newUserName)}
              defaultValue={userName}
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={10}
              style={styles.inputTextStyle}
              placeholder="Phone No"
              onChangeText={(newPhone) => setPhone(newPhone)}
              defaultValue={phone}
            />
            <TextInput
              keyboardType="number-pad"
              style={styles.inputTextStyle}
              placeholder="Age"
              onChangeText={(newAge) => setAge(newAge)}
              defaultValue={age}
            />
            <View style={styles.buttonContainer}>
              <BasicButton
                title="Register User"
                color="white"
                targetAddress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: "black",
    paddingBottom: 15,
  },
  headingContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeights: 600,
  },
  inputTextStyle: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 5,
  },
});
