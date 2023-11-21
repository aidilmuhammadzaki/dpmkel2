import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#4a49d9", "#5857b9"]}
    >
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("SelectAPlan1")}
      >
        <Text style={[styles.skip1, styles.skip1FlexBox]}>Skip</Text>
      </Pressable>
      <View style={styles.splashScreenChild} />
      <View style={[styles.splashScreenItem, styles.splashLayout]} />
      <View style={[styles.splashScreenInner, styles.splashLayout]} />
      <Image
        style={[styles.timeIcon, styles.timeIconPosition]}
        contentFit="cover"
        source={require("../assets/time.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.splashScreenChild1}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.splashScreenChild2}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.yourHealthIs, styles.signInTypo]}>{`Your health
is in our hands.`}</Text>
      <Text style={styles.findMedicinesOnline}>
        Find medicines online and get them delivered at your doorstep. Upload
        prescription of the medicine and get your medicine.
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.createAFreeLayout]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account. `}</Text>
        <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("GetStarted2")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.createAFreeAccountParent}>
          <Text style={[styles.createAFree, styles.createAFreeLayout]}>
            Create a Free Account
          </Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group12.png")}
          />
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  skip1FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  splashLayout: {
    opacity: 0.5,
    width: 15,
    height: 6,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    top: 63,
    position: "absolute",
  },
  timeIconPosition: {
    left: 0,
    top: 0,
  },
  signInTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.avenirNextLTPro,
  },
  createAFreeLayout: {
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  skip1: {
    fontFamily: FontFamily.avenirNextLTPro,
    textDecoration: "underline",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  skip: {
    left: 328,
    top: 60,
    position: "absolute",
  },
  splashScreenChild: {
    width: 38,
    height: 6,
    borderRadius: Border.br_xl,
    top: 63,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
  },
  splashScreenItem: {
    left: 62,
  },
  splashScreenInner: {
    left: 85,
  },
  timeIcon: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  vectorIcon: {
    top: 165,
    left: 83,
    width: 270,
    height: 225,
    position: "absolute",
  },
  ellipseIcon: {
    top: 111,
    left: 211,
    width: 122,
    height: 122,
    position: "absolute",
  },
  splashScreenChild1: {
    top: 254,
    left: 33,
    width: 111,
    height: 111,
    position: "absolute",
  },
  splashScreenChild2: {
    top: 341,
    left: 237,
    width: 90,
    height: 90,
    position: "absolute",
  },
  yourHealthIs: {
    top: 474,
    fontSize: 35,
    left: 16,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  findMedicinesOnline: {
    top: 566,
    width: 343,
    lineHeight: 25,
    fontSize: FontSize.size_lg,
    left: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.avenirNextLTPro,
  },
  signIn: {
    textDecoration: "underline",
  },
  alreadyHaveAnContainer: {
    top: 750,
    left: 68,
    width: 240,
    lineHeight: 25,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 44,
  },
  createAFree: {
    color: Color.colorMediumslateblue_100,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    left: 0,
    top: 0,
    fontFamily: FontFamily.avenirNextLTPro,
  },
  groupIcon: {
    height: "45.6%",
    width: "5.83%",
    top: "24%",
    right: "0%",
    bottom: "30.4%",
    left: "94.17%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  createAFreeAccountParent: {
    top: 11,
    left: 71,
    width: 201,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 690,
    left: 16,
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 812,
  },
});

export default SplashScreen;
