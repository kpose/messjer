import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Message from "./src/components/Message";

import {
  Button as ButtonPaper,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput as TextInputPaper,
} from "react-native-paper";
//import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    setIsDialogVisible(true);
  }, []);

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  const sendUser = () => {
    setUsername(inputVal);
    setInputVal("");
    setIsDialogVisible(false);
  };

  const renderMessages = () => {
    return messages.map((message) => <Message text={message} />);
  };

  const usernameDialog = () => {
    return (
      <View>
        <Portal>
          <Dialog
            visible={isDialogVisible}
            onDismiss={() => setIsDialogVisible(false)}
          >
            <Dialog.Title>Enter Username</Dialog.Title>
            <Dialog.Content>
              <TextInputPaper
                value={inputVal}
                onChangeText={(text) => setInputVal(text)}
                onSubmitEditing={sendUser}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <ButtonPaper onPress={sendUser}>Submit</ButtonPaper>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  };

  return (
    <>
      <Provider>
        <View style={styles.messageContainer}>
          <StatusBar barStyle="dark-content" />
          <Text>messages</Text>
          <Text> username is : {username}</Text>
          {renderMessages()}
          {usernameDialog()}
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.senderContainer}>
          <TextInput
            onChangeText={(text) => setInput(text)}
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            value={input}
            placeholder="enter message here"
          />
          <Button
            title="Send Message"
            onPress={sendMessage}
            disabled={!input}
          />
        </KeyboardAvoidingView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 0.9,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  senderContainer: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
