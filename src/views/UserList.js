import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, ListItem } from 'react-native-elements'
import Users from '../data/users'

export default (props) => {
    function getUserItem({item}) {
        return (
            <ListItem 
                bottomDivider
                onPress= {() => props.navigation.navigate('Form')}
            >
            <Avatar title={item.name} source={{ uri: item.avatarUrl }}/>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
            keyExtrator={User => Users.id.toString()}
            data={Users}
            renderItem={getUserItem}
            />
        </View>
    );
}