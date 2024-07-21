import { collection, setDoc, doc } from "firebase/firestore";
import { db } from '../config/FirebaseConfig';
import bcrypt from 'bcryptjs';

// Función para agregar usuario
const agregarUsuario = async (nombre, apellido, email, password, grado_academico = '', fecha_nacimiento = '') => {
  try {
    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    const docRef = await setDoc(doc(collection(db, "usuario")), {
      nombre,
      apellido,
      email,
      password: hashedPassword,  // Guardar la contraseña encriptada
      grado_academico,
      fecha_nacimiento,
    });

    // Manejar el signup de manera asíncrona si es necesario
    

    console.log("Document added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
    throw error; // Lanzar el error para que pueda ser manejado por el llamador
  }
};

export {
  agregarUsuario
};
