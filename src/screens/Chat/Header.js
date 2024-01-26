import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
//
//                 
const Header = ({ name }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Ionicons name='arrow-back' size={32} color="#fff" />
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.iconContainer}>
                <Ionicons name="person" size={24} color="#fff" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#141414'
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'uppercase'
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Header