import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  return (
    <View style={styles.container}>
       <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value={input}
    />

    {/* button */}
    {/* message body */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
