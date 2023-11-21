import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PrescriptionForm1 from "../components/PrescriptionForm1";
import CardSection from "../components/CardSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <Image
        style={[styles.lightIcon, styles.lightIconPosition]}
        contentFit="cover"
        source={require("../assets/light.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={styles.pekanbaru}>Pekanbaru</Text>
      </View>
      <Text style={styles.aaditya}>Aaditya,</Text>
      <Text style={[styles.goodMorning, styles.goodMorningPosition]}>
        Good Morning
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleGroupLayout]}
        onPress={() => navigation.navigate("Consultation")}
      >
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Image
          style={styles.stethoscopeIcon}
          contentFit="cover"
          source={require("../assets/stethoscope.png")}
        />
      </Pressable>
      <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Image
          style={styles.medicalPrescriptionIcon}
          contentFit="cover"
          source={require("../assets/medical-prescription.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleGroupLayout]}
        onPress={() => navigation.navigate("Medicines")}
      >
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <Image
          style={styles.medicineJarIcon}
          contentFit="cover"
          source={require("../assets/medicine-jar.png")}
        />
      </Pressable>
      <Text style={[styles.medicine, styles.recordsTypo]}>Medicine</Text>
      <Text style={[styles.consultation, styles.recordsTypo]}>
        Consultation
      </Text>
      <Text style={[styles.records, styles.recordsTypo]}>Records</Text>
      <Text style={[styles.membership, styles.recordsTypo]}>Membership</Text>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupLayout]}
        onPress={() => navigation.navigate("SelectAPlan")}
      >
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Image
          style={styles.coinInHand}
          contentFit="cover"
          source={require("../assets/coin-in-hand.png")}
        />
      </Pressable>
      <View style={styles.homepageChild} />
      <PrescriptionForm1 />
      <Text style={[styles.recentOrder, styles.goodMorningPosition]}>
        Recent Order
      </Text>
      <Image
        style={styles.homepagePosition}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <LinearGradient
        style={[styles.homepageInner, styles.homepagePosition]}
        locations={[0, 0.74, 1]}
        colors={["rgba(217, 217, 217, 0)", "rgba(57, 57, 57, 0.78)", "#000"]}
      />
      <Text
        style={[styles.benefitsToHave, styles.minRead568Typo]}
      >{`10 Benefits to have a full body health
checkup once in a 6 months.`}</Text>
      <View style={styles.minRead568ViewsParent}>
        <Text style={[styles.minRead568, styles.minRead568Typo]}>
          5 min read. 568 Views
        </Text>
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group3.png")}
        />
      </View>
      <CardSection
        medicineName="Paracetamol (Dolo)"
        medicinePricePerStrip="Rs.12 per strip"
        medicineImageId={require("../assets/rectangle-21.png")}
        propTop={655}
        propWidth={121}
      />
      <View style={[styles.homepageChild1, styles.vectorIconPosition]} />
      <View style={styles.groupGroup}>
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
        <Text style={styles.home}>Home</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={[styles.productsParent, styles.parentPosition]}>
        <Text style={[styles.products, styles.accountTypo]}>Products</Text>
        <Image
          style={[styles.groupIcon5, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group5.png")}
        />
      </View>
      <View style={[styles.testsParent, styles.parentPosition]}>
        <Text style={[styles.products, styles.accountTypo]}>Tests</Text>
        <Image
          style={[styles.groupIcon6, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group6.png")}
        />
      </View>
      <View style={[styles.accountParent, styles.parentPosition]}>
        <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        <Image
          style={[styles.groupIcon7, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group7.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightIconPosition: {
    top: 0,
    left: 0,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  goodMorningPosition: {
    lineHeight: 25,
    left: 16,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 75,
    width: 75,
    top: 181,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  recordsTypo: {
    top: 260,
    fontSize: FontSize.size_xs,
    lineHeight: 25,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  homepagePosition: {
    height: 192,
    top: 406,
    width: 375,
    left: 0,
    position: "absolute",
  },
  minRead568Typo: {
    color: Color.colorWhite,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 735,
    position: "absolute",
  },
  parentPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  accountTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.avenirNextLTPro,
    left: 0,
    position: "absolute",
  },
  groupIconPosition: {
    top: "-1.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lightIcon: {
    width: 375,
    left: 0,
    position: "absolute",
    height: 812,
    top: 0,
  },
  groupIcon: {
    height: "2.28%",
    width: "4.93%",
    top: "7.43%",
    right: "14.19%",
    left: "80.88%",
    bottom: "90.3%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIcon1: {
    height: "2.4%",
    width: "4.67%",
    top: "7.3%",
    right: "4.32%",
    left: "91.01%",
    bottom: "90.3%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIcon2: {
    height: "102.63%",
    width: "17.33%",
    top: "-3.68%",
    right: "83.37%",
    bottom: "1.05%",
    left: "-0.69%",
  },
  pekanbaru: {
    left: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenirNextLTPro,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: "2.34%",
    width: "26.93%",
    top: "7.39%",
    right: "68.53%",
    bottom: "90.27%",
    left: "4.53%",
    position: "absolute",
  },
  aaditya: {
    top: 132,
    fontSize: 28,
    fontWeight: "700",
    color: Color.colorMediumslateblue_100,
    lineHeight: 25,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    position: "absolute",
  },
  goodMorning: {
    top: 99,
    fontSize: FontSize.size_3xl,
    opacity: 0.75,
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    height: 75,
    width: 75,
    top: 0,
    position: "absolute",
  },
  stethoscopeIcon: {
    top: 11,
    left: 12,
    width: 52,
    height: 52,
    position: "absolute",
  },
  rectangleParent: {
    left: 105,
  },
  groupItem: {
    borderRadius: Border.br_6xs,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    height: 75,
    width: 75,
    top: 0,
    position: "absolute",
  },
  medicalPrescriptionIcon: {
    top: 7,
    left: 5,
    width: 62,
    height: 62,
    position: "absolute",
  },
  rectangleGroup: {
    left: 194,
  },
  groupInner: {
    borderRadius: Border.br_6xs,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    height: 75,
    width: 75,
    top: 0,
    position: "absolute",
  },
  medicineJarIcon: {
    top: 10,
    left: 11,
    height: 54,
    width: 54,
    position: "absolute",
  },
  rectangleContainer: {
    left: 16,
  },
  medicine: {
    left: 28,
    fontSize: FontSize.size_xs,
  },
  consultation: {
    left: 108,
    fontSize: FontSize.size_xs,
  },
  records: {
    left: 209,
    fontSize: FontSize.size_xs,
  },
  membership: {
    left: 288,
    fontSize: FontSize.size_xs,
  },
  rectangleView: {
    borderRadius: Border.br_6xs,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    height: 75,
    width: 75,
    top: 0,
    position: "absolute",
  },
  coinInHand: {
    top: 8,
    left: 9,
    width: 58,
    height: 58,
    position: "absolute",
  },
  groupPressable: {
    left: 283,
  },
  homepageChild: {
    top: 291,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
    width: 375,
    left: 0,
    position: "absolute",
  },
  recentOrder: {
    top: 622,
    fontSize: FontSize.size_lg,
  },
  homepageInner: {
    backgroundColor: "transparent",
  },
  benefitsToHave: {
    top: 513,
    left: 17,
    fontSize: FontSize.size_lg,
  },
  minRead568: {
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  groupIcon3: {
    height: "32%",
    width: "7.8%",
    top: "32%",
    right: "42.2%",
    bottom: "36%",
    left: "50%",
  },
  minRead568ViewsParent: {
    top: 565,
    width: 141,
    height: 25,
    left: 16,
    position: "absolute",
  },
  homepageChild1: {
    height: 76,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
  groupIcon4: {
    height: "50.2%",
    width: "57.69%",
    top: "-1.42%",
    right: "21.03%",
    bottom: "51.22%",
    left: "21.28%",
  },
  home: {
    fontSize: FontSize.size_sm,
    top: 32,
    color: Color.colorMediumslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextLTPro,
    left: 0,
    position: "absolute",
  },
  groupGroup: {
    height: "6.06%",
    width: "10.4%",
    top: "92.86%",
    right: "82.4%",
    bottom: "1.08%",
    left: "7.2%",
    position: "absolute",
  },
  vectorIcon: {
    left: 30,
    width: 34,
    height: 11,
  },
  ellipseIcon: {
    top: 57,
    left: 350,
    width: 7,
    height: 7,
    position: "absolute",
  },
  products: {
    top: 31,
    textAlign: "center",
  },
  groupIcon5: {
    height: "48.76%",
    width: "41.96%",
    right: "27.14%",
    bottom: "52.7%",
    left: "30.89%",
  },
  productsParent: {
    left: 113,
    width: 56,
    height: 48,
    top: 755,
    opacity: 0.5,
  },
  groupIcon6: {
    height: "49.59%",
    width: "74.69%",
    right: "11.88%",
    bottom: "51.87%",
    left: "13.44%",
  },
  testsParent: {
    left: 216,
    width: 32,
    height: 48,
    top: 755,
    opacity: 0.5,
  },
  account: {
    top: 32,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  groupIcon7: {
    height: "51.43%",
    width: "41.67%",
    top: "-1.43%",
    right: "30%",
    bottom: "50%",
    left: "28.33%",
  },
  accountParent: {
    top: 754,
    left: 295,
    height: 49,
    width: 54,
  },
  homepage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: 812,
  },
});

export default HomePage;
