import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentSection from "../components/PaymentSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GetStarted2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light3.png")}
      />
      <Text style={[styles.step1Of, styles.step1OfTypo]}>Step 1 of 3</Text>
      <Text
        style={[styles.enterYourEmail, styles.orTypo1]}
      >{`Enter your Email Address and choose a strong
Password.`}</Text>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <Text style={[styles.useMyMobile, styles.useMyMobileTypo]}>
        Use My Mobile Number Instead
      </Text>
      <Text style={[styles.getStarted1, styles.orTypo]}>Get Started</Text>
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group13.png")}
      />
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <Text style={[styles.emailAddress, styles.useMyMobileTypo]}>
          Email Address
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <Text style={[styles.emailAddress, styles.useMyMobileTypo]}>
          Password
        </Text>
      </View>
      <PaymentSection
        buttonText="Next"
        propLeft={152}
        propWidth={39}
        onGroupPressablePress={() => navigation.navigate("GetStarted1")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group14.png")}
      />
      <Pressable
        style={[styles.group, styles.groupLayout]}
        onPress={() => navigation.navigate("SplashScreen")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group8.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lightIconPosition: {
    left: 0,
    top: 0,
  },
  step1OfTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenirNextLTPro,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  orTypo1: {
    fontSize: FontSize.size_sm,
    lineHeight: 8,
  },
  orTypo: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  useMyMobileTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout1: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  groupLayout: {
    width: "5.73%",
    position: "absolute",
  },
  lightIcon: {
    width: 375,
    position: "absolute",
    height: 812,
    left: 0,
    top: 0,
  },
  step1Of: {
    top: 96,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    lineHeight: 25,
  },
  enterYourEmail: {
    top: 178,
    lineHeight: 8,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    position: "absolute",
  },
  or: {
    top: 368,
    left: 177,
    lineHeight: 8,
    fontSize: FontSize.size_sm,
  },
  useMyMobile: {
    top: 400,
    left: 71,
    textDecoration: "underline",
    color: Color.colorMediumslateblue_100,
    textAlign: "center",
    lineHeight: 8,
  },
  getStarted1: {
    top: 137,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    lineHeight: 25,
    left: 16,
  },
  groupIcon: {
    height: "1.96%",
    width: "4.67%",
    top: "37.68%",
    right: "7.79%",
    bottom: "60.36%",
    left: "87.55%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 343,
  },
  emailAddress: {
    top: 16,
    left: 8,
    lineHeight: 12,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  rectangleParent: {
    top: 240,
    left: 16,
  },
  rectangleGroup: {
    top: 300,
    left: 16,
  },
  groupIcon1: {
    height: "2.4%",
    top: "38.46%",
    right: "7.52%",
    bottom: "59.14%",
    left: "86.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  group: {
    left: "4.35%",
    top: "7.67%",
    right: "89.92%",
    bottom: "90.3%",
    height: "2.03%",
  },
  getStarted: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GetStarted2;
