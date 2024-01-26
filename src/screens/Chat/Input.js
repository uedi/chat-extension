import { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const Input = () => {
    const [newMessage, setNewMessage] = useState('')
    const submit = () => {
        console.log(newMessage)
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