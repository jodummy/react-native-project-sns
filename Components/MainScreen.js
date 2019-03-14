import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

//하단 탭에 들어갈 메뉴 추가
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'


// 하단 네비게이션 추가
const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    Search: { screen: SearchTab },
    AddMedia: { screen: AddMediaTab },
    Likes: { screen: LikesTab },
    Profile: { screen: ProfileTab }
}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    ios: {
                        backgroundColor: 'white',
                    }
                })
            },
            iconStyle: { height: 30 },
            activeTintColor: '#000000',
            inactiveTintColor: '#d1cece',
            upperCaseLabel: false,
            showLabel: false,
            showIcon: true,
        }
    });


const AppTabContainet = createAppContainer(AppTabNavigator); //네비게이션 정의

export default class MainScreen extends Component {

    // navigationOptions 사진&비행기 아이콘
    static navigationOptions = {
        header: null
    }

    render() {
        return <AppTabContainet />; // AppTabContainet 컴포넌트를 리턴한다.
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});