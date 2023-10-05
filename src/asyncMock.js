const products = [
    {
        id: "1",
        name:"Piluso",
        price: 2000,
        category:"gorra",
        img:"https://http2.mlstatic.com/D_NQ_NP_982466-MLA49935810787_052022-O.webp",
        stock: 25,
        description:"Boca mi buen amigo",
    },
    {
        id: "2",
        name:"Remera",
        price: 10000,
        category:"remera",
        img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/57d46a83396a46268447a7bb4a751909_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_HT3697_01_laydown.jpg",
        stock: 25,
        description:"esta campaña volveremo a estar contigo",
    },
    {
        id: "3",
        name:"camperon",
        price: 30000,
        category:"campera",
        img:"https://essential.vtexassets.com/arquivos/ids/941513-800-auto?v=638235696082830000&width=800&height=auto&aspect=true",
        stock: 47,
        description:"te alentaremos de corazon",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        })
    }, 500)
}

export const getProductById = (productId) => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    }))
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500);
    }))
}