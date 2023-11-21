import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SelectAPlan1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectAPlan}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light.png")}
      />
      <Text style={[styles.saveMoreWith, styles.saveMoreWithTypo]}>
        Save more with exclusive membership.
      </Text>
      <Text style={[styles.selectAPlan1, styles.skip1Typo]}>Select a Plan</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.buyMembershipWrapper}>
          <Text style={[styles.buyMembership, styles.selectAPlan1Layout]}>
            Buy Membership
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.skip1, styles.skip1Typo]}>Skip</Text>
      </Pressable>
      <View style={[styles.selectAPlanChild, styles.selectLayout]} />
      <View style={[styles.selectAPlanItem, styles.selectBorder]} />
      <View style={[styles.selectAPlanInner, styles.selectLayout]} />
      <Text style={[styles.months, styles.monthsTypo]}>3 Months</Text>
      <Text style={[styles.months1, styles.monthsTypo]}>6 Months</Text>
      <Text style={[styles.months2, styles.monthsTypo]}>12 Months</Text>
      <Text style={[styles.rp1000000, styles.rp1000000Typo]}>Rp. 800.000</Text>
      <Text style={[styles.rp2000000, styles.rp1000000Typo]}>
        Rp. 2.000,000
      </Text>
      <Text style={[styles.rp3000000, styles.rp1000000Typo]}>
        Rp. 3.000,000
      </Text>
      <Text style={[styles.membership, styles.membershipTypo]}>Membership</Text>
      <Text style={[styles.additional3Gomed, styles.additional10Typo]}>
        Additional 3% GoMed Cash
      </Text>
      <Text style={[styles.additional10Off, styles.additional10Typo]}>
        Additional 10% off on Lab Tests
      </Text>
      <Text style={[styles.additional10Off1, styles.additional10Typo]}>
        Additional 10% off on Lab Tests
      </Text>
      <Text
        style={[styles.unlimitedFreeDelivery, styles.additional10Typo]}
      >{`Unlimited Free Delivery on 
orders above Rs.99`}</Text>
      <Text style={styles.freeConsultation}>Free Consultation</Text>
      <Text style={[styles.superfastDelivery, styles.additional10Typo]}>
        Superfast Delivery
      </Text>
      <Text style={[styles.fullBodyHealth, styles.additional10Typo]}>
        Full Body Health CheckUp
      </Text>
      <Text style={[styles.mo, styles.moTypo]}>3mo</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition4]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition3]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>3</Text>
      <Text style={[styles.text2, styles.textTypo]}>8</Text>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={styles.groupIcon4}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon13, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon15, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon16, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Image
        style={[styles.groupIcon17, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <Text style={[styles.mo1, styles.moTypo]}>12mo</Text>
      <Text style={[styles.mo2, styles.moTypo]}>6mo</Text>
      <Text style={[styles.membership1, styles.membershipTypo]}>
        Membership
      </Text>
      <Text style={[styles.membership2, styles.membership2Position]}>
        Membership
      </Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.recommended, styles.membership2Position]}>
        Recommended
      </Text>
      <View style={[styles.selectAPlanChild1, styles.lightIconPosition]} />
      <View style={[styles.selectAPlanChild2, styles.selectBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lightIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  saveMoreWithTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
  },
  skip1Typo: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
  },
  selectAPlan1Layout: {
    lineHeight: 25,
    position: "absolute",
  },
  selectLayout: {
    height: 117,
    width: 100,
    backgroundColor: Color.colorWhitesmoke_100,
    top: 182,
    borderRadius: Border.br_7xs,
  },
  selectBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumslateblue_100,
    borderStyle: "solid",
    position: "absolute",
  },
  monthsTypo: {
    textAlign: "center",
    lineHeight: 7,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  rp1000000Typo: {
    top: 268,
    textAlign: "center",
    lineHeight: 7,
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  membershipTypo: {
    fontSize: FontSize.size_xs,
    top: 224,
    color: Color.colorGray_100,
  },
  additional10Typo: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    position: "absolute",
  },
  moTypo: {
    top: 350,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupIconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "60.88%",
    right: "36.05%",
    width: "3.07%",
    height: "1.05%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition4: {
    bottom: "46.7%",
    top: "52.25%",
  },
  groupIconPosition3: {
    bottom: "41.77%",
    top: "57.18%",
  },
  textTypo: {
    color: Color.colorMediumslateblue_100,
    top: 563,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  groupIconLayout3: {
    left: "61.15%",
    right: "36.32%",
    width: "2.53%",
    height: "1.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition1: {
    bottom: "19.98%",
    top: "78.85%",
  },
  groupIconLayout2: {
    left: "73.95%",
    right: "23.52%",
    width: "2.53%",
    height: "1.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    left: "73.68%",
    right: "23.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "3.07%",
    height: "1.05%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    bottom: "36.85%",
    top: "62.11%",
  },
  groupIconLayout: {
    left: "87.55%",
    right: "9.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "3.07%",
    height: "1.05%",
    position: "absolute",
    overflow: "hidden",
  },
  membership2Position: {
    left: 275,
    textAlign: "center",
    lineHeight: 7,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  lightIcon: {
    top: 0,
    width: 375,
    left: 0,
    height: 812,
  },
  saveMoreWith: {
    top: 143,
    lineHeight: 8,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    position: "absolute",
  },
  selectAPlan1: {
    top: 102,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
    left: 16,
  },
  groupChild: {
    backgroundColor: Color.colorMediumslateblue_100,
    borderRadius: Border.br_7xs,
    height: 44,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buyMembership: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  buyMembershipWrapper: {
    top: 11,
    left: 102,
    width: 140,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 731,
    height: 44,
    width: 343,
    left: 16,
    position: "absolute",
  },
  skip1: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
  },
  skip: {
    left: 328,
    top: 60,
    position: "absolute",
  },
  selectAPlanChild: {
    left: 16,
    position: "absolute",
  },
  selectAPlanItem: {
    left: 260,
    height: 117,
    width: 100,
    backgroundColor: Color.colorWhitesmoke_100,
    top: 182,
    borderRadius: Border.br_7xs,
  },
  selectAPlanInner: {
    left: 138,
    position: "absolute",
  },
  months: {
    left: 36,
    top: 206,
    textAlign: "center",
    lineHeight: 7,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
  },
  months1: {
    left: 158,
    top: 206,
    textAlign: "center",
    lineHeight: 7,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
  },
  months2: {
    left: 276,
    top: 206,
    textAlign: "center",
    lineHeight: 7,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
  },
  rp1000000: {
    left: 27,
  },
  rp2000000: {
    left: 143,
  },
  rp3000000: {
    left: 265,
  },
  membership: {
    left: 31,
    textAlign: "center",
    lineHeight: 7,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  additional3Gomed: {
    top: 386,
  },
  additional10Off: {
    top: 425,
  },
  additional10Off1: {
    top: 464,
  },
  unlimitedFreeDelivery: {
    top: 503,
  },
  freeConsultation: {
    top: 563,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 16,
    position: "absolute",
  },
  superfastDelivery: {
    top: 602,
  },
  fullBodyHealth: {
    top: 641,
  },
  mo: {
    left: 221,
  },
  groupIcon: {
    bottom: "51.63%",
    top: "47.33%",
  },
  groupIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "60.88%",
    right: "36.05%",
    width: "3.07%",
    height: "1.05%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "60.88%",
    right: "36.05%",
    width: "3.07%",
    height: "1.05%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 230,
  },
  text1: {
    left: 278,
  },
  text2: {
    left: 330,
  },
  groupIcon3: {
    bottom: "24.78%",
    top: "74.05%",
  },
  groupIcon4: {
    bottom: "36.72%",
    top: "62.11%",
    left: "61.15%",
    right: "36.32%",
    width: "2.53%",
    height: "1.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon5: {
    left: "61.15%",
    right: "36.32%",
    width: "2.53%",
    height: "1.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon6: {
    bottom: "19.98%",
    top: "78.85%",
  },
  groupIcon7: {
    bottom: "24.78%",
    top: "74.05%",
  },
  groupIcon8: {
    bottom: "51.63%",
    top: "47.33%",
  },
  groupIcon9: {
    bottom: "46.7%",
    top: "52.25%",
  },
  groupIcon10: {
    bottom: "41.77%",
    top: "57.18%",
  },
  groupIcon11: {
    left: "73.68%",
    right: "23.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "3.07%",
    height: "1.05%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon12: {
    bottom: "51.63%",
    top: "47.33%",
  },
  groupIcon13: {
    bottom: "46.7%",
    top: "52.25%",
  },
  groupIcon14: {
    bottom: "41.77%",
    top: "57.18%",
  },
  groupIcon15: {
    bottom: "36.85%",
    top: "62.11%",
  },
  groupIcon16: {
    bottom: "24.9%",
    top: "74.05%",
    left: "87.55%",
    right: "9.39%",
  },
  groupIcon17: {
    bottom: "20.1%",
    top: "78.85%",
    left: "87.55%",
    right: "9.39%",
  },
  mo1: {
    left: 315,
  },
  mo2: {
    left: 268,
  },
  membership1: {
    left: 153,
    textAlign: "center",
    lineHeight: 7,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  membership2: {
    fontSize: FontSize.size_xs,
    top: 224,
    color: Color.colorGray_100,
  },
  rectangleView: {
    top: 175,
    left: 266,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorTomato,
    width: 88,
    height: 16,
    position: "absolute",
  },
  recommended: {
    top: 180,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
  },
  selectAPlanChild1: {
    top: 323,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  selectAPlanChild2: {
    top: 337,
    left: 307,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumslateblue_200,
    width: 52,
    height: 324,
  },
  selectAPlan: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default SelectAPlan1;
