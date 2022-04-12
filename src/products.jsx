

const Pets = [
    {
      product: "royal canin",
      id: 1,
      price: 100,
        stock: 5,
        image:"https://kangoopet.com.ar/wp-content/uploads/2018/03/FIT_01.jpg",
        description: "Alimento balanceado para gatos adultos. Ideal para gatos de interior pero con acceso al exterior o que les gusta jugar y correr por el hogar.",
        category: "gatos",
        vencimiento: "Vencimiento: 20/03/2023",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "dog chow",
        id: 2,
        price: 100,
        stock: 5,
        image:"https://dojiw2m9tvv09.cloudfront.net/62024/product/p10865.jpg",
        description: "Alimento balanceado completo para perros adultos de tamaño mediano y grande de 1 a 7 años de edad. Nutrición específicamente diseñada para tu perro adulto mediano o grande que ayuda a mejorar su calidad de vida desde adentro hacia afuera de forma visible.",
        category: "perros", 
        vencimiento: "Vencimiento: 20/03/2023",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "Pedigree",
        id: 3,
        price: 100,
        stock: 2,
        image:"https://jumboargentina.vteximg.com.br/arquivos/ids/586406-750-750/Alimento-Para-Perros-Pedigree-Carne-100-Gr-1-21816.jpg?v=637265784180800000",
        description: " Pedigree sobre es un alimento para perros adultos, sabor pollo y res en filetes, es un delicioso alimento húmedo para perros, elaborado con una jugosa salsa, elaborado con trozos de Res cocidos al vapor, que le brindan a tu mejor amigo, todo el sabor y nutrición que necesita. ",
        category: "perros",
        vencimiento: "Vencimiento: 20/03/2023",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "Rascador 4 niveles",
        id: 4,
        price: 12.261,
        stock: 20,
        image:"https://s.libertaddigital.com/2021/02/01/feandrea-arbol-para-gatos.jpg",
        description: "Este rascador para gatos con felpa suave y muchas actividades crea el ambiente ideal para cada pata aterciopelada. La torre de rascar garantiza el juego, el descanso y el escondite apropiados para la especie.",
        category: "juguetes",
        vencimiento: "Duración: 3 años aprox",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "Juguete para gatos",
        id: 5,
        price: 100,
        stock: 5,
        image:"https://m.media-amazon.com/images/I/715EiqpJ6XL._AC_SX466_.jpg",
        description: "Equipado con un juguete de ratón para gatos, es enchufable en la parte superior, estimula los sentidos del gato e instintos de caza, mantiene a los gatos ocupados. Dos o más gatos juegan con este juguete.",
        category: "juguetes",
        vencimiento: "VDuración: 3 años aprox",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },


]


export const PromisePets = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Pets);

        }, 2000);

    });

}

export default Pets;
