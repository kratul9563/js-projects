#Project - 5

```HTML```

<!DOCTYPE html>
<html>
  <head>
    <title>Events</title>
  </head>
  <body>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>
  </body>

</html>

```JavaScript```


const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key} </td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})