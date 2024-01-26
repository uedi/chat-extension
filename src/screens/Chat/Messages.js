import { View, StyleSheet, FlatList } from 'react-native'
import Message from './Message'

const ItemSeparator = () => (
    <View style={{ height: 5 }} />
)

const Messages = ({ messages }) => {

    const renderItem = ({ item, index }) => (
        <Message
            message={item}
        />
    )

    return (
        <View style={styles.container}>
            { messages &&
                <FlatList
                    data={messages}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            }
        </View>
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