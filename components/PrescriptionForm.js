import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const PrescriptionForm = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={styles.uploadAPrescriptionParent}>
        <Text style={styles.uploadAPrescription}>Upload a Prescription</Text>
        <Text
          style={[styles.uploadAPrescription1, styles.uploadTypo]}
        >{`Upload a prescription and our pharmacist
will manage the medicine for you.`}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.upload, styles.uploadTypo]}>Upload</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 75,
    width: 342,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  uploadTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupLayout: {
    height: 25,
    width: 74,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    left: 0,
    height: 75,
    width: 342,
    position: "absolute",
  },
  uploadAPrescription: {
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 0,
    top: 0,
    position: "absolute",
  },
  uploadAPrescription1: {
    top: 24,
    color: Color.labelColorLightPrimary,
    left: 0,
  },
  uploadAPrescriptionParent: {
    top: 11,
    left: 10,
    width: 229,
    height: 54,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorMediumslateblue_100,
    left: 0,
    top: 0,
  },
  upload: {
    top: 5,
    left: 16,
    color: Color.colorWhite,
  },
  rectangleGroup: {
    top: 23,
    left: 257,
  },
  rectangleParent: {
    top: 157,
    left: 17,
  },
});

export default PrescriptionForm;
