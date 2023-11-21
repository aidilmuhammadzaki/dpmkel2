import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({ propTop }) => {
  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView4Style]}
    >
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.bookAnAppointment, styles.bookAnAppointmentTypo]}>
          Book an Appointment
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.onlineConsultation, styles.bookAnAppointmentTypo]}>
          Online Consultation
        </Text>
      </View>
      <Text style={[styles.drMariaSophie, styles.rp50Typo]}>
        Dr. Maria Sophie
      </Text>
      <Text style={[styles.yrsOfExperience, styles.perVisitTypo]}>
        12 Yrs of Experience
      </Text>
      <View style={styles.rp50Parent}>
        <Text style={[styles.rp50, styles.rp50Typo]}>Rp 50</Text>
        <Text style={[styles.perVisit, styles.perVisitTypo]}>per visit</Text>
      </View>
      <Text style={[styles.generalPhysician, styles.rp50Typo]}>
        General Physician
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-213.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 165,
    width: 342,
  },
  groupPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 37,
    width: 158,
  },
  bookAnAppointmentTypo: {
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    top: 7,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectanglePosition: {
    left: 8,
    position: "absolute",
  },
  rp50Typo: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
  },
  perVisitTypo: {
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    position: "absolute",
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
    height: 165,
    width: 342,
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue_100,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bookAnAppointment: {
    left: 14,
    width: 131,
    color: Color.colorMediumslateblue_100,
  },
  rectangleGroup: {
    left: 176,
    top: 121,
    width: 158,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorMediumslateblue_100,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  onlineConsultation: {
    left: 22,
    color: Color.colorWhite,
    width: 115,
  },
  rectangleContainer: {
    height: 37,
    width: 158,
    top: 121,
  },
  drMariaSophie: {
    color: Color.colorGray_200,
    textAlign: "left",
    left: 111,
    fontSize: FontSize.size_mini,
    top: 8,
  },
  yrsOfExperience: {
    top: 58,
    left: 111,
  },
  rp50: {
    fontSize: FontSize.size_mini,
    color: Color.colorMediumslateblue_100,
    left: 0,
    top: 0,
  },
  perVisit: {
    left: 49,
    top: 0,
    color: Color.colorGray_400,
  },
  rp50Parent: {
    top: 87,
    width: 92,
    height: 25,
    left: 111,
    position: "absolute",
  },
  generalPhysician: {
    top: 33,
    textTransform: "capitalize",
    color: Color.colorGray_200,
    textAlign: "left",
    left: 111,
    fontSize: FontSize.size_xs,
  },
  rectangleIcon: {
    width: 98,
    height: 97,
    top: 8,
    borderRadius: Border.br_7xs,
  },
  rectangleParent: {
    top: 433,
    left: 17,
    position: "absolute",
  },
});

export default SectionCard;
