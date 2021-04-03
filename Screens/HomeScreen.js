import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, ToastAndroid, Modal } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import images from '../images.js';
import styles from '../Styles';
import firebase from 'firebase';
import db from '../config.js';
import MyHeader from '../Components/Header.js';
import { Icon } from "react-native-elements";

export default class HomeScreen extends React.Component {
    constructor()
    {
        super();
        this.state = {
            "modalVisible" : false,
            "email" : "",
        }
    }

    showModal()
    {
        var modalVisible = this.state.modalVisible;

        return(
            <Modal visible = { modalVisible } animationType = { 'slide' } transparent = { true } >
              <View style = { styles.container }>

                <View style = {{ alignItems : 'center', }}>
                <Image style = { styles.logoIMG } source = { images.LogoIMG } />
                <Text style = { styles.title }> Barter </Text>

                <View style = { styles.rowView }>
                    <Text> By</Text>
                    <Text style = { styles.boldRedText }> Oval Inc</Text>
                </View>
                </View>

                <View style = { styles.LoginView }>
                <Text style = {[ styles.LoginText, { marginTop : '10%' } ]}> PRODUCT </Text>
                <TextInput style = { styles.LoginInput } placeholder =  "Which product are you bartering?"  />
                <Text style = {[ styles.LoginText, { marginTop : '5%' } ]}> DESCRIPTION </Text>
                <TextInput  style = { styles.LoginInput } placeholder =  "A short description of the product"  secureTextEntry = { true } />
                </View>

                <View>
                <TouchableOpacity style = { styles.buttonWrapper }  >
                    <Text style = {[ styles.boldRedText, { fontSize : 23, } ]}>ADD PRODUCT</Text>
                </TouchableOpacity>

                <TouchableOpacity style = { styles.buttonWrapper } onPress = {() => { this.setState({ "modalVisible" : false })}}>
                    <Text style = {[ styles.boldRedText, { fontSize : 23, } ]}>CLOSE</Text>
                </TouchableOpacity>
                </View>

                </View>
            </Modal>
          );
    }

    render()
    {
        return(
            <View>
                { this.showModal() }
                <MyHeader title = { "Swarup Kesarkar" } />
                <TouchableOpacity style = { styles.bigButton } onPress = {() => { this.setState({ "modalVisible" : true })}}>
                    <Icon name = "plus-circle" type = "font-awesome" color = "#fff" style = {{ marginHorizontal : '1%' }}/>
                    <Text style = {{ fontSize : 20, marginHorizontal : '0.1%', color : 'white' }}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}