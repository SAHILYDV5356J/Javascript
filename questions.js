// character is vowel or consonent

var n= prompt("enter a character: ");

if(n==='a' || n==='e' || n==='i' || n=== 'o' || n==='u' || n==='A' || n==='E' || n==='I' || n==='O' || n==='U' ){

    console.log(`${n} is an vowel`);

}
else{
    console.log(`${n} is an consonent`);
}





// find sum of n natural numbers

var n=prompt("enter a number:");

var sum=0;

for(let i=1;i<=n;i++){
    sum+=i;
}

console.log(sum);
