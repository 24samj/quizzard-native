import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";

const Results = ({
    currentScore,
    setCurrentScore,
    setCurrentQuestionNumber,
    setQuizSubmitted,
    setGameStarted,
    setCategorySelected,
    navigation,
}) => {
    const handleReset = () => {
        setCurrentQuestionNumber(0);
        setCurrentScore(0);
        setQuizSubmitted(false);
        setGameStarted(false);
    };
    return (
        <View style={styles.resultsContainer}>
            <Text style={styles.resultsHeader}>Results</Text>
            <Text style={styles.scoreMessage}>
                {currentScore < 3
                    ? "Better luck next time!"
                    : currentScore > 3
                    ? "Well Done!"
                    : "Nice try!"}
            </Text>
            <View style={styles.scoreContainer}>
                <Text>Your Score:</Text>
                <Text style={styles.finalScore}>{currentScore}/5</Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.btnRow}>
                    <TouchableOpacity
                        style={styles.btnHalf}
                        onPress={() => handleReset()}>
                        <Text style={styles.btnText}>Play Again</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnHalf}
                        onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.btnText}>Go Back Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity
                        style={styles.btnFull}
                        onPress={() => {
                            handleReset();
                            setCategorySelected(null);
                        }}>
                        <Text style={styles.btnText}>
                            Choose another category
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    resultsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        padding: 20,
        borderWidth: 2,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 20,
    },
    resultsHeader: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 8,
    },
    scoreMessage: {
        fontSize: 16,
        marginBottom: 8,
    },
    scoreContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    finalScore: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 8,
    },
    btnRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20%",
        marginTop: "10%",
    },
    btnHalf: {
        borderWidth: 3,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 10,
        backgroundColor: "rgba(241, 169, 252, 0.75)",
        // height: 30,
        width: "45%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    btnFull: {
        borderWidth: 3,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 10,
        backgroundColor: "rgba(241, 169, 252, 0.75)",
        // height: 30,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    btnText: {
        fontWeight: "bold",
    },
});

export default Results;
