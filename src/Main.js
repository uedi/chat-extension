import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Chat from './screens/Chat'
import { routeProps } from './utils/mocks'

const Main = () => {
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