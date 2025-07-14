import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';

import { styles } from '../FormStyle/styles';

type FormProps = {
  visible: boolean;
};

export function Form({ visible }: FormProps) {
  const [text, setText] = useState('');

  const handleFormSubmit = () => {
    Alert.alert('Form enviado', `Formulario: ${text}`);
    setText('');
  };
  return (
    <View style={visible ? styles.containerOn : styles.containerOff}>

      <Text style={styles.textForm}>Formulario</Text> 
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <Pressable style={styles.pressable} onPress={handleFormSubmit}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  );
}