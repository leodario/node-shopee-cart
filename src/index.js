import * as cartService from './services/cart.js';
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee Cart!");

// criando dois itens
const item1 = await createItem("hotwhells ferrari", 20.99, 1);
const item2 = await createItem("hotwhells lamborghini", 39.99, 3);

// adicionando itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);


await cartService.displayCart(myCart);

// deletando item no carrinho
// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);

