import React, { useEffect, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
} from "react-native";
import { RadioButton } from "react-native-paper";

const Gamebox = ({
    currentQuestionNumber,
    questionSet,
    selectedOption,
    setSelectedOption,
    handleQuestionChange,
    timeLeft,
}) => {
    const widthAnim = useRef(new Animated.Value((timeLeft / 30) * 100)).current;

    useEffect(() => {
        Animated.timing(widthAnim, {
            toValue: (timeLeft / 30) * 100,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [timeLeft]);

    return (
        <View style={styles.gameContainer}>
            <View style={styles.currentQuestionContainer}>
                <Text style={styles.currQuestion}>
                    Q{currentQuestionNumber + 1}.{" "}
                    {questionSet.questions[currentQuestionNumber].question}
                </Text>
            </View>
            <Text style={styles.optionsHeader}>Options:</Text>
            <View style={styles.radioGroupContainer}>
                <RadioButton.Group
                    value={selectedOption}
                    onValueChange={(value) => setSelectedOption(value)}>
                    {questionSet.questions[currentQuestionNumber].options.map(
                        (option, index) => (
                            <TouchableOpacity
                                style={{
                                    ...styles.optionContainer,
                                    backgroundColor:
                                        selectedOption === `option${index + 1}`
                                            ? "pink"
                                            : "rgb(252, 235, 255)",
                                }}
                                key={index}
                                onPress={() =>
                                    setSelectedOption(`option${index + 1}`)
                                }>
                                <RadioButton
                                    value={`option${index + 1}`}
                                    status={
                                        selectedOption === `option${index + 1}`
                                            ? "checked"
                                            : "unchecked"
                                    }
                                />
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        )
                    )}
                </RadioButton.Group>
            </View>
            <View style={styles.gameFooter}>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={handleQuestionChange}>
                    <Text style={styles.btnText}>
                        {currentQuestionNumber < 4 ? "Next" : "Submit"}
                    </Text>
                </TouchableOpacity>
                <Text>{currentQuestionNumber + 1}/5</Text>
            </View>
            <View style={styles.timebarContainer}>
                <Animated.View
                    style={[
                        styles.timebar,
                        {
                            width: widthAnim.interpolate({
                                inputRange: [0, 100],
                                outputRange: ["0%", "100%"],
                            }),
                        },
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
        // height: 400,
        justifyContent: "center",
        width: "80%",
        padding: 20,
        borderWidth: 2,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 20,
    },
    currentQuestionContainer: {
        marginBottom: 16,
        // height: '20%',
    },
    currQuestion: {
        fontSize: 16,
    },
    optionsHeader: {
        fontStyle: "bold",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        // height: '10%',
    },
    radioGroupContainer: {
        // height: '50%',
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "rgb(23, 0, 106)",
        borderRadius: 10,
        marginTop: 10,
    },
    gameFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
        // height: '10%',
    },
    nextButton: {
        borderWidth: 3,
        borderColor: "rgb(23, 0, 106)",
        backgroundColor: "rgba(241, 169, 252, 0.75)",
        fontWeight: "bold",
        borderRadius: 10,
        padding: 10,
    },
    btnText: {
        fontWeight: "bold",
    },
    timebarContainer: {
        // height: '10%',
    },
    timebar: {
        height: 6,
        borderRadius: 10,
        backgroundColor: "green",
        marginTop: 16,
    },
});

export default Gamebox;
