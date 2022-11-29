import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import CreateScreen from '@app/screens/CreateScreen';
import HomeScreen from '@app/screens/HomeScreen';
import React from 'react';
import WelcomeScreen from '@app/screens/WelcomeScreen';
import screens from './screens';

const index = () => {

    const Stack = createStackNavigator();

    return (
        <React.Fragment>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                initialRouteName={screens.WELCOME_SCREEN}>
                <Stack.Screen name={screens.WELCOME_SCREEN} component={WelcomeScreen} />
                <Stack.Screen name={screens.HOME_SCREEN} component={HomeScreen} />
                <Stack.Screen name={screens.CREATE_SCREEN} component={CreateScreen} />
            </Stack.Navigator>
        </React.Fragment>
    );
};

export default index;
