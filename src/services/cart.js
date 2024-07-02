// inserindo as assinaturas dos métodos (nome da função)

// Casos de uso
// quais ações meu carrinho pode fazer?
// - adcionar item do carrinho
// - deletar item do carrinho
// - remover (diminuir um item)
// - calcular o total

// ✔ adicionar item do carrinho
async function addItem(userCart, item){
  userCart.push(item)
}

// calcular o total
async function calculateTotal(userCart){
  console.log("\nShopee Cart Total is: ");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  
  console.log(`💰${result.toFixed(2)}`);
}

// deleter item do carrinho
async function deleteItem(userCart, name){
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1){
    userCart.splice(index, 1)
  }
}

// remover um item (diminuir um item)
/* async function removeItem(userCart, index){
  // transforma o índice visual do usuário, para o índice de backend
  const deleteIndex = index - 1;
  // é maior do que zero e se é menor do que o tamanho do carrinho
  if(index >= 0 && index < userCart.length){
    userCart.splice(deleteIndex, 1);
  }
} */
async function removeItem(userCart, item){

  // 1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. cado não encontre o item
  if(indexFound === -1){
    console.log("item não encontrado");
    return;
  }

  // 3. item > 1 subtrair um item
  if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1;
    userCart[indexFound].subtotal = () => userCart[indexFound].price * userCart[indexFound].quantity; // Update subtotal
    return;
  }

  // 4. item = 1 deletar o item
  if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
    
    return;
  }
  
}

async function displayCart(userCart){
  console.log("\nShopee cart list:");
  userCart.forEach((item, index)=> {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`)
  })
}

export {addItem, calculateTotal, deleteItem, removeItem, displayCart}