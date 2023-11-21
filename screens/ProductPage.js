import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProductPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productPage}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light1.png")}
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
      <View style={[styles.productPageChild, styles.lightIconPosition]} />
      <Image
        style={styles.productPageItem}
        contentFit="cover"
        source={require("../assets/rectangle-214.png")}
      />
      <Text style={[styles.paracetamolDolo, styles.descriptionTypo]}>
        Paracetamol (Dolo)
      </Text>
      <View style={styles.manufacturedBySwatiPharmacParent}>
        <Text style={[styles.manufacturedBySwati, styles.bestPriceTypo]}>
          Manufactured By: Swati Pharmacy Pvt. Ltd.
        </Text>
        <Text style={[styles.countryOfOrigin, styles.bestPriceTypo]}>
          Country of Origin: India
        </Text>
      </View>
      <Text style={[styles.bestPrice, styles.bestPricePosition]}>
        Best Price:
      </Text>
      <Text style={[styles.paracetamolIsA, styles.bestPriceTypo]}>
        Paracetamol is a commonly used medicine that can help treat pain and
        reduce a high temperature (fever). It's typically used to relieve mild
        or moderate pain, such as headaches, toothache or sprains, and reduce
        fevers caused by illnesses such as colds and flu. Paracetamol (Panadol,
        Calpol, Alvedon) is an analgesic and antipyretic drug that is used to
        temporarily relieve mild-to-moderate pain and fever. It is commonly
        included as an ingredient in cold and flu medications and is also used
        on its own. Paracetamol is exactly the same drug as acetaminophen
        (Tylenol)
      </Text>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Description:
      </Text>
      <Text style={[styles.rp18000strip, styles.addToCartTypo]}>
        Rp. 18.000/strip
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <Text style={styles.healthcareProduct}>Healthcare Product</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={styles.groupItem} />
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
      </View>
      <View style={[styles.productPageInner, styles.groupChildLayout]}>
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.buyNowWrapper, styles.wrapperLayout]}>
            <Text style={[styles.buyNow, styles.buyLayout]}>Buy Now</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.addToCartWrapper, styles.addLayout]}>
          <Text style={[styles.addToCart, styles.addLayout]}>Add to Cart</Text>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group17.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  descriptionTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 17,
    position: "absolute",
  },
  bestPriceTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
  },
  bestPricePosition: {
    top: 453,
    position: "absolute",
  },
  addToCartTypo: {
    color: Color.colorMediumslateblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
  },
  groupChildLayout1: {
    height: 31,
    width: 123,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 8,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_5xs,
    height: 5,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 165,
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    top: 11,
  },
  buyLayout: {
    width: 77,
    position: "absolute",
  },
  addLayout: {
    width: 98,
    position: "absolute",
  },
  lightIcon: {
    top: 0,
    height: 812,
    width: 375,
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
  productPageChild: {
    top: 339,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  productPageItem: {
    top: 105,
    left: 93,
    width: 189,
    height: 189,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  paracetamolDolo: {
    top: 363,
    fontSize: FontSize.size_3xl,
  },
  manufacturedBySwati: {
    left: 1,
    lineHeight: 25,
    color: Color.colorGray_100,
    top: 0,
    position: "absolute",
  },
  countryOfOrigin: {
    top: 23,
    lineHeight: 25,
    color: Color.colorGray_100,
    left: 0,
    position: "absolute",
  },
  manufacturedBySwatiPharmacParent: {
    top: 396,
    width: 232,
    height: 48,
    left: 16,
    position: "absolute",
  },
  bestPrice: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 17,
    top: 453,
  },
  paracetamolIsA: {
    top: 520,
    lineHeight: 21,
    width: 343,
    height: 207,
    left: 16,
    position: "absolute",
  },
  description: {
    top: 494,
    fontSize: FontSize.size_base,
  },
  rp18000strip: {
    left: 78,
    top: 453,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 16,
    backgroundColor: "#b8ffb7",
    left: 0,
    top: 0,
  },
  healthcareProduct: {
    top: 3,
    left: 10,
    color: Color.colorGreen,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 357,
    left: 236,
  },
  groupItem: {
    backgroundColor: Color.colorGray_200,
    width: 22,
    borderRadius: Border.br_5xs,
    height: 5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 26,
  },
  rectangleView: {
    left: 38,
  },
  rectangleGroup: {
    top: 313,
    left: 165,
    width: 46,
    height: 5,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorMediumslateblue_100,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  buyNow: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    width: 77,
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  buyNowWrapper: {
    left: 44,
    width: 77,
    position: "absolute",
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  productPageInner: {
    top: 731,
    width: 165,
    left: 16,
  },
  groupChild2: {
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue_100,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 165,
  },
  addToCart: {
    color: Color.colorMediumslateblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  addToCartWrapper: {
    left: 34,
    height: 25,
    top: 11,
  },
  groupView: {
    left: 194,
    top: 731,
    width: 165,
  },
  groupIcon: {
    height: "2.6%",
    width: "6.27%",
    top: "7.23%",
    right: "4.32%",
    bottom: "90.17%",
    left: "89.41%",
    position: "absolute",
  },
  productPage: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ProductPage;
