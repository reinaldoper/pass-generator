import React, { useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from '../styleButton/styles';
import generatePass from '../services/password';
import { BatTextInput } from './BatTextInput';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken  = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }
  return (
    <>
    <BatTextInput pass={pass} />
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}