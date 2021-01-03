const family = {
  receitas: [25, 45, 4, 6, 876, 2, 234, 23, 324, 43],
  despesas: [34, 342, 1, 56, 6, 23, 1, 24, 6, 45, 2, 2],
};

const receitas = value => value.receitas.reduce((acc, el) => acc + el);
const despesas = value => value.despesas.reduce((acc, el) => acc + el);

const result = (receitas, despesas) => receitas - despesas >= 0 
? `Seu saldo esta legal: ` :`Seu saldo não esta legal: ` 

console.log(result(receitas(family), despesas(family)));



