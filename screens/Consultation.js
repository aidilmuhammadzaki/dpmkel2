import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchMedicinesSection from "../components/SearchMedicinesSection";
import SectionCard from "../components/SectionCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Consultation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.consultation}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light1.png")}
      />
      <Text style={[styles.consultation1, styles.greaterNoidaTypo]}>
        Consultation
      </Text>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group8.png")}
        />
      </Pressable>
      <View style={[styles.consultationChild, styles.lightIconPosition]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text
          style={[styles.onlineConsultation, styles.bookAppointmentTypo]}
        >{`Online
Consultation`}</Text>
        <Text
          style={[styles.bookAppointment, styles.bookAppointmentTypo]}
        >{`Book
Appointment`}</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-36.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-35.png")}
        />
        <View style={styles.lineView} />
      </View>
      <SearchMedicinesSection
        searchInputText="Search Doctors"
        propTop={365}
        propLeft={15}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.greaterNoida, styles.greaterNoidaTypo]}>
          Greater Noida
        </Text>
      </View>
      <SectionCard />
      <SectionCard propTop={614} />
    </View>
  );
};

const styles = StyleSheet.create({
  lightIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  greaterNoidaTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 140,
    width: 342,
    position: "absolute",
  },
  bookAppointmentTypo: {
    textAlign: "center",
    color: Color.colorMediumslateblue_100,
    lineHeight: 10,
    fontSize: FontSize.size_smi,
    top: 105,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupLayout: {
    height: 83,
    width: 83,
    top: 12,
    position: "absolute",
  },
  lightIcon: {
    top: 0,
    height: 812,
    width: 375,
  },
  consultation1: {
    top: 102,
    fontSize: FontSize.size_14xl,
    lineHeight: 25,
    fontWeight: "700",
    left: 16,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
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
  consultationChild: {
    top: 298,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    left: 0,
    width: 342,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  onlineConsultation: {
    left: 48,
  },
  bookAppointment: {
    left: 218,
  },
  groupItem: {
    left: 44,
  },
  groupInner: {
    left: 217,
  },
  lineView: {
    top: 11,
    left: 172,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderRightWidth: 1,
    width: 1,
    height: 120,
    position: "absolute",
  },
  rectangleParent: {
    top: 142,
    left: 16,
  },
  groupIcon: {
    height: "102.63%",
    width: "13.57%",
    top: "-3.68%",
    right: "86.98%",
    bottom: "1.05%",
    left: "-0.54%",
    position: "absolute",
  },
  greaterNoida: {
    left: 24,
    fontSize: FontSize.size_base,
    top: 0,
  },
  groupParent: {
    height: "2.34%",
    width: "34.4%",
    top: "40.64%",
    right: "61.07%",
    bottom: "57.02%",
    left: "4.53%",
    position: "absolute",
  },
  consultation: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: 812,
    width: "100%",
  },
});

export default Consultation;
