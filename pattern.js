// 1
let str = "";
for (let i=1;i<=5; i++){
    for (let j=1; j<=i; j++){
 str += "*"
    }
 str += "\n" ;
}
console.log(str);

// 2
let star = "";
for (let i=1;i<=5; i++){
    for (let j=1; j<=5; j++){
 star += "*"
    }
 star += "\n" ;
}
console.log(star);

// 3
let starr = "";
for (let i=1;i<=5; i++){
    for (let j=1; j<=5; j++){
        if(i==1 | i==5 |j==5 | j ==1 ){
            starr += "*";
        } else {
            starr += " "
        }
    }
 starr += "\n" ;

}
console.log(starr);

// 4 practice
let s =""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        s += "*"
    }
    s += "\n";
}
console.log(s);

let ss= ""
for(let i=5 ;i>=0;i--){
    ss += "*       "
    for (let j=1;j<=i;j++){
         ss += "*"
    }
   ss += "\n"
}
console.log(ss);



