// /// hoisting

// sayMyName();

// function sayMyName() {
//   console.log('Eurico');
// };

/// Callback

const numeros = (num1, num2, fn) => {
  return fn(num1, num2);
};

const soma = (n1, n2) => n1 + n2;

console.log(numeros(2, 3, soma));

