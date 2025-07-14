import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from '../HomeStyle/styles';
import { BatLogo } from "../components/BatLogo";
import { BatButton } from '../components/Button';
import { Form } from "./Formulario";


export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  return(
    <View style={styles.appContainer}>
      <Pressable 
        style={styles.pressable}
        onPress={() => setIsFormVisible(!isFormVisible)}
      >
        <Text>
          {isFormVisible ? '📝' : '👨‍💻'}
        </Text>
      </Pressable>

      <View style={[styles.logoContainer, { display: isFormVisible ? 'none' : 'flex' }]}>
        <BatLogo/>
      </View>

      <View style={[styles.inputContainer, { display: isFormVisible ? 'none' : 'flex' }]}>
        <BatButton/>
      </View>

        <Form visible={isFormVisible}/>
      
      <StatusBar style="light" />
    </View>
  )
}