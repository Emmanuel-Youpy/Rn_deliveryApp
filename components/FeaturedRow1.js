import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow1 = ({ title, description, featuredCategory }) => {
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
          imgUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/66A2/production/_107847262_gettyimages-1152276563-594x594.jpg"
          title="KFC"
          rating={4.2}
          genre="Lekki"
          address="Phase 4"
          short_description="this is a text"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://www.chicken-republic.com/wp-content/uploads/2021/12/CITIZENS-WITH-CHIPS-CROPPED.png"
          title="Chicken Republic"
          rating={4.5}
          genre="Surulere"
          address="kwele path 4"
          short_description="this is a text"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqt27Hv3-Ki-eCHgocljFb-f8cmyEXNVk4A&usqp=CAU"
          title="Domino's Pizza"
          rating={3.5}
          genre="Berger"
          address="opposite balogun estate"
          short_description="this is a text"
          dishes={[]}
          long={6.4983}
          lat={3.3486}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow1;
