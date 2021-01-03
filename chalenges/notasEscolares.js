const result = nota => {
   if(nota >=90) {
      console.log('A')

   } else if(nota >= 80 || nota === 89) {
      console.log('B')

   } else if(nota >= 70 || nota === 79) {
      console.log('C')
   }
   else if(nota >= 60 || nota === 61) {
      console.log('D')
   } else console.log('F'); 
}
const sisNotas = (nota, fn) => fn(nota)

sisNotas(59, result)



