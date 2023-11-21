const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import UploadAPrescription from "./screens/UploadAPrescription";
import HomePage from "./screens/HomePage";
import AddToCart from "./screens/AddToCart";
import Medicines from "./screens/Medicines";
import Consultation from "./screens/Consultation";
import Cover from "./screens/Cover";
import SplashScreen from "./screens/SplashScreen";
import GetStarted2 from "./screens/GetStarted2";
import GetStarted1 from "./screens/GetStarted1";
import GetStarted from "./screens/GetStarted";
import SelectAPlan1 from "./screens/SelectAPlan1";
import SelectAPlan from "./screens/SelectAPlan";
import ProductPage from "./screens/ProductPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="UploadAPrescription"
              component={UploadAPrescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToCart"
              component={AddToCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Medicines"
              component={Medicines}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Consultation"
              component={Consultation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cover"
              component={Cover}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted2"
              component={GetStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted1"
              component={GetStarted1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectAPlan1"
              component={SelectAPlan1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectAPlan"
              component={SelectAPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductPage"
              component={ProductPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
