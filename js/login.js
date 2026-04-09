document.getElementById('signin-btn').addEventListener('click' , function(){
  
//    user-name input 
    const userName=document.getElementById('user-name');
    const inputUserName=userName.value;
     console.log(inputUserName);
     
    // user-password input 
    const userPassword=document.getElementById('user-password');
    const inputUserPassword=userPassword.value;
    console.log(inputUserPassword)

    // match the userName and userPassword 
    if(inputUserName==='admin' && inputUserPassword==='admin123'){
        alert('Signin Successful');

        // go to the index.html 
        window.location.assign('index.html')
    }
    else{
        alert('Your User Name Or Password Is Incorrect Please Try Again ');
        return;
    }
   
})