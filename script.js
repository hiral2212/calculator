 //display  input
 
 function display(val) //val is parameter 
 {
      document.getElementById('result').value+=val;
       return val;
 }
 /*the  display fucntion  accept the values clicked as a parameter and returns same to the textbox*/
  //solving the problem with the input element 
  function solve()
  {
       let a=document.getElementById('result').value;
       let b=eval(a);
       if(b==null)
       {
           alert("Please select a value");
           return null;
       }
       else
       {
           document.getElementById('result').value=b;
           return b;
       }
       
 
  } /*eval method  evaluates or excutes an argument. val is argument here.. */
  /* the solve() mthod is called when the user click on = operator. the variable accepts the mathametical
  expression  provided by the user. this expression is evaluated and stroed in variable b . the result is displayed
  in the textbox */
  function clearScreen()
  {
    let a=document.getElementById('result').value;
       let b=eval(a);
       if(b==null)
       {
           alert("Please select a value");
           return null; 
       }
       else{
      document.getElementById('result').value='';
       }
      /* this function is excute when the user click on the clear button  */
  }
  function  squre()
  {
     document.getElementById('result').value=Math.pow(document.getElementById('result').value,2);
  }
  function  squreRoot()
  {
     document.getElementById('result').value=Math.sqrt(document.getElementById('result').value);

  }