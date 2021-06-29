const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  JSON.parse(cats.json);
  
  for (let i = 0; i < cats.length; i++) {
    
    motherInfo = 'The mother cats are called ' + cats['name'][0] + ', ' + cats['name'][1] + ', and ' + cats['name'][2] + '.';
    
    
  



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
