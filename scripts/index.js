const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
// http://server.com/cats.json
fetch('../cats.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  const cats = JSON.parse(catString);
  


  for (let i = 0; i < cats.length; i++) {
    
    //motherInfo = 'The mother cats are called ' + cats[0]['name'] + ', ' + cats['name'][1] + ', and ' + cats['name'][2] + '.';
    if (i>0)
    {
      motherInfo+=", ";
    }
    motherInfo  += cats[i]['name']
   
    for (let k =0;k<cats[i].kittens.length)
    {
          if (cats[i]['kittens'][k]['gender'] == 'm') {
              male ++;
          }
          else {
            female ++;
          }
    }
    

    
   
        
    
  }
  // loops done finalized text.
  motherInfo += ".";
  kittenInfo = 'There are ' + male + ' male kittens and ' + female + ' female kittens.';
    
  



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;


section.appendChild(para1);
section.appendChild(para2);
    
