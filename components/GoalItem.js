import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export const GoalItem = props => {
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem : {padding : 10, 
                backgroundColor: '#ccc', 
                borderColor: 'black', 
                borderWidth: 1, 
                marginVertical: 10}
})

export default GoalItem;