import React from "react";
import { Button, Icon } from "native-base";
import { View, StyleSheet, Text } from "react-native";

const Contacts = () => {
    return ( 
        <View style={style.container}>
            <Text> Facebook</Text>
        </View>
     );
}
 
export default Contacts;

const style = StyleSheet.create({
    container: {flex: 1}
})