import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PaymentSection = ({
  buttonText,
  propLeft,
  propWidth,
  onGroupPressablePress,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.proceedToPayWrapper, groupViewStyle]}>
        <Text style={[styles.proceedToPay, styles.groupChildPosition]}>
          {buttonText}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 44,
    width: 343,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumslateblue_100,
    height: 44,
    width: 343,
  },
  proceedToPay: {
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    fontFamily: FontFamily.avenirNextLTPro,
    color: Color.colorWhite,
    textAlign: "left",
  },
  proceedToPayWrapper: {
    top: 11,
    left: 111,
    width: 122,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 731,
    left: 16,
    position: "absolute",
  },
});

export default PaymentSection;
