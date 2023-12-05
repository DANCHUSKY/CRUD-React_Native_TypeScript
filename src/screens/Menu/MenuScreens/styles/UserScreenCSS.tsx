// UserScreenCSS.tsx

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00284d', // Color de fondo azul oscuro
    },

    buttonContainer: {
        marginVertical: 10, // Espacio vertical entre los botones
    },
    button: {
        backgroundColor: 'blue', // Color de fondo rojo para los botones
        borderRadius: 10, // Bordes redondeados
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5, // Espacio vertical entre los botones
    },
    buttonText: {
        color: 'white', // Color del texto blanco
        textAlign: 'center',
    },
});

export default styles;
