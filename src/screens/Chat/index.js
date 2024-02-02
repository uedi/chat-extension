import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Header from './Header'
import Input from './Input'
import Messages from './Messages'

const Chat = ({ route }) => {
    const messages = useSelector(state => state.messages)

    return (
        <View style={styles.container}>
            <Header name={route.params?.name } />
            <Messages messages={messages} contact={route.params?.name} />
            <Input />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})

export default Chat