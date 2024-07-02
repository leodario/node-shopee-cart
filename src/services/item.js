// CASOS DE USO DOS ITEMS

// -> criar item com subtotal certo
async function createItem(name, price, quantity){
  return{
    name, 
    price,
    quantity,
    // como faço para o subtotal exibir duas casas decimais?
    subtotal: () => price * quantity,
  }
}

export default createItem;