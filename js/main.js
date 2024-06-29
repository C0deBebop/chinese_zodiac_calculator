

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
               }
          }
        
     }
}

createChineseZodiacCalendar();

document.querySelector('#year').addEventListener('keyup', (e) => {
    var birthYear =  document.querySelector('#year').value;
   if(e.keyCode == 13) {
      findZodiacSign(birthYear);
   }
})

