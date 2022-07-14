import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard
        imageUrl="https://travelupdate.com/wp-content/uploads/2019/12/World-Cuisines-1010x640.jpg"
        title="Orders"
      />
      <CategoryCard
        imageUrl="https://thumbs.dreamstime.com/b/world-cuisine-frame-composition-cuisines-chalkboard-style-ornate-text-surrounded-icons-served-gourmet-dishes-vector-243189674.jpg"
        title="Pizza"
      />
      <CategoryCard
        imageUrl="https://www.jaypeehotels.com/blog/wp-content/uploads/2020/09/International-Cuisines-1-1024x576.jpg"
        title="Shusi"
      />
      <CategoryCard
        imageUrl="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-image-of-Cuisines-Of-Himachal-Pradesh_22nd-nov.jpg"
        title="Asian"
      />
      <CategoryCard
        imageUrl="https://thumbor.thedailymeal.com/_ahR25AZYnhN7OYgx7Xi7RdFrVI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/2051215/2233813/lobster_tikka_masala.JPG"
        title="African"
      />
      <CategoryCard
        imageUrl="https://c.ndtvimg.com/2022-03/8tos2p1o_chicken_625x300_09_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
        title="Thai"
      />
    </ScrollView>
  );
};

export default Category;
