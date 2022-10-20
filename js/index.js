// // Iteration 1: Names and Input
const hacker1 = "Bruno"
    console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Bruno"
    console.log(`The navigator's name is ${hacker2}`)

// // Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has te longest name, it has ${hacker2.length} characters`)
} else{  
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// // Iteration 3: Loops
// //3.1
for (let i=0; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase())
    console.log(" ")
}

// //3.2
let navInverse = [];

for (let i=0; i < hacker2.length; i++){
    
    navInverse.push(hacker2[i])
}

console.log(navInverse.reverse().join(''))

//3.3
    //Solução 1
    if (hacker1 < hacker2){
        console.log("The driver's name goes first")
    } else if (hacker2 < hacker1) {
        console.log("Yo, the navigator goes first definitely")
    } else {
        console.log("Wow, you both have the same name")}


    //Solução2
     if (hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1))  {
        console.log("The driver's name goes first")
     } else if (hacker2.localeCompare(hacker1) < hacker1.localeCompare(hacker2)){
        console.log("Yo, the navigator goes first definitely")
     } else {
        console.log("Wow, you both have the same name")
     }

// Bonus 1

const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula finibus neque, maximus feugiat est porta et. Fusce malesuada, felis quis ultrices scelerisque, ipsum nunc tincidunt turpis, sed pharetra nisi metus sed lectus. Donec dignissim felis libero. Praesent ut ultrices lorem. Cras a elementum velit. Proin mattis ultrices fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi at nulla sed eros condimentum faucibus. Sed ac est sapien."
const text2 = "Morbi efficitur sollicitudin eleifend. Sed viverra eros ac urna viverra luctus. In quis ultricies nisl. Integer ut est a nibh rhoncus sagittis a vel sapien. Mauris sit amet enim ipsum. Etiam fringilla molestie neque ut aliquet. In mollis neque lorem, vel dignissim mauris blandit at."
const text3 = "Aliquam at suscipit ligula. Suspendisse dictum tellus a nibh venenatis tincidunt. Duis molestie sollicitudin lacus, gravida vestibulum mauris efficitur ac. Pellentesque eget orci vulputate nulla imperdiet bibendum. Nam non convallis nibh. Quisque ac neque urna. Curabitur et velit eget nisl gravida ultricies. Aliquam est nulla, suscipit ac feugiat nec, lacinia ut arcu. Nam sed ligula ut ex malesuada pulvinar ut ut arcu."

const qtdWds1 = text1.split(' ')
console.log(qtdWds1.length)
const qtdWds2 = text2.split(' ')
console.log(qtdWds2.length)
const qtdWds3 = text3.split(' ')
console.log(qtdWds3.length)

//Solução 1 contar et
function countEt(text){
let counter = 0;
  for (i = 0; i < (text.length-1); i++){
      if (text[i] === "e" && text[i+1] === "t" && (text[i+2] === ' ' || '.' || ',')){
      counter++
      }
    }
    return counter;
}
console.log(countEt(text1))
console.log(countEt(text2))
console.log(countEt(text3))


//Solução 2 contar et
const ocorrencias1 = (text1.match(/et/g))
const ocorrencias2 = (text2.match(/et/g))
const ocorrencias3 = (text3.match(/et/g))

console.log(ocorrencias1.length)
console.log(ocorrencias2.length)
console.log(ocorrencias3.length)

// // Bonus 2

const phraseTocheck = "amor roma"

 let totalLetras = phraseTocheck.length
 let letrasConferencia =  Math.floor(phraseTocheck.length/2)

 
 console.log(totalLetras)
 console.log(letrasConferencia)

 const part1 = [];
 const part2 = [];
 for(let i=0; i<= letrasConferencia-1; i++){
        part1.push(phraseTocheck[i])
 }
 for (let i = letrasConferencia+1; i < phraseTocheck.length; i++){
    part2.push(phraseTocheck[i])
 }
 part2.reverse()
 

 console.log(part1)
 console.log(part2)


 if(part1 === part2){
    console.log(`${phraseTocheck} é Palindromo`)
 }