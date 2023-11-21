import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SearchMedicinesSection = ({ searchInputText, propTop, propLeft }) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView1Style]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.searchMedicines}>{searchInputText}</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
  },
  searchMedicines: {
    top: 18,
    left: 40,
    fontSize: FontSize.size_base,
    lineHeight: 12,
    fontFamily: FontFamily.avenirNextLTPro,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    height: "42.05%",
    width: "5.39%",
    top: "30.23%",
    right: "91.02%",
    bottom: "27.73%",
    left: "3.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    top: 97,
    left: 16,
  },
});

export default SearchMedicinesSection;
