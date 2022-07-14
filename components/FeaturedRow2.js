import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow2 = ({ title, description, featuredCategory }) => {
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
          imgUrl="https://i.pinimg.com/736x/63/dd/f2/63ddf232698635971b9391d0772d0229.jpg"
          title="Swallows"
          rating={4.6}
          genre="Yaba axis"
          address="No 86oler"
          short_description="this is a text"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://cdn.foodanddating.com/wp-content/uploads/2018/08/14075234/jollof-rice-with-goat-meat-1-533x375.jpg"
          title="Jollof"
          rating={5}
          genre="sanfrit road"
          address="Behind sand building"
          short_description="this is a text"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://answersafrica.com/wp-content/uploads/2013/04/fried-rice-1.jpg"
          title="Ofada"
          rating={4.0}
          genre="Thomas road"
          address="glen's drive"
          short_description="this is a text"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow2;
