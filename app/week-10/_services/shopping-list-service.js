import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    let items = [];

    try {
        const q = query(collection(db, `users/${userId}/items`));
        
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                data: doc.data()
            });
        });
    } catch (error) {
        console.error("Error getting items:", error);
    }
    return items;
}

export async function addItem(userId, item) {
    try {
        const docRef = await addDoc(collection(db, `users/${userId}/items`), item);

        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        return null;
    }
}
