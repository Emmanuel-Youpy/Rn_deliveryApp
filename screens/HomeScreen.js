import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Category from "../components/Category";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import FeaturedRow1 from "../components/FeaturedRow1";
import FeaturedRow2 from "../components/FeaturedRow2";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured']{
          ..., restaurants[]->{
              ..., dishes[]->
          }
      }`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);

  // console.log(featuredCategory);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri:
              "https://thumbs.dreamstime.com/b/portrait-beautiful-young-woman-vacation-beach-taking-selfie-gesturing-peace-sign-beautiful-young-woman-99289070.jpg",
          }}
          style={{
            width: 70,
            height: 70,
            backgroundColor: "gray",
            padding: 4,
            borderRadius: 35,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", color: "gray" }}>Deliver New</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
        <View className="flex-row space-x-2 p-3 flex-1 bg-gray-200">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      <ScrollView>
        {/* components */}
        <Category />
        {/* Feayured Row */}
        {/* {featuredCategory?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))} */}
        <FeaturedRow
          id={1}
          title="Offers Near You"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow1
          id={1}
          title="Featured"
          description="Everyone's enjoying the discounts"
          featuredCategory="featured"
        />
        <FeaturedRow2
          id={1}
          title="African Meal"
          description="Why not try out your local restaurants"
          featuredCategory="featured"
        />
        <View style={{ height: 150 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
