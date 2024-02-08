import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Preface = ({ setGameStarted }) => {
    return (
        <View className="preface-container" style={styles.prefaceContainer}>
            <Text style={styles.intro}>
                Get ready for the quiz! You'll be presented with 5 questions,
                each with a time limit of 30 seconds. Test your knowledge and
                see how many you can get right. Good luck!
            </Text>
            <Text style={styles.header}>Rules:</Text>
            <View style={styles.rulesContainer}>
                <Text style={styles.rule}>
                    • Each question has a time limit of 30 seconds.
                </Text>
                <Text style={styles.rule}>
                    • The game consists of 5 questions in total.
                </Text>
                <Text style={styles.rule}>
                    • Answer as many questions correctly as you can to score
                    points.
                </Text>
                <Text style={styles.rule}>
                    • No cheating or use of external resources.
                </Text>
            </View>
            <View
                className="begin-btn-container"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <TouchableOpacity
                    onPress={() => setGameStarted(true)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Begin</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    prefaceContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        padding: 20,
        borderWidth: 2,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 20,
    },
    intro: {
        marginBottom: 30,
        textAlign: "justify",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
    },
    rulesContainer: {
        marginBottom: 30,
    },
    rule: {
        marginBottom: 8,
    },
    button: {
        height: 60,
        width: "80%",
        backgroundColor: "rgba(241, 169, 252, 0.75)",
        borderWidth: 3,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Preface;
