var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

function generadorDominio(parte1, parte2, parte3){
  for(let a=0; a<parte1.length; a++){
      for(let b=0; b<parte2.length; b++){
          for(let c=0; c<parte3.length; c++){
              let nuevoNombre = parte1[a] + parte2[b] + parte3[c] + ".com";
              let nuevoNombre1 = parte1[a] + parte2[b] + parte3[c] + ".es";

           
              console.log(nuevoNombre)
              console.log(nuevoNombre1)
                    
          }
      }
  }
}

console.log(generadorDominio(pronoun,adj ,noun))


