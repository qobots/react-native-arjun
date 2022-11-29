import { StatusBar, StyleSheet, View } from 'react-native';

import { COLORS } from '@app/constants/themes';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaWrapper = ({
    statusBarColor = COLORS.white,
    insetBottom = false,
    insetTop = false,
    backgroundColor = COLORS.white,
    barStyle = 'dark-content',
    ...props
}) => {
    const insets = useSafeAreaInsets();

    const CustomStatusBar = ({ backgroundColor, barStyle }) => {
        return (
            <View style={{ height: insets.top, backgroundColor: backgroundColor }}>
                <StatusBar
                    animated={true}
                    backgroundColor={backgroundColor}
                    barStyle={barStyle}
                />
            </View>
        );
    };

    return (
        <>
            <CustomStatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
            <View
                style={{
                    ...styles.container(insets, insetBottom, insetTop, backgroundColor),
                    ...props.styles,
                }}>
                {props.children}
            </View>
        </>
    );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
    container: (insets, insetBottom, insetTop, backgroundColor) => ({
        flex: 1,
        backgroundColor: backgroundColor,
        paddingBottom: insetBottom ? insets.bottom : 0,
        paddingTop: insetTop ? insets.top : 0
    }),
});
