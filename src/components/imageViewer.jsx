import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImageSource,selectedImage }) {
  const source = selectedImage ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={source} style={styles.image} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
