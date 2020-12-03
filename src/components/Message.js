import React from "react";
import { View, Text } from "react-native";

function Message(props) {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
}

export default Message;
