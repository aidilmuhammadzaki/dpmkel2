import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardSection = ({
  medicineName,
  medicinePricePerStrip,
  medicineImageId,
  propTop,
  propWidth,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView2Style]}
    >
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.paracetamolDolo, styles.mrpTypo]}>
        {medicineName}
      </Text>
      <View style={[styles.mrpParent, styles.addLayout, groupView3Style]}>
        <Text style={[styles.mrp, styles.mrpTypo]}>MRP:</Text>
        <Text style={[styles.rp18000Per, styles.mrpTypo]}>
          {medicinePricePerStrip}
        </Text>
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={medicineImageId}
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
  paracetamolDolo: {
    top: 6,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
    left: 108,
  },
  mrp: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rp18000Per: {
    left: 29,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
    top: 0,
  },
  mrpParent: {
    top: 32,
    width: 155,
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
    top: 280,
    left: 17,
  },
});

export default CardSection;
