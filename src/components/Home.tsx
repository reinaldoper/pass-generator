import React from "react";
import {Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from '../HomeStyle/styles';
import { BatLogo } from "../components/BatLogo";
import { BatButton } from '../components/Button';


export default function Home() {
  return(
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.inputContainer}>
        <BatButton/>
      </View>


      <StatusBar style="light" />
    </View>
  )
}