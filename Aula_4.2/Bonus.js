let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = []

for (let i=0; i<array.length; i += 1){
    if(i<(array.length-1)){
       newArray.push(array[i]*array[i+1]) 
    }
    else{
        newArray.push(array[i]*2)
    }
    

}

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
    
  }

console.log(newArray)
console.log(array)
console.log(array.reverse())
