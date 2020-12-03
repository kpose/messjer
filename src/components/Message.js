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
function Message(props) {
  //const windowHeight = useWindowDimensions().height;
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
          {props.username}:
        </Title>
        <Paragraph style={{ flexShrink: 1, fontSize: 20 }}>
          {props.text}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

export default Message;

const styles = StyleSheet.create({
  cardContainer: {
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
