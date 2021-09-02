let startColor = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          // 'g',
          // 'h'
]
let clickBtn = document.querySelector('.btn');
let Colors = document.querySelector('#COlors');
clickBtn.addEventListener('click', ()=>{
          let hexColor = '#';
          for (let i = 0; i < 6; i++) {
                    hexColor += startColor[randomNumber()]
          }
          document.body.style.backgroundColor = hexColor;
          Colors.innerHTML = hexColor;
          console.log(hexColor)
})
function randomNumber(){
          return  Math.floor(Math.random() * startColor.length)
}