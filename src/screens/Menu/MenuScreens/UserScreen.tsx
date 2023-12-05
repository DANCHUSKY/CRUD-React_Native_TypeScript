// UserScreen.tsx

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles/UserScreenCSS';

type UserScreenProps = {
    navigation: StackNavigationProp<any, any>;
};

const UserScreen: React.FC<UserScreenProps> = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Correo Electrónico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserScreen;
