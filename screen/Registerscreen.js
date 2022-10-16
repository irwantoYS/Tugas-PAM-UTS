import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Registerscreen() {
  const [people, setPeople] = useState([
    {
      uri: "https://i.pinimg.com/564x/a7/d9/be/a7d9be9504504597f21ae576ae930bb7.jpg",
      id: "1",
      title: "mens fashion",
    },
    {
      uri: "https://i.pinimg.com/564x/13/ca/c2/13cac221ce2b35c8ea3570747f195ccf.jpg",
      id: "2",
      title: "dekorasi rumah",
    },
    {
      uri: "https://i.pinimg.com/564x/70/1c/34/701c34666b7fbaa741c17a8bbb41f04d.jpg",
      id: "3",
      title: "girl fashion",
    },
    {
      uri: "https://i.pinimg.com/564x/27/6d/c1/276dc170182fff41f75ceb9c510ea36d.jpg",
      id: "4",
      title: "design",
    },
    {
      uri: "https://i.pinimg.com/564x/49/08/69/4908698f5b5c3b984d5650b293e1c26c.jpg",
      id: "5",
      title: "game",
    },
    {
      uri: "https://i.pinimg.com/564x/89/cf/74/89cf74c273e1a741de909dff208cd770.jpg",
      id: "6",
      title: "all t-shirt",
    },
    {
      uri: "https://i.pinimg.com/564x/43/89/67/438967cbcc15cac2b688935f251071d2.jpg",
      id: "7",
      title: "wallpaper",
    },
    {
      uri: "https://i.pinimg.com/564x/20/79/f0/2079f04c294c4222142526f6173ad367.jpg",
      id: "8",
      title: "hewan",
    },
    {
      uri: "https://i.pinimg.com/564x/e0/d0/06/e0d006d3eb14186c31bc592189ee73ab.jpg",
      id: "9",
      title: "dkv",
    },
    {
      uri: "https://i.pinimg.com/564x/53/db/c8/53dbc8056e9d18a2a79521694f6ebac4.jpg",
      id: "10",
      title: "gravity",
    },
    {
      uri: "https://i.pinimg.com/564x/6f/52/07/6f52079f8dc6735207fc97b2f4d14203.jpg",
      id: "11",
      title: "sepatu",
    },
    {
      uri: "https://i.pinimg.com/564x/af/af/d8/afafd8cb5564ef838a1512952d79be0e.jpg",
      id: "12",
      title: "cartoon",
    },
    {
      uri: "https://i.pinimg.com/564x/7d/bd/76/7dbd765b8be2184b2c7938b6bceeec68.jpg",
      id: "13",
      title: "hoodie",
    },
    {
      uri: "https://i.pinimg.com/564x/8a/f3/81/8af381f1f52e33ad3e8ccde44f768cfa.jpg",
      id: "14",
      title: "grafik",
    },
    {
      uri: "https://i.pinimg.com/564x/3f/78/5b/3f785bed83d8db10210dc16b2edbb278.jpg",
      id: "15",
      title: "seni vintage",
    },
    {
      uri: "https://i.pinimg.com/564x/ee/6b/60/ee6b6006791935b120f9acd818a41655.jpg",
      id: "16",
      title: "ilustrasi karakter",
    },
    {
      uri: "https://cdn.discordapp.com/attachments/970760527850635284/1031102534229692436/unknown.png",
      id: "17",
      title: "meme",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View style={styles.judulfoto}>
            <TouchableOpacity>
              <Image style={styles.image} source={{ uri: item.uri }} />
            </TouchableOpacity>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    margin: 10,
    marginHorizontal: 15,
    width: 160,
    height: 200,
    borderRadius: 15,
  },
  item: {
    backgroundColor: "pink",
    marginTop: 24,
    padding: 30,
    marginHorizontal: 10,
    fontSize: 20,
  },
  judulfoto: {
    marginBottom: 10,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});
