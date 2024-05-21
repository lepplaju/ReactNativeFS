import { View, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";

const RepositoryItem = (
  fullName,
  description,
  language,
  forksCount,
  stars,
  reviews,
  rating,
  image,
) => {
  var forksNumText = forksCount;
  if (forksCount >= 1000) {
    forksNumText = (forksCount / 1000).toFixed(1) + "k";
    if (forksNumText.endsWith(".0k")) {
      forksNumText = forksNumText.slice(0, -3) + "k";
    }
  }
  var starsNumText = stars;
  if (stars >= 1000) {
    starsNumText = (stars / 1000).toFixed(1) + "k";
    if (starsNumText.endsWith(".0k")) {
      starsNumText = starsNumText.slice(0, -3) + "k";
    }
  }

  return (
    <View
      style={{ padding: 20, backgroundColor: theme.colors.componentBackground }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 3 }}
          source={{ uri: image }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: 10,
            marginRight: 10,
            flexWrap: "wrap",
          }}
        >
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {fullName}
          </Text>
          <Text color={"textSecondary"}>{description}</Text>

          <Text
            color="white"
            style={{
              backgroundColor: theme.colors.primary,

              padding: 5,
              borderRadius: 5,
            }}
          >
            {language}
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text fontWeight={"bold"}>{starsNumText}</Text>
          <Text>Stars</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text fontWeight={"bold"}>{forksNumText}</Text>
          <Text>Forks </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text fontWeight={"bold"}>{reviews}</Text>
          <Text>Reviews </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text fontWeight={"bold"}>{rating}</Text>
          <Text>Rating </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
