//Task One
let role = prompt("What is your Role?")

if(role=="Admin"){
    let password = prompt("What is your password?")
    if(password == "TheMaster"){
        alert("Welcome")
    }
    else if(password != null ){
         alert("Wrong Pssword")
    }
    else{
        alert("Canceleld")
        
    }

}
else if (role!= null && role!=""){
    alert("I dont know you!!")
}
else{

  alert("Canceleld")
}
  