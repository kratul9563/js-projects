# Project - 3

```HTML```
<!DOCTYPE html>
<html>
  <head>
   <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="../styles.css"> -->
    <title>java script backgroundcolor switcher</title>
    
  </head>
  <body style="background-color: orange; font-family:sans-serif;">
   <center>
    <div class="center" style="margin-top:200px;">
      <div id = "banner" style="margin-bottom:10px;">Your Local Time</div>
     <button> <div id="clock" style=" padding:10px; border-radius:5px; backgroundcolor:black; "></div></button>
       </div>
     
   </center>
     
   
    <!-- <script src="index.js"></script> -->
  </body>
</html>


```Java Script```

const clock = document.getElementById('clock')

setInterval(function () {
  const date = new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)
