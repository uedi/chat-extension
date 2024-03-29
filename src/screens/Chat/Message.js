import { View, StyleSheet, Text } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard'
import Menu from './Menu'

const Message = ({ message, onReply }) => {

    const handleReact = () => {
        console.log('react')
    }

    const handleCopy = () => {
        if(message?.text) {
            Clipboard.setString(message.text)
        }
    }

    const ReplyMessage = ({ reply }) => (
        <View style={styles.replyBox}>
            <View style={styles.replyBoxLine} />
            <View style={styles.replyContent}>
                <Text style={styles.text}>{reply.sender}</Text>
                <View style={{ height: 4 }} />
                <Text style={styles.text}>{reply.message}</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container(message.myMessage)}>
            <Menu onCopy={handleCopy} onReact={handleReact} onReply={() => onReply(message)}>
                <View style={styles.messageContainer(message.myMessage)}>
                    { message.reply &&
                        <ReplyMessage reply={message.reply} />
                    }
                    { message.text && 
                        <View style={styles.messageBox(message.myMessage)}>
                            <Text style={styles.text}>{message.text}</Text>
                            <Text style={[styles.text, styles.date(message.myMessage)]}>{message.date}</Text>
                        </View>
                    }
                </View>
            </Menu>
        </View>
    )
}

const styles = StyleSheet.create({
    container: myMessage => ({
        alignSelf: myMessage ? 'flex-end' : 'flex-start'
    }),
    messageContainer: myMessage => ({
        alignItems: myMessage ? 'flex-end' : 'flex-start'
    }),
    replyBox: {
        marginBottom: 5,
        flexDirection: 'row'
    },
    replyBoxLine: {
        backgroundColor: '#ddd3ff',
        alignSelf: 'stretch',
        width: 2,
        marginRight: 7
    },
    replyContent: {
    },
    messageBox: myMessage => ({
        padding: 15,
        backgroundColor: myMessage ? '#6a59c9' : '#2e2832',
        borderTopLeftRadius: myMessage ? 10 : 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: myMessage ? 0 : 10
    }),
    text: {
        color: '#ddd3ff',
        fontSize: 16,
        fontWeight: '700'
    },
    date: myMessage => ({
        alignSelf: myMessage ? 'flex-end' : 'flex-start',
        marginTop: 4,
        fontSize: 13
    })
})

export default Message