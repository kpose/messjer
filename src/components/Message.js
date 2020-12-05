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

function Message({ message, username }) {
  const isUser = username === message.username;
  console.log(isUser);

  const userCard = () => {
    return (
      <Card style={styles.cardContainer}>
        {/* <Card.Title title={props.username} /> */}
        <Card.Content>
          <Title
            style={{
              fontSize: 17,
              fontWeight: "bold",
              //textDecorationLine: "underline",
              color: "#3b6ebf",
            }}
          >
            {message.username}:
          </Title>
          <Paragraph style={{ flexShrink: 1, fontSize: 20 }}>
            {message.text}
          </Paragraph>
        </Card.Content>
      </Card>
    );
  };

  return (
    <Card style={isUser ? styles.userCardContainer : styles.guestCardContainer}>
      {/* <Card.Title title={props.username} /> */}
      <Card.Content>
        <Title
          style={{
            fontSize: 17,
            fontWeight: "bold",
            //textDecorationLine: "underline",
            color: "#3b6ebf",
          }}
        >
          {message.username}:
        </Title>
        <Paragraph style={{ flexShrink: 1, fontSize: 20 }}>
          {message.text}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

export default Message;

const styles = StyleSheet.create({
  userCardContainer: {
    marginBottom: 5,
    borderRadius: 30,
    elevation: 20,
    borderColor: "#416c87",
    width: windowWidth / 1.3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "auto",
    justifyContent: "flex-end",
    backgroundColor: "blue",
  },
  guestCardContainer: {
    marginBottom: 5,
    borderRadius: 30,
    elevation: 20,
    borderColor: "#416c87",
    width: windowWidth / 1.3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 2,
    backgroundColor: "#969ea3",
  },
});
