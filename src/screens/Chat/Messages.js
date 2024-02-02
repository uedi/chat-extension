import { KeyboardAvoidingView, View, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Message from './Message'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../reducers/messagesReducer'
import { useState, useRef } from 'react'

const ItemSeparator = () => (
    <View style={{ height: 5 }} />
)

const Messages = ({ messages, contact }) => {
    const [listRef, setListRef] = useState(useRef(null))
    const dispatch = useDispatch()

    const handleReply = (message) => {
        const msg = { myMessage: true, reply: { message: message.text }}
        msg.reply.sender = message.myMessage ? 'Test Dude' : contact
        dispatch(addMessage(msg))
    }

    const renderItem = ({ item, index }) => (
        <Message message={item} onReply={handleReply} />
    )

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View>
                { messages &&
                    <FlatList
                        ref={(ref) => setListRef(ref)}
                        data={messages}
                        ItemSeparatorComponent={ItemSeparator}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        contentContainerStyle={styles.contentContainerStyle}
                        onContentSizeChange={() => {
                            listRef?.scrollToEnd({ animated: true })
                        }}
                    />
                }
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainerStyle: {
        paddingVertical: 15,
        paddingHorizontal: 10
    }
})

export default Messages