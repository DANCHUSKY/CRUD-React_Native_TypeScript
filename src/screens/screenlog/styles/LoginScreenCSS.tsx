// RegisterScreenCSS.tsx
import { StyleSheet } from 'react-native';

//css
const registerScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 30,
        padding: 8,
        color: 'white',
        borderRadius: 20,
    },
    button: {
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },

    logoImage: {
        alignSelf: 'center',
        marginBottom: 40,      // Espacio inferior
    },
});

export default registerScreenStyles;
