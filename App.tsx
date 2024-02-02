import Main from "./src/Main"
import { Provider as StoreProvider } from 'react-redux'
import store from './src/utils/store'
import overrideColorScheme from 'react-native-override-color-scheme'

export default function App() {
    overrideColorScheme.setScheme('dark')
    return (
        <StoreProvider store={store}>
            <Main />
        </StoreProvider>
    )
}