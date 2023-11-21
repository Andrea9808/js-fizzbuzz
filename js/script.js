// Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz”, al posto del numero e 
//per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli 
//di 3 che di 5 stampi “FizzBuzz”.


// contiamo da 1 a 100
for (let i = 1; i <= 100; i++){

    // calcoliamo i numeri divisibili *3 e *5 
    if((i % 3 === 0) && (i % 5 === 0)){

        console.log("FizzBuzz");
    
    // calcoliamo i numeri divisibili *3
    }else if(i % 3 === 0){

        console.log("Fizz");
    
    // calcoliamo i numeri divisibili *5
    }else if(i % 5 === 0){

        console.log("Buzz");

    //inseriamo i numeri non divisibili *3 *5 ed entrambi
    }else{
        console.log(i);
    }

};