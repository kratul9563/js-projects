#Project- 2 
```HTML```
<!DOCTYPE html>
<html>
  <head>
   <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="../styles.css"> -->
    <title>java script backgroundcolor switcher</title>
    
  </head>
  <body style="background-color: orange; font-family:sans-serif;">
   
      <div class="container">
        <center><h1 style="margin-bottom:70px; margin-top:40px;">BMI Calculator </h1></center>
        <form>
          <center>
         <p><label>Height in CM:</label><input type="text" id="height"></p>
         <p><label>Weight in KG:</label><input type="text" id="weight"></p>
         <p><button style="border:2px solid #04AA6D;padding:15px">Calculate</button></p>
         <div id="results"></div>
        </center>
       
      </form>
       </div>
   
   
    <!-- <script src="index.js"></script> -->
  </body>
</html>


```Java Script```

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML=`Please Give a Valid ${height}`
  }else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML=`Please Give a Valid ${weight}`
  }else{
    const bmi = (weight/((height**2)/10000)) .toFixed(2);
    results.innerHTML=`Your BMI is <span>${bmi}</span>`
  }
})
 

