

const animals = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
var animalObject = {};


const generateYearRange = (start, stop, step) => 
   Array.from({ length: (stop - start) / step + 1}, (_, i) => start + i  * step);


var years = generateYearRange(1924, 2115, 1);

function createChineseZodiacCalendar(){
    /***
     *  
     * 
     */
    for(animal of animals) {
        var yearArr = [];
        var animalNames = new Set();

        years.forEach((year, index) => {
            if(index % 12 === 0) {
               yearArr.push(year);
               animalNames.add(animal);
            }
        })
        years.shift();

       createAnimalObject(animalNames, yearArr);
    }
} 

function createAnimalObject(animals, years){
    let animalNames = Array.from(animals).join(','); 
    animalObject[animalNames]=years; 
}

function findZodiacSign(birthYear){
       for(const [key, value] of Object.entries(animalObject)) { 
          for(const [k, v] of Object.entries(value)){
               if(birthYear == v){
                  console.log(key);
                  getZodiacAnimal(key);
               }
          }
        
     }
}

function getZodiacAnimal(animal){
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let headingText = document.createTextNode(animal);
        let paragraphText = document.createTextNode(`The Year of the ${animal}`)
        h1.appendChild(headingText);
        h1.setAttribute('id', 'animalHeading');
        p.appendChild(paragraphText);
        div.setAttribute('id', 'card');
        div.appendChild(h1);
        div.appendChild(p);
        document.querySelector('body').appendChild(div);
} 

createChineseZodiacCalendar();

document.querySelector('#year').addEventListener('keyup', (e) => {
    var birthYear =  document.querySelector('#year').value;
    var card =  document.querySelector('#card');
    var txtFld = document.querySelector('#year');
    if(e.keyCode == 13) {
        if(card){
             card.remove();
             findZodiacSign(birthYear); 
        } else {
            findZodiacSign(birthYear); 
        }          
    } else if(txtFld.value == ''){
        card.remove(); 
    }
})

