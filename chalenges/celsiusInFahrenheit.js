const CelsiusOrFahreinheit = degree => {
   const celsius = degree.toUpperCase().includes('C')
   const fahreinheit = degree.toUpperCase().includes('F')

   if(!celsius && !fahreinheit) {
      throw new Error('Grau não permitido')
   }

   let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
   let formula = fahreinheit => (fahreinheit - 32) * 5/9
   let insign = 'C'

   if(celsius) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => celsius * 9/5 + 32
    insign = 'ºC'

  
   }
   return formula(updatedDegree) + insign
}

console.log(CelsiusOrFahreinheit('50c'));