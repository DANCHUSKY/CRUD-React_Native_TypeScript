// Importar React y useState desde 'react'
// Importar Alert, View, TextInput, Button desde 'react-native'
import React, { useState } from 'react';
import { Alert, View, TextInput, Button, TouchableOpacity, Text, Image } from 'react-native';

// Importar el estilo CSS para la pantalla de registro desde './styles/LoginScreenCSS'
import registerScreenStyles from './styles/RegisterScreenCSS';

// Importar EncryptStorage desde 'encrypt-storage'
import { EncryptStorage } from 'encrypt-storage';

// Importar las funciones isRegistred y createAccount desde el archivo '../../DB/loginMethods'
import { isRegistred, createAccount } from "../../DB/loginMethods";

// Importar useNavigation desde '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
// Crear una instancia de EncryptStorage con una clave de encriptación
const Encript = new EncryptStorage("hL#9p2@qJ$zF!sG8cR5aE7yWn");

// Función principal para la pantalla de registro
function LogScreen(): JSX.Element {
    // Definir estados utilizando el hook useState para manejar el estado de diferentes campos de entrada
    const [correo, setCorreo] = useState("");
    const [user, setUser] = useState("");
    const [tel, setTel] = useState("");
    const [TMcontraseña, setPassword] = useState("");
    const [TMcontraseñaConfirm, setPassword2] = useState("");

    // Obtener la función de navegación desde el hook useNavigation
    const navegar = useNavigation();

    // Función asincrónica para manejar el registro de un nuevo usuario
    async function registrarse() {
        // Encriptar las contraseñas ingresadas
        var contraseña = Encript.hash(TMcontraseña);
        var contraseñaConfirm = Encript.hash(TMcontraseñaConfirm);

        // Verificar si las contraseñas ingresadas coinciden
        if (contraseña == contraseñaConfirm) {
            // Verificar si el usuario ya está registrado
            if (await isRegistred(user, contraseña)) {
                // Mostrar una alerta si la cuenta ya está registrada
                Alert.alert("Error: Esta cuenta ya está registrada");
            } else {
                // Crear una nueva cuenta utilizando la función createAccount
                var respuesta: string = await createAccount(user, contraseña, correo, tel);

                // Mostrar una alerta con la respuesta del registro
                Alert.alert(respuesta);

                // Navegar a la pantalla de inicio de sesión después del registro exitoso
                navegar.navigate('Login' as never);
            }
        } else {
            // Mostrar una alerta si las contraseñas no coinciden
            Alert.alert("Las contraseñas no son iguales");
        }
    }

    // Retornar la vista de la pantalla de registro
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['darkblue', 'black']}
                style={registerScreenStyles.container}
            >

                <TextInput
                    placeholder="Correo Electrónico"
                    keyboardType="email-address"
                    onChangeText={(text) => setCorreo(text)}
                    value={correo}
                    style={registerScreenStyles.textInput}
                    placeholderTextColor="white"
                />

                <TextInput
                    placeholder="Usuario"
                    onChangeText={(text) => setUser(text)}
                    value={user}
                    style={registerScreenStyles.textInput}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Telefono"
                    keyboardType="phone-pad"
                    onChangeText={(text) => setTel(text)}
                    value={tel}
                    style={registerScreenStyles.textInput}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={TMcontraseña}
                    style={registerScreenStyles.textInput}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Confirmar Contraseña"
                    secureTextEntry
                    onChangeText={(text) => setPassword2(text)}
                    value={TMcontraseñaConfirm}
                    style={registerScreenStyles.textInput}
                    placeholderTextColor="white"
                />
                <TouchableOpacity
                    style={[registerScreenStyles.button, { backgroundColor: '#004d80' }]}
                    onPress={registrarse}
                >
                    <Text style={registerScreenStyles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};



// Exportar el componente LogScreen como el componente por defecto
export default LogScreen;
