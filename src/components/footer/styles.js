import { StyleSheet, Dimensions, StatusBar } from "react-native";

import { colors } from "../../constants";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
    backgroundColor: colors.primary,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
  },

});
