import React from "react";
import { Button, Icon } from "native-base";
import { View, StyleSheet } from "react-native";

const Contacts = () => {
    return ( 
        <View style={style.container}>
            <Button>
                <Icon name="facebook" />
            </Button>
        </View>
     );
}
 
export default Contacts;

const style = StyleSheet.create({
    container: {flex: 1}
})