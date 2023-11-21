import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const UploadAPrescription = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.uploadAPrescription, styles.iconLayout]}>
      <View style={[styles.uploadAPrescriptionChild, styles.uploadLayout]} />
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light2.png")}
      />
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
      <View style={styles.uploadAPrescriptionParent}>
        <Text style={[styles.uploadAPrescription1, styles.uploadPosition]}>
          Upload a Prescription
        </Text>
        <Text
          style={[styles.uploadAPrescription2, styles.uploadTypo]}
        >{`Upload a prescription and our pharmacist will manage the
medicine for you.`}</Text>
      </View>
      <Text style={[styles.youCanUpload, styles.uploadTypo]}>
        You can upload from gallery or take it directly from a camera.
      </Text>
      <Text style={[styles.sampleImage, styles.uploadTypo]}>Sample Image</Text>
      <View
        style={[styles.uploadAPrescriptionItem, styles.lightIconPosition]}
      />
      <Image
        style={styles.uploadLayout}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.uploadWrapper}>
          <Text style={[styles.upload, styles.uploadPosition]}>Upload</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  uploadLayout: {
    height: 436,
    width: 312,
    borderRadius: Border.br_3xs,
    left: 32,
    top: 250,
    position: "absolute",
  },
  lightIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  uploadPosition: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
    position: "absolute",
  },
  uploadTypo: {
    color: Color.labelColorLightPrimary,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  uploadAPrescriptionChild: {
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
  },
  lightIcon: {
    top: 0,
    height: 812,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  uploadAPrescription1: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  uploadAPrescription2: {
    top: 24,
    left: 0,
  },
  uploadAPrescriptionParent: {
    top: 94,
    width: 318,
    height: 54,
    left: 16,
    position: "absolute",
  },
  youCanUpload: {
    top: 164,
    left: 16,
  },
  sampleImage: {
    top: 219,
    left: 16,
  },
  uploadAPrescriptionItem: {
    top: 195,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumslateblue_100,
    left: 0,
    top: 0,
  },
  upload: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
  },
  uploadWrapper: {
    top: 11,
    left: 141,
    width: 61,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 731,
    left: 16,
  },
  uploadAPrescription: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default UploadAPrescription;
