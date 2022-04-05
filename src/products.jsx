

const Pets = [
    {
      product: "royal canin",
      id: 1,
      price: 100,
        stock: 5,
        image:"https://kangoopet.com.ar/wp-content/uploads/2018/03/FIT_01.jpg",
        description: "Royal Canin Fit",
        category: "pets",
        vencimiento: "Vencimiento: 20/03/2023",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "dog chow",
        id: 2,
        price: 100,
        stock: 5,
        image:"https://dojiw2m9tvv09.cloudfront.net/62024/product/p10865.jpg",
        description: "Dog Chow Puppy",
        category: "pets",
        vencimiento: "Vencimiento: 20/03/2023",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "Pedigree",
        id: 3,
        price: 100,
        stock: 5,
        image:"https://jumboargentina.vteximg.com.br/arquivos/ids/586406-750-750/Alimento-Para-Perros-Pedigree-Carne-100-Gr-1-21816.jpg?v=637265784180800000",
        description: "Pedigree",
        category: "pets",
        vencimiento: "Vencimiento: 20/03/2023",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },
    {
        product: "Rascadores",
        id: 4,
        price: 100,
        stock: 5,
        image:"https://s.libertaddigital.com/2021/02/01/feandrea-arbol-para-gatos.jpg",
        description: "Rascadores para gatos",
        category: "pets",
        vencimiento: "Duración: 3 años aprox",
        meme: "https://previews.123rf.com/images/bluedarkat/bluedarkat1308/bluedarkat130800030/21975871-funny-cat-cartoon-scratching-curtain.jpg"
    },


]
//promesa result reject
export const ProductoMascotas = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Pets);
            reject('Algo salió mal),');
        }, 2000);
        
    
    });
    
}


export default Pets;
