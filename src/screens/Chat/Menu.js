import { MenuView } from '@react-native-menu/menu'

const Menu = ({ children }) => {
    if(!children) {
        return null
    }

    return (
        <MenuView
            title='Menu'
            onPressAction={({ nativeEvent }) => {
                console.log(JSON.stringify(nativeEvent));
            }}
            shouldOpenOnLongPress={true}
            actions={[
            {
                id: 'react',
                title: 'React to message',
            },
            {
                id: 'reply',
                title: 'Reply',
            },
            {
                id: 'copy',
                title: 'Copy'
            },
            ]}
        >
            {children}
        </MenuView>
    )
}

export default Menu