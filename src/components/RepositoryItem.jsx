import { Text, View, Image } from "react-native";
import theme from "../theme";

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
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 3 }}
          source={image}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: 10,
          }}
        >
          <Text>{fullName}</Text>
          <Text>{description}</Text>

          <Text
            style={{
              backgroundColor: "blue",
              color: theme.colors.textSecondary,
              padding: 5,
              borderRadius: 5,
            }}
          >
            {language}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ flexDirection: "col", alignItems: "center" }}>
          <Text>{starsNumText}</Text>
          <Text>Stars</Text>
        </View>
        <View style={{ flexDirection: "col", alignItems: "center" }}>
          <Text>{forksNumText}</Text>
          <Text>Forks </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text>{reviews}</Text>
          <Text>Reviews </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text>{rating}</Text>
          <Text>Rating </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
