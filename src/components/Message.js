import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

const Message = ({ message, username }) => {
  const isUser = username === message.username;

  return (
    <Card style={isUser ? styles.userCardContainer : styles.guestCardContainer}>
      {/* <Card.Title title={props.username} /> */}
      <Card.Content>
        <Title
          style={{
            fontSize: 17,
            fontWeight: "bold",
            //textDecorationLine: "underline",
            color: "#000103",
          }}
        >
          {message.username}:
        </Title>
        <Paragraph style={{ flexShrink: 1, fontSize: 20 }}>
          {message.message}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Message;

const styles = StyleSheet.create({
  userCardContainer: {
    marginBottom: 5,
    borderRadius: 30,
    elevation: 20,
    //borderColor: "#416c87",
    width: windowWidth / 1.5,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingRight: 10,
    marginLeft: "auto",
    justifyContent: "flex-end",
    backgroundColor: "#4463a6",
  },
  guestCardContainer: {
    marginBottom: 5,
    borderRadius: 50,
    elevation: 20,
    //borderColor: "#416c87",
    width: windowWidth / 1.5,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 2,
    backgroundColor: "#9fa0a1",
  },
});
