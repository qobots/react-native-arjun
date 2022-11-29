import { FlatList, Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ButtonComponent from '@app/components/ButtonComponent'
import HeaderComponent from '@app/components/HeaderComponent'
import ListingComponent from '@app/components/ListingComponent'
import SafeAreaWrapper from '@app/components/LayoutComponent/SafeAreaWrapper'
import { getUserList } from '@app/store/slices/userSlice'
import locale from '@app/constants/locale'
import screens from '@app/navigations/screens'
import styles from './styles'

const HomeScreen = ({ navigation }) => {

    let dispatch = useDispatch();
    const { userList } = useSelector((state) => state.USER);

    useEffect(() => {
        fetchUserList();
    }, []);


    const fetchUserList = async () => {
        try {
            await dispatch(getUserList());
        } catch (error) {
            console.log(error);
        }
    }


    function renderHeader() {
        return (
            <HeaderComponent label={locale.HOME} />
        )
    }

    function renderCreateOption() {
        return (
            <View style={styles.createOptionWrapper}>
                <ButtonComponent
                    label={locale.CREATE_USER}
                    buttonContainer={{ marginBottom: 0 }}
                    onPress={() => navigation.navigate(screens.CREATE_SCREEN)}
                />
            </View>
        )
    }

    function renderUserList() {

        const renderItems = ({ item, index }) => {
            let isFirst = index === 0;
            return (
                <View style={styles.itemContainer(isFirst)}>
                    <ListingComponent item={item} />
                </View>
            )
        }

        return (
            <View style={styles.wrapperStyle}>
                <FlatList
                    data={userList}
                    keyExtractor={(item, index) => `user-${index}`}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                    renderItem={renderItems}
                />
            </View>
        )
    }

    return (
        <SafeAreaWrapper>
            {renderHeader()}
            {renderCreateOption()}
            {renderUserList()}
        </SafeAreaWrapper>
    )
}

export default HomeScreen

