let a = 1;
let b = 2;
let c = 3;

if (a<b && a<c){
    if (b>c){
        console.log("b = " + b)
    }
    else if (c>b){
        console.log("c = " + c)
    }
    else{
        console.log("b e c são iguais")
    }
    
}
else if (b<a && b<c){
    if (a>c){
        console.log("a = " + a)
    }
    else if (c>a){
        console.log("c = " + c)
    }
    else{
        console.log("a e c são iguais")
    }
    
}
else if (c<a && c<b){
    if (b>a){
        console.log("b = " + b)
    }
    else if (a>b){
        console.log("a = " + a)
    }
    else{
        console.log("a e b são iguais")
    }
    
}
else if (a==b && a<c){
    console.log("c = " + c)
}
else if (a==c && a<b){
    console.log("b = " + b)
}
else if (c==b && c<a){
    console.log("a = " + a)
}
else{
    console.log("Os três números são iguais")
}