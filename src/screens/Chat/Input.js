import { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { addMessage } from '../../reducers/messagesReducer'
import { useDispatch } from 'react-redux'

const Input = () => {
    const [newMessage, setNewMessage] = useState('')
    const dispatch = useDispatch()

    const submit = () => {
        const msg = { date: '13:37', myMessage: true, text: newMessage }
        dispatch(addMessage(msg))        
        setNewMessage('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    onSubmitEditing={submit}
                    placeholder={'Message'}
                    placeholderTextColor={'gray'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#141414',
    },
    inputContainer: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#2e2832'
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10
    }
})

export default Input