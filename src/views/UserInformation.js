import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Avatar } from 'react-native-elements'
import { Button, Icon } from 'react-native-elements'

export default (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>ID: {props.route.params.id}</Text>
            <Avatar size='xlarge' title='img' source={{ uri: props.route.params.avatarUrl }}/>
            <Text style={{fontSize: 36, fontWeight: 'bold', paddingTop: 15}}>{props.route.params.name}</Text>
            <Text style={{fontSize: 18, paddingBottom: 15}}>{props.route.params.email}</Text>
        </View>
    )
}