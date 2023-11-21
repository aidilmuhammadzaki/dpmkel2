import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentSection from "../components/PaymentSection";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GetStarted1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light3.png")}
      />
      <Text style={[styles.step2Of, styles.step2OfTypo]}>Step 2 of 3</Text>
      <Text
        style={[styles.enterYourFirst, styles.yourTypo]}
      >{`Enter your First Name, Last Name, Birth Date to get 
started with your account.`}</Text>
      <Text style={[styles.tellUsYour, styles.step2OfTypo]}>
        Tell us your Details
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group13.png")}
      />
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.firstName, styles.step2OfTypo]}>First Name</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.firstName, styles.step2OfTypo]}>Last Name</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.firstName, styles.step2OfTypo]}>Birth Date</Text>
      </View>
      <PaymentSection
        buttonText="Next"
        propLeft={152}
        propWidth={39}
        onGroupPressablePress={() => navigation.navigate("GetStarted")}
      />
      <Text
        style={[styles.yourNameAnd, styles.yourTypo]}
      >{`Your Name and Birth Date should be same as on the
prescription when you upload one in the future for 
medicine to deliver.`}</Text>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("GetStarted2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
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
  step2OfTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  yourTypo: {
    lineHeight: 8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  lightIcon: {
    width: 375,
    position: "absolute",
    height: 812,
    left: 0,
    top: 0,
  },
  step2Of: {
    top: 97,
    fontSize: FontSize.size_lgi,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 16,
  },
  enterYourFirst: {
    top: 179,
  },
  tellUsYour: {
    top: 138,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    textAlign: "left",
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
    width: 343,
    backgroundColor: Color.colorWhite,
  },
  firstName: {
    top: 16,
    left: 8,
    fontSize: FontSize.size_base,
    lineHeight: 12,
    color: Color.colorLightgray,
    fontFamily: FontFamily.avenirNextLTPro,
    textAlign: "left",
  },
  rectangleParent: {
    top: 241,
    left: 16,
    width: 343,
  },
  rectangleGroup: {
    top: 301,
    left: 16,
    width: 343,
  },
  rectangleContainer: {
    top: 361,
    left: 16,
    width: 343,
  },
  yourNameAnd: {
    top: 429,
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
    width: "5.73%",
    height: "2.03%",
    position: "absolute",
  },
  getStarted: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GetStarted1;
