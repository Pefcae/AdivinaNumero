import React from "react";
import { View, Text, Button, Alert, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { colors } from "../../constants";

const Footer = () => {
  const onHandleReset = () => {};

  const onHandleHome = () => {
    Alert.alert("Soy Home", "Presionaste Home", [
      { text: "Entendido", style: "destructive", onPress: onHandleReset },
    ]);
  };

  const onHandleReglas = () => {
    Alert.alert("Soy Reglas", "Presionaste Reglas", [
      { text: "Entendido", style: "destructive", onPress: onHandleReset },
    ]);
  };

  const onHandleSoporte = () => {
    Alert.alert("Soy Soporte", "Presionaste Soporte", [
      { text: "Entendido", style: "destructive", onPress: onHandleReset },
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button style={styles.title} title="🏠" onPress={onHandleHome} color={colors.secondary} />
        <Button style={styles.title} title="📏" onPress={onHandleReglas} color={colors.primary} />
        <Button style={styles.title} title="🛠️" onPress={onHandleSoporte} color={colors.primary} />
      </View>
    </SafeAreaView>
  );
};

export default Footer;
