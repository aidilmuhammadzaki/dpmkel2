import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentSection from "../components/PaymentSection";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted}>
      <Image
        style={styles.lightIcon}
        contentFit="cover"
        source={require("../assets/light3.png")}
      />
      <Text style={[styles.step3Of, styles.yourTypo]}>Step 3 of 3</Text>
      <Text
        style={[styles.enterYourAddress, styles.yourTypo]}
      >{`Enter your address where we deliver your medicines
and your booking appointment details.`}</Text>
      <Text style={[styles.tellUsYour, styles.yourTypo]}>
        Tell us your Address
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group13.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.street, styles.stateTypo]}>Street</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.street, styles.stateTypo]}>City</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupBorder]} />
        <View style={[styles.rectangleView, styles.groupBorder]} />
        <Text style={[styles.state, styles.stateTypo]}>State</Text>
        <Text style={[styles.zipCode, styles.stateTypo]}>ZIP Code</Text>
      </View>
      <PaymentSection
        buttonText="Next"
        propLeft={152}
        propWidth={39}
        onGroupPressablePress={() => navigation.navigate("SelectAPlan1")}
      />
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("GetStarted1")}
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
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 44,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: 44,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  stateTypo: {
    color: Color.colorLightgray,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  lightIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  step3Of: {
    top: 97,
    fontSize: FontSize.size_lgi,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    lineHeight: 25,
  },
  enterYourAddress: {
    top: 179,
    fontSize: FontSize.size_sm,
    lineHeight: 8,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
  },
  tellUsYour: {
    top: 138,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    lineHeight: 25,
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
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: 0,
  },
  street: {
    left: 8,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
  },
  rectangleParent: {
    top: 241,
  },
  rectangleGroup: {
    top: 301,
  },
  groupInner: {
    width: 182,
    left: 0,
  },
  rectangleView: {
    left: 192,
    width: 151,
  },
  state: {
    width: 77,
    left: 8,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
  },
  zipCode: {
    left: 200,
    width: 71,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
  },
  rectangleContainer: {
    top: 361,
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
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default GetStarted;
