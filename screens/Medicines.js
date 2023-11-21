import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchMedicinesSection from "../components/SearchMedicinesSection";
import PrescriptionForm from "../components/PrescriptionForm";
import CardSection from "../components/CardSection";
import FormCard from "../components/FormCard";
import { Color } from "../GlobalStyles";

const Medicines = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.medicines, styles.iconLayout]}>
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
      <SearchMedicinesSection searchInputText="Search Medicines" />
      <PrescriptionForm />
      <View style={[styles.medicinesChild, styles.lightIconPosition]} />
      <CardSection
        medicineName="Paracetamol (Dolo)"
        medicinePricePerStrip="Rp. 18.000 per strip"
        medicineImageId={require("../assets/rectangle-21.png")}
      />
      <FormCard />
      <CardSection
        medicineName="Mamaearth Lime Face Wash"
        medicinePricePerStrip="Rp. 240.000"
        medicineImageId={require("../assets/rectangle-212.png")}
        propTop={520}
        propWidth={106}
      />
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
  medicinesChild: {
    top: 248,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  medicines: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default Medicines;
