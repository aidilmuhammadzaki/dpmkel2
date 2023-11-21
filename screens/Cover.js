import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Cover = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cover}
      onPress={() => navigation.navigate("SplashScreen")}
    >
      <View style={styles.groupParent}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group11.png")}
        />
        <View style={styles.groupChild} />
        <Text style={[styles.gomedApp, styles.ver10Typo]}>{`GoMed
App`}</Text>
      </View>
      <Text style={[styles.ver10, styles.ver10Typo]}>Ver 1.0</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ver10Typo: {
    textAlign: "left",
    color: Color.colorMediumslateblue_100,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupIcon: {
    height: "110.63%",
    width: "67.47%",
    top: "-5.25%",
    right: "35.41%",
    bottom: "-5.37%",
    left: "-2.88%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    height: "63.75%",
    width: "59.59%",
    top: "18.75%",
    right: "0%",
    bottom: "17.5%",
    left: "40.41%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  gomedApp: {
    top: "21.25%",
    left: "44.52%",
    fontSize: 21,
    fontWeight: "700",
  },
  groupParent: {
    height: "9.85%",
    width: "38.93%",
    top: "45.07%",
    right: "30.67%",
    bottom: "45.07%",
    left: "30.4%",
    position: "absolute",
  },
  ver10: {
    top: 780,
    left: 158,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
  },
  cover: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Cover;
