// NavigationCSS.tsx

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue', // Color de fondo del menú
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black', // Color de fondo de la barra de pestañas
        paddingHorizontal: 20,
        paddingVertical: 5, // Ajusta la altura de la barra de pestañas
        borderTopLeftRadius: 10,  // Radio de borde en la esquina superior izquierda
        borderTopRightRadius: 10, // Radio de borde en la esquina superior derecha
        borderTopColor: 'black',  // Establece el color del área recortada
        borderTopWidth: 1,        // Ancho del área recortada
        marginTop: -10,

    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    activeTab: {
        color: 'lightblue', // Color del ítem activo
    },
    inactiveTab: {
        color: 'gray', // Color del ítem inactivo
    },
});

export default styles;
