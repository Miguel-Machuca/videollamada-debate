import { collection, setDoc, doc, query, onSnapshot } from "firebase/firestore";
import { db } from '../config/FirebaseConfig';


// Función para agregar usuario
const crearDebate = async (tema, cantidad_participante, fecha_emision, hora_emision,  estado, url_imagen, descripcion, id_moderador, id_categoria) => {
  try {  
    const docRef = await setDoc(doc(collection(db, "debate")), {
      tema,
      cantidad_participante,
      fecha_emision,
      hora_emision,
      estado,
      url_imagen,
      descripcion,
      id_moderador,
      id_categoria
    });
    console.log("Document added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
    throw error; // Lanzar el error para que pueda ser manejado por el llamador
  }
};

const listarDebate = (setEvents) => {
  const q = query(collection(db, "debate"));
  return onSnapshot(q, (querySnapshot) => {
      const debates = [];
      querySnapshot.forEach((doc) => {
          const document = {
              tema: doc.data().tema,
              fecha_emision: doc.data().fecha_emision,
              id: doc.id
          }
          debates.push(document);
      });
      setEvents(debates);
      console.log('listen all');
  });
}

export {
  crearDebate,
  listarDebate
};
