import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SectionForm = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group9.png")}
      />
      <Text style={[styles.paracetamolDolo, styles.mrpTypo]}>
        Paracetamol (Dolo)
      </Text>
      <Text style={styles.text}>1</Text>
      <View style={styles.mrpParent}>
        <Text style={[styles.mrp, styles.mrpTypo]}>MRP:</Text>
        <Text style={[styles.rp18000Per, styles.mrpTypo]}>
          Rp. 18.000 per strip
        </Text>
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.text1, styles.textLayout]}>-</Text>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.containerLayout]}>
        <View style={[styles.rectangleContainer, styles.containerLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.text2, styles.textLayout]}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 104,
    width: 342,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  mrpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 28,
    position: "absolute",
  },
  textLayout: {
    height: 26,
    width: 7,
    color: Color.colorMediumslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
  },
  containerLayout: {
    height: 28,
    width: 28,
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
    height: 104,
    width: 342,
    position: "absolute",
  },
  groupIcon: {
    height: "17.79%",
    width: "5.12%",
    top: "8.94%",
    right: "3.27%",
    bottom: "73.27%",
    left: "91.61%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  paracetamolDolo: {
    top: 6,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 108,
  },
  text: {
    top: 71,
    left: 152,
    fontSize: FontSize.size_base,
    color: Color.colorMediumslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
  },
  mrp: {
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  rp18000Per: {
    left: 29,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    top: 0,
  },
  mrpParent: {
    top: 32,
    width: 146,
    height: 25,
    left: 108,
    position: "absolute",
  },
  groupItem: {
    top: 8,
    borderRadius: Border.br_7xs,
    width: 87,
    height: 87,
    left: 8,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue_100,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  text1: {
    top: 1,
    left: 9,
    fontSize: FontSize.size_15xl,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 69,
    left: 108,
  },
  text2: {
    top: 2,
    fontSize: FontSize.size_lg,
    left: 8,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 176,
    top: 69,
  },
  rectangleParent: {
    top: 167,
    left: 17,
  },
});

export default SectionForm;
