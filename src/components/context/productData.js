const productData = [
    {
        id: "1",
        title: "Apple Watch Ultra",
        price: 879.99,
        src: './images/product-1.jpg',
        description: "Apple Watch Ultra is durable, water-resistant up to 100 meters, and 36 hour battery life with apps to track your fitness and health."
    },
    {
        id: "2",
        title: "Apple Airpods Gen 2",
        price: 249.99,
        src: './images/product-2.jpg',
        description: "Apple Airpods Pro 2nd generation offers the H2 chip for best active noise cancellation and 6 hour battery life on a single charge."
    },
    {
        id: "3",
        title: "MacBook Pro with M2 Chip",
        price: 1349.99,
        src: './images/product-3.jpg',
        description: "Apple's 2022 MacBook Pro is an incredibly powerful computer that can keep up with gaming, professional editing and creative software."
    },
    {
        id: "4",
        title: "Language Translation Earbuds",
        price: 99.99,
        src: './images/product-4.jpg',
        description: "The Language Translation Earbuds by Timekettle is the most powerful and sophisticated AI-powered translation earbuds in the world."
    },
];

function getProductData(id) {
    let products = productData.find(product => product.id === id);

    if (products === undefined) {
        return undefined;
    }

    return products;
}

export { productData, getProductData };