import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.homepageContainer}>
            <View style={styles.introContainer}>
                <Text style={styles.introHeader}>Welcome to Quizzard</Text>
                <Text style={styles.introPara}>
                    Your go-to platform for fun and engaging quizzes. Our app,
                    built with React, offers a wide range of quizzes on various
                    topics. Whether you're looking to test your knowledge or
                    simply pass the time, Quizzard has something for everyone.
                    So why wait? Click 'Play a Quiz' and start your quizzing
                    journey today!
                </Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Quiz")}>
                        <Text style={styles.buttonText}>Play a Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>More Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homepageContainer: {
        backgroundColor: "rgb(252, 235, 255)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    introContainer: {
        width: "80%",
    },
    introHeader: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 50,
    },
    introPara: {
        fontSize: 20,
        textAlign: "justify",
        marginBottom: 50,
    },
    btnContainer: {
        alignItems: "center",
    },
    button: {
        height: 60,
        width: "100%",
        backgroundColor: "rgba(241, 169, 252, 0.75)",
        borderWidth: 3,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default HomePage;
