import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const MyCustomHeader = props => {
    return (
      <View>
        <Header
            backgroundColor = { '#fd6a02' }
            leftComponent = {
                <View>
                    <View style = {{ flexDirection : 'row', width : 1800, }}>
                        <Text style = {{ color : 'white', fontSize : 30 }} >{ props.title }</Text>
                    </View>
                </View>
            }

            rightComponent = {
                <View>
                    {
                        props.showScrollDown ? <Icon type = "font-awesome" name = "chevron-down" color = "white" /> : null
                    }
                </View>
            }
        />
      </View>
    );
}

export default MyCustomHeader;
