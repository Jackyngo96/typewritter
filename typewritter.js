// const sentence = "hello there from lighthouse labs"; 
// for (let i = 0; i < sentence.length; i++ ) {
//   setTimeout(() => {
//     process.stdout.write (i)
//   },1000); // <= 1s delay to make it noticeable. Can dial it down later.
// } 

 const sentence = "hello there from lighthouse labs"; 
 for (let i = 0; i < sentence.length; i++ ) {
   setTimeout(() => {
     process.stdout.write (sentence[i])
    },i * 50) 
  }  
  setTimeout(() => {
    console.log()
   },2000) 
  
 

