const details={
    user1:{
        email:"sy05092005@gmail.com",
        mobile:8690548852,
        password:"rocksta5356j",
        name:"sahil",
        year: "1st",
        rollno: 25035
    }
    ,
    user2:{
        email:"parvesh1234@gmail.com",
        mobile:7878989158,
        password:"rocksta5357j",
        name:"Parvesh",
        year:"1st",
        rollno:25081

    }

    ,

    user3:{
        email:"vishal1234@gmail.com",
        mobile:45454454544,
        password:"rocksta5356j",
        name:"Vishal",
        year:"1st",
        rollno:32433
    }
}



console.log("Enter Below Details To Access Your Account:");
let count =0;
let flag=false;
let flag2=false;

while(true){
let input1=prompt("enter your mobile Number / email id: ");
let input2=prompt("enter your password: ");
count++;
    
     
for(let user in details){
  
    
    if((Number(input1)===details[user].mobile || input1===details[user].email)){

        if(input2===details[user].password){
            console.log("You are Sign in Successfully!\n");

            for(let ans in details[user]){
                console.log(`${ans} :  ${details[user][ans]}`);
            }

            flag=true;
            break;
            

        }
        else{
            console.log("incorrect password! try again: ");
            flag2=true;
        }
    

    }
        
        
    
}

if(count===3){
    console.log("Please try again after 24 hours");
    break;
}
else if(flag){
    break;
}
else if(!flag2){
    console.log("invalid input");
}


}