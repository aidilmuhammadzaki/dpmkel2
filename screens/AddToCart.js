import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PaymentSection from "../components/PaymentSection";
import SectionForm from "../components/SectionForm";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AddToCart = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addToCart, styles.iconLayout]}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light1.png")}
      />
      <Text style={styles.itemsInThe}>1 items in the Cart</Text>
      <Text style={[styles.cartPage, styles.detailsTypo]}>Cart Page</Text>
      <PaymentSection
        buttonText="Proceed to Pay"
        onGroupPressablePress={() => navigation.navigate("HomePage")}
      />
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("ProductPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group8.png")}
        />
      </Pressable>
      <SectionForm />
      <LinearGradient
        style={[styles.addToCartChild, styles.lightIconPosition]}
        locations={[0, 0.2, 0.72, 1]}
        colors={["#eeca6e", "#e8bc4b", "#bea051", "#8d722d"]}
      />
      <Text style={styles.joinMembership}>Join Membership</Text>
      <Text
        style={[styles.joinOurMembership, styles.joinTypo]}
      >{`Join our membership and get exclusive
rewards  and discounts on your purchases.`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.join, styles.joinTypo]}>Join</Text>
      </View>
      <View style={[styles.addToCartItem, styles.addLayout]} />
      <View style={[styles.addToCartInner, styles.addLayout]} />
      <Text style={[styles.promocode, styles.rp0Typo]}>Promocode:</Text>
      <Text style={[styles.details, styles.rp0Typo]}>Details:</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.enterPromocode}>Enter Promocode</Text>
        <Text style={[styles.apply, styles.rp0Layout]}>APPLY</Text>
      </View>
      <View style={[styles.mrpTotalParent, styles.parentLayout]}>
        <Text style={[styles.mrpTotal, styles.totalTypo]}>MRP Total</Text>
        <Text style={[styles.rp18000, styles.rp18000Position]}>Rp. 18.000</Text>
      </View>
      <Text style={[styles.rp14000, styles.rp14000Position]}>Rp. 14.000</Text>
      <View style={[styles.rp4000Parent, styles.parentLayout]}>
        <Text style={[styles.rp4000, styles.rp0Layout]}>Rp. 4.000</Text>
        <Text style={[styles.mrpTotal, styles.totalTypo]}>Discount</Text>
      </View>
      <Text style={[styles.totalAmount, styles.rp14000Position]}>
        Total Amount
      </Text>
      <View style={[styles.rp0Parent, styles.parentLayout]}>
        <Text style={[styles.rp0, styles.rp0Layout]}>Rp. 0</Text>
        <Text style={[styles.mrpTotal, styles.totalTypo]}>
          Shipping Charges
        </Text>
      </View>
      <View style={[styles.rp14000Parent, styles.parentLayout]}>
        <Text style={[styles.rp140001, styles.rp18000Position]}>
          Rp. 14.000
        </Text>
        <Text style={[styles.mrpTotal, styles.totalTypo]}>Total Savings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  lightIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  detailsTypo: {
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  joinTypo: {
    lineHeight: 18,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupChildLayout: {
    height: 37,
    width: 82,
    position: "absolute",
  },
  addLayout: {
    height: 8,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rp0Typo: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
  },
  groupLayout: {
    height: 39,
    width: 343,
    position: "absolute",
  },
  rp0Layout: {
    lineHeight: 12,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  parentLayout: {
    height: 12,
    width: 342,
    left: 17,
    position: "absolute",
  },
  totalTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  rp18000Position: {
    left: 264,
    textAlign: "right",
    lineHeight: 12,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.avenirNextLTPro,
    top: 0,
    position: "absolute",
  },
  rp14000Position: {
    top: 698,
    lineHeight: 12,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  lightIcon: {
    top: 0,
    height: 812,
  },
  itemsInThe: {
    top: 143,
    lineHeight: 8,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    fontSize: FontSize.size_sm,
    left: 16,
    position: "absolute",
  },
  cartPage: {
    top: 102,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    color: Color.colorGray_200,
    left: 16,
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
  addToCartChild: {
    top: 290,
    height: 84,
    backgroundColor: "transparent",
  },
  joinMembership: {
    top: 300,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    left: 17,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  joinOurMembership: {
    top: 327,
    fontSize: FontSize.size_xs,
    left: 17,
  },
  groupChild: {
    borderRadius: 30,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
  },
  join: {
    top: 10,
    left: 27,
    fontSize: FontSize.size_sm,
    lineHeight: 18,
  },
  rectangleParent: {
    top: 314,
    left: 277,
  },
  addToCartItem: {
    top: 390,
  },
  addToCartInner: {
    top: 496,
  },
  promocode: {
    top: 414,
    left: 17,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  details: {
    top: 520,
    left: 17,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  enterPromocode: {
    left: 12,
    color: Color.colorDarkslategray,
    lineHeight: 12,
    top: 14,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  apply: {
    left: 292,
    color: Color.colorMediumslateblue_100,
    top: 14,
    lineHeight: 12,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    top: 441,
    left: 17,
  },
  mrpTotal: {
    lineHeight: 12,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rp18000: {
    textAlign: "right",
    color: Color.colorGray_200,
  },
  mrpTotalParent: {
    top: 561,
  },
  rp14000: {
    left: 252,
    fontSize: FontSize.size_3xl,
    textAlign: "right",
    color: Color.colorGray_200,
  },
  rp4000: {
    left: 273,
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    top: 0,
  },
  rp4000Parent: {
    top: 591,
  },
  totalAmount: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: 16,
  },
  rp0: {
    left: 305,
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    top: 0,
  },
  rp0Parent: {
    top: 621,
  },
  rp140001: {
    color: Color.colorGreen,
    textAlign: "right",
  },
  rp14000Parent: {
    top: 651,
  },
  addToCart: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default AddToCart;
