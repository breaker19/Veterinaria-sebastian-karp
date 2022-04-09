//ejemplo del profe a tener en cuenta

let ok = true;

export const ProductoMascotas = (time, tarea) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                resolve(tarea);
            }else {
                reject('Algo salió mal),');
            }
        
      
        }, time);
        
    
    });
    
}

export default ProductoMascotas;