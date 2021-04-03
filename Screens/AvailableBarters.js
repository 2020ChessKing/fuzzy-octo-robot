import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, ToastAndroid, Modal } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import images from '../images.js';
import styles from '../Styles';
import firebase from 'firebase';
import db from '../config.js';
import MyHeader from '../Components/Header.js';

export default class Barter extends React.Component 
{
    constructor()
    {
        super();
    }
    
    render()
    {
        return(
            <View>
                <MyHeader title = { 'Available Barters' } />
                {/* <MyNavigator /> */}
            </View>
        );
    }
}