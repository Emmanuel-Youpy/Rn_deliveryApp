import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: imgUrl,
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text className="text=xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergies?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dishrows */}
          {/* {dishes.map((dish) => (
          <DishRow
            key={dish_id}
            id={dish_id}
            name={dish.name}
            description={dish.short_description}
            price={dish_price}
            image={dish_image}
          />
        ))} */}
          <DishRow
            id="1"
            name="Sunazi"
            description="A very rare delicacy made with unazi"
            price={10}
            image="https://media.istockphoto.com/photos/assorted-spanish-food-picture-id1127495458?s=170667a"
          />
          <DishRow
            id="2"
            name="Okazi lettus"
            description="Hand made local meal"
            price={24}
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/one-pot-meals-salmon-artichoke-1577121837.jpg"
          />
          <DishRow
            id="3"
            name="Babelus fetus"
            description="All flavors in one dish"
            price={34}
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F07%2F23%2FSingleSkilletCavatappiRatatouille_197.jpg"
          />
          <DishRow
            id="4"
            name="Beans Semon"
            description="Prepared using white beans"
            price={15}
            image="https://static.onecms.io/wp-content/uploads/sites/24/2019/02/2565301_hiahp0530_0_0_0_0-1.jpg"
          />
          <DishRow
            id="5"
            name="Bandanas voil"
            description="Made from flour"
            price={30}
            image="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"
          />
          <View style={{ height: 120 }} />
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
