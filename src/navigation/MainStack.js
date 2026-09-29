import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PokedexScreen, PokemonInfoScreen } from "../screens";
import { ROUTES } from "../constants";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={ROUTES.POKEDEX}
                    component={PokedexScreen}
                />
                <Stack.Screen
                    name={ROUTES.POKEMON_INFO}
                    component={PokemonInfoScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack
