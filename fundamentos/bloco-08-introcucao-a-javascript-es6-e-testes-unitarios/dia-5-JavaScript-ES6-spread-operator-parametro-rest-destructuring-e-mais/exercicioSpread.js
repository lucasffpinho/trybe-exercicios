// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['canela', 'whey', 'granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));