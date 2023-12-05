// Importar AsyncStorage desde la biblioteca '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para crear una nueva cuenta de usuario
export async function createAccount(user: string, password: string, correo: string, telefon: string) {
  // Verificar si ninguno de los campos de entrada está vacío
  if (user !== "" && password !== "" && correo !== "" && telefon !== "") {
    try {
      // Verificar si el usuario ya está registrado
      const isRegistered = await isRegistred(user, password);

      if (!isRegistered) {
        // Almacenar la información del nuevo usuario en AsyncStorage
        await AsyncStorage.setItem("User", user);
        await AsyncStorage.setItem("Password", password);
        await AsyncStorage.setItem("Correo", correo);
        await AsyncStorage.setItem("Telefon", telefon);

        return "Se ha registrado correctamente";
      } else {
        return "Este usuario ya está registrado";
      }
    } catch (error) {
      console.error("Error al intentar registrar:", error);
      return "Error al intentar registrar";
    }
  } else {
    return "No puede haber campos en blanco";
  }
}

// Función para verificar si un usuario ya está registrado
export async function isRegistred(use: string, pass: string): Promise<boolean> {
  // Obtener el usuario y la contraseña almacenados en AsyncStorage
  let Us = await AsyncStorage.getItem("User");
  let Pas = await AsyncStorage.getItem("Password");

  // Verificar si el usuario y la contraseña coinciden
  if (Us == use && Pas == pass) {
    return true;
  } else {
    return false;
  }
}
