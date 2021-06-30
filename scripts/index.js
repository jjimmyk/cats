//Define the variable section and set it equal to HTML element 'section'.
const section = document.querySelector('section');

//Define variables para1 and para2 as new HTML p elements.
//Define variable motherInfo as a string 'The mother cats are called '. Values from the array will be added to this later.
//Define variable kittenInfo.
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;

//Fetch the JSON file from my github repository cats.
//Import the JSON file as a text file, rather than as a JSON object. 
//This means I'll need to use parse below to change the string to a JSON object.
fetch('../cats/cats.json?v=1')
.then(response => response.text())
.then(text => displayCatInfo(text))

//Define function displayCatInfo, which intakes the variable catString (the JSON file when it's imported as a string, before being parsed into a JSON object.)
//Declare variable total # of cats = 0.
//Declare variable # of male cats = 0.
//Declare variable # of female cats = 0.
function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  //Declare variable cats as the parsed version of catString, converting the JSON file from a string to a JSON object.
  const cats = JSON.parse(catString);
  
 //motherInfo = 'The mother cats are called ' + cats[0]['name'] + ', ' + cats['name'][1] + ', and ' + cats['name'][2] + '.';
 //^I was going to use this, but this doesn't necessitate a loop and only works if there are 3 mother cats/if I know how many mother cats there are.

  for (let i = 0; i < cats.length; i++) {
    
    
    if (i>0)
    {
      motherInfo+=", ";
    }
    motherInfo  += cats[i]['name'];
   
    for (let k =0;k<cats[i].kittens.length;k++)
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
    
}
