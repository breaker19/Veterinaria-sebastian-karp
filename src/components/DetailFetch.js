import {doc, getDoc} from  '@firebase/firestore'
import db from './firebaseConfig';

const docRef = doc(db, "products");
const fetchDetail = async () => {
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = {
    id: docSnap.id,
    ...docSnap.data()
  };
  
  return data;
 
}
};
fetchDetail();
export default fetchDetail;