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


