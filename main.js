//----TASK1
// document.write(`<ul>`);
// for ( let i=0; i<10; i++) {
//----Way1
//     document.write(`<li> some text </li>`);
//----Way2
//     document.write(`<li> some text ${i} </li>`)
// }
// document.write(`</ul>`);

//----TASK2
// document.write(`<ul>`);
// let i=0;
// while (i<10)
// {
//     //----Way 1
//     // document.write(`<li> try while</li>`);
//
//     //----Way 2
//     document.write(`<li> try while ${i}</li>`);
//     i++;
// }
// document.write(`</ul>`);

//----TASK3
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (let listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);

// ----TASK4
let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="product-card">`);
for (let product of products) {
    document.write(`<h3>${product.title}. Price: ${product.price}</h3> <img class="pict" src="${product.image}" alt="product-img">`);
}
document.write(`</div>`);




