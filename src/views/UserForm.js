import React, {useState, useContext} from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements'

import UsersContext from '../context/UserContext'

export default (props) => {
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    const {dispatch} = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text style={style.txt}>Nome:</Text>
            <TextInput
                style={style.input}
                onChangeText = { name => setUser({...user, name})}
                placeholder = 'Digite seu nome'
                value = {user.name}
            />
            <Text style={style.txt}>E-mail:</Text>
            <TextInput
                style={style.input}
                onChangeText = { email => setUser({...user, email})}
                placeholder = 'Digite seu email'
                value = {user.email}
            />
            <Text style={style.txt}>Avatar:</Text>
            <TextInput
                style={style.input}
                onChangeText = { avatarUrl => setUser({...user, avatarUrl})}
                placeholder = 'Digite seu Avatar'
                value = {user.avatarUrl}
            />
            <Button
                title = 'Salvar'
                type = 'clear'
                icon = {<Icon name='save' size={30} color='#368BB0'/>}
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                        
                    })
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#368BB0',
        marginBottom: 15,
        width: '80%'
    }
})