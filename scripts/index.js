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

  //Start the for loop to iterate through the array of cats.
  //Set counter to 0. As long as i is less than the length of the cats array, increment i.
  for (let i = 0; i < cats.length; i++) {
    
    //If i is greater than 0, first add a comma & space to mother info to create commas after each cat name. This is to ensure that a comma isn't inserted 
    //before the first cat.
    if (i>0)
    {
      motherInfo+=", ";
    }
    
    //If we're one item before the end of the cats array, add an 'and ' for correct grammar.
    if (i == cats.length-1) {
      motherInfo+="and ";
    }
    
    //Add the 'name' attribute of the location of the index within the cats array to variable motherInfo. This adds the names of the mother cats
    //to variable motherInfo.
    motherInfo  += cats[i]['name'];
   
    //Start embedded for loop. Declare k (kittens) counter at 0. As long as k is less than the length of the kittens object within the current index
    //of the cats array, increment k.
    for (let k =0;k<cats[i].kittens.length;k++)
    {
          total++;
      
          //If the gender attribute of k is 'm', increment variable 'male'.
          if (cats[i]['kittens'][k]['gender'] == 'm') {
              male ++;
          }
          //If the gender attribute of k is not 'm', increment variable 'female'.
          else {
            female ++;
          }
    }
    

    
   
        
    
  }
  //Finally, add a period to the end of the motherInfo sentence.
  //Set the value of kittenInfo to contain the value of male, female and total kittens.
  motherInfo += ".";
  kittenInfo = 'There are ' + male + ' male kittens, ' + female + ' female kittens, and ' + total + ' kittens total.';
    
  



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;


section.appendChild(para1);
section.appendChild(para2);
    
}
