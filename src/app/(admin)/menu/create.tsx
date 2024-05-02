import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Colors from "@/src/constants/Colors";
import { Stack } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState("");

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInputs = () => {
    setErrors("");

    if (!name) {
      setErrors("Name is required");
      return false;
    }

    if (!price) {
      setErrors("Price is required");
      return false;
    }

    if (isNaN(parseInt(price))) {
      setErrors("Price is not a number");
      return false;
    }

    return true;
  };

  const onCreate = () => {
    if (!validateInputs()) {
      return;
    }

    console.warn("Creating product ...", { name, price });

    resetFields();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Product" }} />
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.error}>{errors}</Text>
      <Button onPress={onCreate} text="Create"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  error: {
    color: "red",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 99,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default CreateProductScreen;
