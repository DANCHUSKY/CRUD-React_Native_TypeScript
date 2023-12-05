// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { isRegistred } from "../../DB/loginMethods"
import { EncryptStorage } from 'encrypt-storage';
import loginScreenStyles from './styles/LoginScreenCSS';
import LinearGradient from 'react-native-linear-gradient';

// Función principal para la pantalla de registro
function LogScreen(): JSX.Element {
    // Definir estados utilizando el hook useState para manejar el estado de diferentes campos de entrada
    const navigation = useNavigation();
    const [User, setUser] = useState("");
    const [Password, setPassword] = useState("");

    const Encript = new EncryptStorage("hL#9p2@qJ$zF!sG8cR5aE7yWn");

    function handleRegisterPress() {
        navigation.navigate('Register' as never);
    }

    async function handleLoginPress() {
        let pasEncript: string = Encript.hash(Password)

        if (await isRegistred(User, pasEncript)) {
            navigation.navigate('Navigation' as never)
        } else {
            Alert.alert("Usuario o contraseña incorrectos")
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['darkblue', 'black']}
                style={loginScreenStyles.container}
            >
                <Image
                    source={require('../../images/LogoNexaHome.png')}
                    style={[{ width: 200, height: 200 }, loginScreenStyles.logoImage]}
                />
                <TextInput
                    placeholder="Usuario"
                    onChangeText={(text) => setUser(text)}
                    value={User}
                    style={loginScreenStyles.textInput}
                    placeholderTextColor="white"
                />

                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={Password}
                    style={loginScreenStyles.textInput}
                    placeholderTextColor="white"
                />

                <TouchableOpacity
                    style={[loginScreenStyles.button, { backgroundColor: '#004d80' }]}
                    onPress={handleLoginPress}
                >
                    <Text style={loginScreenStyles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={[loginScreenStyles.button, { backgroundColor: '#004d80' }]}
                    onPress={handleRegisterPress}

                >
                    <Text style={loginScreenStyles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>
    );
};



// Exportar el componente LogScreen como el componente por defecto
export default LogScreen;
