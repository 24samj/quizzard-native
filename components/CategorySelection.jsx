import React from "react";
import { categories } from "../constants/questionBank";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategorySelection = ({ setCategorySelected }) => {
    return (
        <View className="category-container" style={styles.categoryContainer}>
            <Text style={styles.header}>Categories</Text>
            <Text style={styles.intro}>
                Below are the available categories for the quiz game.
                {"\n"}
                Select a category to get started!
            </Text>
            {categories.map((category) => (
                <TouchableOpacity
                    style={styles.button}
                    value={category.value}
                    onPress={() => {
                        setCategorySelected(category.value);
                    }}>
                    <Text style={styles.buttonText}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        padding: 20,
        borderWidth: 2,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 20,
    },
    header: {
        marginBottom: 24,
        fontSize: 32,
    },
    intro: {
        fontSize: 16,
    },
    button: {
        height: 50,
        width: "100%",
        backgroundColor: "rgba(241, 169, 252, 0.75)",
        borderWidth: 3,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 15,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default CategorySelection;
