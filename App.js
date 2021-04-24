import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstRule, setFirstRule] = useState([]);
  const [secondRule, setSecondRule] = useState([]);
  const [fresult, setFresult] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const loveCalculator = async (firstName, lastName) => {
    //First Rule
    setIsDisabled(true);
    const preWord = "Loves";

    let tempArray = [],
      result = [];

    const newSentence =
      firstName.toLowerCase() + preWord.toLowerCase() + lastName.toLowerCase();
    const totalCharacter = newSentence.length;
    var uniqueSentence = newSentence
      .split("")
      .filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
      })
      .join("");

    const uniqueCharacter = uniqueSentence.length;
    let item, singleCharacterCount;

    for (let i = 0; i < uniqueCharacter; i++) {
      if (Number(i) === 0) {
        item = uniqueSentence.substr(0, 1);
      } else {
        item = uniqueSentence.substr(i, 1);
      }

      singleCharacterCount = await characterCount(newSentence, item);

      tempArray.push(singleCharacterCount);
      setFirstRule(tempArray);
    }

    result = await sumArray(tempArray);

    let response;

    if (result.length > 2) {
      for (let i = 0; i < result.length; i++) {
        if (result.length <= 2) {
          response = await finalResult(result);
          setFresult(response);
          if (response > 70) {
            alert(
              firstName +
                " and " +
                lastName +
                " are genuinely in love. " +
                response +
                "% is a great"
            );
          } else {
            alert(response + "% is a okay. Best of luck.");
          }
          break;
        }
        result = await sumArray(result);

        if (result.length <= 2) {
          response = await finalResult(result);

          setFresult(response);
          if (response > 70) {
            alert(
              firstName +
                " and " +
                lastName +
                " are genuinely in love. " +
                response +
                "% is a great"
            );
          } else {
            alert(response + "% is a okay. Best of luck.");
          }

          break;
        }
      }
    }
    setIsDisabled(false);
  };

  const finalResult = async (result) => {
    let response1, response2;
    response1 = result[0];
    response2 = result[1];
    let res = `${response1}${response2}`;
    return await res;
  };

  const sumArray = async (tempArray) => {
    let vTempArray = [];
    let arrayLength = tempArray.length;
    let isEven = false;
    if (arrayLength % 2 == 0) {
      isEven = true;
    }

    let middlePoint = Math.floor(arrayLength / 2); // findding the middle point for looping purpose

    let vTempLastIndex = arrayLength - 1; // finding last index
    let lastIndex, sum;
    for (let i = 0; i < middlePoint; i++) {
      let firstIndex = tempArray[i];
      if (i === 0) {
        vTempLastIndex = vTempLastIndex;
        lastIndex = tempArray[vTempLastIndex];
      } else {
        vTempLastIndex = vTempLastIndex - 1;
        lastIndex = tempArray[vTempLastIndex];
      }

      sum = Number(firstIndex) + Number(lastIndex); //sum between first index and last index

      if (sum > 10) {
        let middleindex = Math.floor(tempArray.length / 2);
        let Midvalue = tempArray[middleindex];

        let fIndex = sum.toString().substr(0, 1);
        let sIndex = sum.toString().substr(1, 2);

        sum = Number(fIndex) + Number(Midvalue);
      }
      vTempArray.push(sum);
      setSecondRule(vTempArray);
    }

    if (isEven == false) {
      var middleValue = tempArray[middlePoint];
      vTempArray = vTempArray.concat(middleValue);
      setSecondRule(vTempArray);
    }

    return await vTempArray;
  };

  const characterCount = async (sentence, letter) => {
    var letter_Count = 0;
    for (var position = 0; position < sentence.length; position++) {
      if (sentence.charAt(position) == letter) {
        letter_Count += 1;
      }
    }
    return await letter_Count;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Love Compatabilty Checker</Text>
      <StatusBar style="auto" />

      <Input
        value={firstName}
        placeholderText="Enter your name"
        onChangeText={(text) => setFirstName(text)}
      />
      <Text style={styles.title}>+</Text>
      <Input
        value={lastName}
        placeholderText="Enter partner's name"
        onChangeText={(text) => setLastName(text)}
      />

      <Button
        title="Submit"
        onPress={() => loveCalculator(firstName, lastName)}
        disabled={isDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Arial",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
    color: "red",
    alignSelf: "center",
  },
});
