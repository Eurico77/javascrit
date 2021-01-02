const techs = ['html', 'css', 'js', 'c++']


//coloca mais um em um array
techs.push('qt')
// coloca no inicio do array
techs.unshift('vuejs')
//retira do fim do array
techs.pop()
//retira do começo do array
techs.shift()
// remove os itens de qualquer posição do array
techs.splice(1, 3)

// o slice retira elementos de um array de acordo com os idices que são passados como parametro

// console.log(techs.slice(1, 4))



console.log(techs);