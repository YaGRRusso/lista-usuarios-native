import React, {useContext} from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, ListItem } from 'react-native-elements'
import UsersContext from '../context/UserContext'

export default (props) => {

    const {state} = useContext(UsersContext)

    function confirmDelete(user){
        Alert.alert('Excluir Usuário', 'Tem certeza que deseja exluir o usuário?', [
            {
                text: 'Sim',
                onPress() { console.warn(user.name + ' excluído') }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({item: user}) {
        return (
            <ListItem bottomDivider onPress= {() => props.navigation.navigate('Info', user)}>
            <Avatar rounded size='medium' title={user.name} source={{ uri: user.avatarUrl }}/>
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
                onPress= {() => props.navigation.navigate('Form', user)}
                iconProps={{name: "edit"}}
                iconStyle={{fontSize: 25, color: "#368BB0"}}
            />
            <ListItem.Chevron
                onPress= {() => confirmDelete(user)}
                iconProps={{name: 'delete'}}
                iconStyle={{fontSize: 25, color: "red"}}
            />
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
            keyExtrator={User => Users.id.toString()}
            data={state.users}
            renderItem={getUserItem}
            />
        </View>
    );
}