


console.log("1.");

console.log(hello);
var hello = 'world';

//var hello;
//console.log(hello);
//hello = 'world';
//prints undefined

console.log("2.");

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle;
//function test(){
    //var needle;
    //needle = 'magnet';
    //console.log(needle)
//}
//needle = 'haystack;
//prints 'magnet'

console.log("3.");

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan;
//function print(){
    //brendan = 'only okay';
    //console.log(brendan);
//}
//brendan = 'super cool';
//console.log(brendan);
//prints 'super cool'

console.log("4.")

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food;
//function eat(){
    //var food;
    //food = 'half-chicken';
    //console.log(food)l
    //food = gone;
//}
//food = 'chicken';
//console.log(food);
//eat();
//prints 'chicken'
//prints 'half-chicken'

console.log("5.")

//*****************************************
//commented out so code after 5 can run
//*****************************************

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//*****************************************

//var mean;
//mean = function{
    //var food;
    //food = "chicken";
    //console.log(food);
    //food = "fish";
    //console.log(food);
//}
//mean();
//console.log(food);
//console.log(food);
//error because mean is a variable
//and not a function

console.log("6.")

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//var genre;
//function rewind(){
    //var genre;
    //genre = "rock";
    //console.log(genre);
    //genre = "r&b";
    //console.log(genre)
//}
//console.log(genre);
//genre = "disco";
//rewind();
//console.log(genre);
//prints undefined
//prints 'rock'
//prints 'r&b'
//prints 'disco'

console.log("7.")

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//var dojo;
//function learn(){
    //var dojo;
    //dojo = "seattle";
    //console.log(dojo);
    //dojo = "burbank";
    //console.log(dojo);
//}
//dojo = "san jose";
//console.log(dojo);
//learn();
//console.log(dojo);
//prints 'san jose'
//prints 'seattle'
//prints 'burbank'
//prints 'san jose'

console.log("8.")

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//function makeDojo(name, students){
    //const dojo;
    //dojo = {};
    //dojo.name = name;
    //dojo.students = students;
    //if(dojo.students > 50){
        //dojo.hiring = true;
    //}
    //else if(dojo.students <= 0){
        //dojo = "closed for now";
    //}
    //return dojo;
//}
//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));
//prints {name: "Chicago", students: "65", hiring: true}
//trying to reassign immutable dictionary dojo
//as a string will throw an error