import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-ig">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={1}
          imgUrl="https://awol.junkee.com/wp-content/uploads/2017/10/Spanish-food.jpg"
          title="Marshmello"
          rating={4.5}
          genre="Ikoyi"
          address="Dino estate"
          short_description="The very best available"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://www.lacademie.com/wp-content/uploads/2022/04/mexican-food.jpg"
          title="Shusi's"
          rating={4.5}
          genre="Ajah"
          address="Madera road"
          short_description="Hot and well preserved"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://media.istockphoto.com/photos/assorted-spanish-food-picture-id1127495458?s=170667a"
          title="Asian Hots"
          rating={4.5}
          genre="Japanese"
          address="123 str rd"
          short_description="okai yumoning basekitu"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Spanish-Seafood-Paella.png"
          title="Spanish rice"
          rating={4.5}
          genre="Spanish"
          address="Madrid"
          short_description="Lecuzi special spanish rice"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
