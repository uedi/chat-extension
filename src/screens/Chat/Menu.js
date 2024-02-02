import { MenuView } from '@react-native-menu/menu'

const Menu = ({ children, onReact, onReply, onCopy }) => {
    if(!children) {
        return null
    }

    return (
        <MenuView
            title='Menu'
            onPressAction={({ nativeEvent }) => {
                const event = nativeEvent?.event
                if(event === 'copy') {
                    onCopy()
                } else if (event === 'reply') {
                    onReply()
                } else if (event === 'react') {
                    onReact()
                }
            }}
            shouldOpenOnLongPress={true}
            actions={[
            {
                id: 'react',
                title: 'React to message',
            },
            {
                id: 'reply',
                title: 'Reply'
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