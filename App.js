import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import Message from "./src/components/Message";
import db from "./src/firebase";
import firebase from "firebase";
import {
  Button as ButtonPaper,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput as TextInputPaper,
} from "react-native-paper";
//import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  console.log(messages);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setIsDialogVisible(true);
  }, []);

  const sendMessage = () => {
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const sendUser = () => {
    setUsername(inputVal);
    setInputVal("");
    setIsDialogVisible(false);
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <Message key={message.message} username={username} message={message} />
    ));
  };

  const usernameDialog = () => {
    return (
      <View>
        <Portal>
          <Dialog
            visible={isDialogVisible}
            onDismiss={() => setIsDialogVisible(false)}
            style={{ borderRadius: 40, backgroundColor: "#4278c9" }}
          >
            <Dialog.Title>Enter Username</Dialog.Title>
            <Dialog.Content>
              <TextInputPaper
                value={inputVal}
                onChangeText={(text) => setInputVal(text)}
                onSubmitEditing={sendUser}
                style={{ backgroundColor: "#3b3d40s" }}
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
        <ScrollView>
          <SafeAreaView style={styles.messageContainer}>
            <StatusBar barStyle="dark-content" />
            {renderMessages()}
            {usernameDialog()}
          </SafeAreaView>
        </ScrollView>

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
};

export default App;

const styles = StyleSheet.create({
  messageContainer: {
    flex: 0.8,
    flexDirection: "column",
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  senderContainer: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
