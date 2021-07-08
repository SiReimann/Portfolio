const menu = document.querySelector('.menu');
 const burger = document.querySelector('#burger')
burger.addEventListener('click', showHide)
 function showHide() {
  if (menu.classList.contains ('is-active')){
   menu.ClassList.remove('is-active');
  } else {
    menu.ClassList.add('is-active');
   }
 }
// var name = 'Sebastian'
// var lastname = 'Reimann'
//
// function imprimirNombreEnMayusculas(name){
//   name =name.toUpperCase()
//   console.log(name)
// }
//
// console.log ('Hi, '+'i´m '+ name.toUpperCase() +' '+ lastname)
//
// var years = '27 Years old'
// console.log('I´m ' + years)
// var nameinmayus =   name.toUpperCase()
// var mnameminus = name.toLowerCase()
// var firstletter = name.charAt(0)
// var cantidad = name.length
// var peso  = 33
// var año = 1992
// var suma = peso + año


// var seba = {
//   nombre: 'Sebastian',
//   apellido: 'Reimann',
//   edad: 27,
//   chile: true,
//   argentina: false,
//   alemania: true,
// }
// function  imprimirPais(persona){
//   console.log('${persona.nombre} es de:')
//   if (persona.argentina){
//     console.log('argentina')
//   }
//   if (persona.chile){
//
//     console.log('chile')
//
//   }
//
//   if (persona.alemania){
//
//     console.log('alemania')
//
//   }
//
// }
//
// imprimirPais(seba)
