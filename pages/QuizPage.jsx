import React, { useEffect, useState } from "react";
import { questionBank } from "../constants/questionBank";
import CategorySelection from "../components/CategorySelection";
import Preface from "../components/Preface";
import Gamebox from "../components/Gamebox";
import Results from "../components/Results";
import { View, StyleSheet } from "react-native";

const QuizPage = ({ navigation }) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentScore, setCurrentScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [questionSet, setQuestionSet] = useState(null);
    const [categorySelected, setCategorySelected] = useState(null);

    useEffect(() => {
        setQuestionSet(
            questionBank[categorySelected]?.[
                Math.floor(
                    Math.random() * questionBank[categorySelected]?.length
                )
            ]
        );
    }, [categorySelected, gameStarted]);

    const handleQuestionChange = () => {
        if (currentQuestionNumber < 4) {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else {
            setQuizSubmitted(true);
            setGameStarted(false);
        }
        if (questionSet.answers[currentQuestionNumber] === selectedOption) {
            setCurrentScore(currentScore + 1);
        }
        setTimeLeft(30);
        setSelectedOption(null);
    };

    useEffect(() => {
        if (!gameStarted) return;

        if (!timeLeft) handleQuestionChange();

        const intervalId = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft, gameStarted]);

    return (
        <View className="quizpage-container" style={styles.quizpageContainer}>
            {!categorySelected ? (
                <CategorySelection setCategorySelected={setCategorySelected} />
            ) : (
                <>
                    {!gameStarted && !quizSubmitted && (
                        <Preface setGameStarted={setGameStarted} />
                    )}
                    {gameStarted && !quizSubmitted && (
                        <Gamebox
                            currentQuestionNumber={currentQuestionNumber}
                            questionSet={questionSet}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            handleQuestionChange={handleQuestionChange}
                            timeLeft={timeLeft}
                        />
                    )}
                    {quizSubmitted && (
                        <Results
                            currentScore={currentScore}
                            setCurrentScore={setCurrentScore}
                            setCurrentQuestionNumber={setCurrentQuestionNumber}
                            setQuizSubmitted={setQuizSubmitted}
                            setGameStarted={setGameStarted}
                            setCategorySelected={setCategorySelected}
                            navigation={navigation}
                        />
                    )}
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    quizpageContainer: {
        backgroundColor: "rgb(252, 235, 255)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default QuizPage;
