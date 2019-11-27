// -----//01: faça um função que retorne se uma data string contém a letra h nela

// function retornarString (palavra){
//     const regex = /h/
//     return regex.test(palavra)
// }

// const resultado = retornarString('Baby shark')
// console.log(resultado)

// -----//02 alteresua função para que ela retorne se a string termina com 'a' ou comece com 'b'
// function retornarString (palavra){
//     const regex = /h/i
//     return regex.test(palavra)
// }

// const resultado = retornarString('Baby shark')
// console.log(resultado)

//03 ------//alteresua função para que ela retorne se a string termina com 'a' ou comece com 'b'


// function retornarString (palavra){
//     const regex = /a$|^b/i
//     return regex.test(palavra)
// }
// const resultado = retornarString('Baby sharka')
// console.log(resultado)

//Desafio: altere sua função para verificar a string contem numeros

function retornarString (palavra){
    // const regex = /0|1|2|3|4|5|6|7|8|9/
    const regex = /\d/
    

    return regex.test(palavra)
}

const resultado = retornarString('Baby sharka')
console.log(resultado)

// LIKE 
// db.aluna.find({ "nome" : /e/ }).pretty() – um nome que contenha e em qualquer parte.
// db.aluna.find({ "nome" : /e/i }).pretty() – um nome que contenha e ou E em qualquer parte.
// db.aluna.find({ "nome" : /e$/ }).pretty() – um nome que termine com e.
// db.aluna.find({ "nome" : /^e/ }).pretty() – um nome que comece e





//01: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)

// //Range de A a Z maiusculo ou minusculo
// function retornarString (palavra){
//     const regex = /(?=.*[A-Z]).*$/
//     return regex.test(palavra)
// }

// const resultado = retornarString('baby shark')
// console.log(resultado)