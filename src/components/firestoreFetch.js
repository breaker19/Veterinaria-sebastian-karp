import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import db from './firebaseConfig';

const fetchData = async (categoryId) => {

    let q;
    if(categoryId) {
        q = query(collection(db,'products'),where('category.name', '==', categoryId));
    }else {
        q = query(collection(db, 'products')); orderBy("name")
      }
      const getProducts =await getDocs(q);
      const products = getProducts.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
          }));
          return products;
      }


 
  fetchData()
  


 


  export default fetchData;



