import HomePage from "./pages/HomePage.js";
import QuizPage from "./pages/QuizPage.js";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Quiz" component={QuizPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
