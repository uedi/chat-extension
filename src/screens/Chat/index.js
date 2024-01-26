import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Input from './Input'
import Messages from './Messages'
import { messages } from '../../utils/mocks'

const Chat = ({ route }) => {

    return (
        <View style={styles.container}>
            <Header name={route.params?.name } />
            <Messages messages={messages} />
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