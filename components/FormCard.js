import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FormCard = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.protinexPowderChocolate, styles.mrpTypo]}>
        Protinex Powder (Chocolate)
      </Text>
      <View style={[styles.mrpParent, styles.addLayout]}>
        <Text style={[styles.mrp, styles.gmClr]}>MRP:</Text>
        <Text style={[styles.rp549000400gmContainer, styles.mrpTypo]}>
          <Text style={styles.rp549000}>Rp. 549.000/</Text>
          <Text style={styles.gmClr}> 400gm</Text>
        </Text>
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.add, styles.addLayout]}>ADD</Text>
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
  },
  addLayout: {
    height: 25,
    position: "absolute",
  },
  gmClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  groupLayout: {
    height: 31,
    width: 52,
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
  protinexPowderChocolate: {
    top: 6,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    left: 108,
    position: "absolute",
  },
  mrp: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rp549000: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  rp549000400gmContainer: {
    left: 29,
    top: 0,
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
  },
  mrpParent: {
    top: 32,
    width: 153,
    left: 108,
  },
  groupItem: {
    top: 8,
    left: 8,
    borderRadius: Border.br_7xs,
    width: 87,
    height: 87,
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
  add: {
    top: 4,
    left: 12,
    fontSize: FontSize.size_smi,
    color: Color.colorMediumslateblue_100,
    width: 30,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 65,
    left: 108,
  },
  rectangleParent: {
    top: 400,
    left: 17,
  },
});

export default FormCard;
