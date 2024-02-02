import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Chat from './screens/Chat'
import { routeProps } from './utils/mocks'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { messages } from './utils/mocks'
import { setMessages } from './reducers/messagesReducer'

const Main = () => {
    const storedMessages = useSelector(state => state.messages)

    const dispatch = useDispatch()

    useEffect(() => {
        if(!storedMessages) {
            dispatch(setMessages(messages))
        }
    }, [storedMessages])

    return (
        <SafeAreaView style={styles.screen}>
            <Chat route={routeProps} />
            <StatusBar barStyle={'light-content'} backgroundColor={'#1e141d'}  />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1e141d'
    }
})

export default Main