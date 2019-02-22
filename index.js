// add solution here
function theBeatlesPlay(musicians,instruments){
 musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
var statement = [];    
 for (var i = 0; i < musicians.length; i++) {
statement.push(musicians[i] + " plays " + instruments[i]);

}
  return statement;
}


function johnLennonFacts(facts){
var exclaim = [ ];

while(i < facts.length){
  exclaim.push(facts[i]+ '!!!');
   i = i + 1;
}
  return exclaim;
}



function iLoveTheBeatles(n){

var statement = [ ];
var k = 0;
if(n > 15) {
  k = n-16;}

else {
 k = 15-n;

}

var i = 0;

/*function johnLennonFacts(facts){
  facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" 
];
//facts = [ "foo","bar"];
var exclaim = [];
var i =0;
while(i < facts.length){
  exclaim.push(facts[i]+ '!!!');
   i = i + 1;
}
  return exclaim;
}*/





function iLoveTheBeatles(){

var statement = [ ];
var i = 0;
>>>>>>> bb6afdbe2034ae2253f8d895470717a71583c73f
do {
  statement.push('I love the Beatles!');
  i++;
}
<<<<<<< HEAD
  while (i < k);
return statement;
}

  while (i <15);
}


