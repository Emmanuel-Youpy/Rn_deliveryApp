import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
// import MapView, { Marker } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";
import { Dimensions } from "react-native";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-5">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-7  rounded-md p-6 ">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimate Arrival</Text>
              <Text className="text-lg text-3xl font-bold">30 -35 minutes</Text>
            </View>

            <Image
              source={{
                uri:
                  "https://e7.pngegg.com/pngimages/8/979/png-clipart-graphics-delivery-illustration-motorcycle-delivery-food-logo-motorcycle.png",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar progress={0.3} width={200} color="#00CCBB" />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        // className="flex-1 -mt-10 z-0"
        style={styles.map}
        initialRegion={{
          latitude: 6.4983,
          longitude: 3.3486,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?cs=srgb&dl=pexels-key-notez-1334945.jpg&fm=jpg",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Daniel</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginTop: -10,
    zIndex: -1,
  },
});

export default DeliveryScreen;
