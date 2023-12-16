// ChatScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ChatProps {
  updateGeneratedText: (text: string) => void;
}

const ChatScreen = ({ updateGeneratedText }: ChatProps) => (
  <View style={styles.container}>
    <Text>{/* Display generated text here */}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
