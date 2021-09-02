var startsColor = ['#000', 'yellow', 'red', 'green', "#fcbe33"];
let clickBtn = document.querySelector('.btn');
let Colors = document.querySelector('#COlors');
clickBtn.addEventListener("click", ()=>{
          let randomNumber = Math.floor(Math.random() * startsColor.length);
          document.body.style.backgroundColor = startsColor[randomNumber];
          Colors.textContent = startsColor[randomNumber]
          console.log(randomNumber)
})