//This is a single line comment in javascript

document.write("This is also javascript!<br>");
document.write("all the world\'s a stage");              
/*BLOCK COMMENT - good for whole sections being turned off */

//Variables




//string type of data *****************************************
var userName = "Tyler";//setting a variable

userName = "Tina"; // using a variable

// the = is the assignment operator

var firstName = "Tyler";

var lastName = "Waite";

//Bad variable names

//var 1hi = "12:30" //time is a reserved key word

//Using single and double quotes

var myComment = "Who said this?";
var myQuote = " All the world\'s a stage."; //single quotes print literal characters
var myQuote2 = "all the world's a stage";


//console.log(myComment);//shows value of myComment in console

//var message = myComment + myQuote;//joining two variables
var message = firstName + " " + lastName;//joining two variables
//console.log(message);

//var paragraphRef = document.getElementById("replace");
//paragraphRef.innerHTML = message;

var string1 = document.getElementById("string1");
string1.innerHTML = message;

var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);

message = message.toUpperCase();
//console.log(message);



//Numbers **********************************(dont use quotes for numbers)
var level = 1; 
var lives = 3;
var phNumber = 5554441212;//this is integer
var cost = 1.50;//this is a float type number
var cost1 = 50; 
var cost2 = 50;
var total = cost1 * cost2;
//console.log(total);
//console.log(level);


//Array data type*********************************
//An array is a variable that can hold many values

var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";
//imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList[5]);

console.log(imageList.length);


//Boolean Data Type ************************************
//true or false, yes or no, 1 or 0

var oldEnough = false;

var hasContent = true;
var age = 21;

if(age <= 21 && age != 120){//less than or equal
  //too young
  oldEnough = false;
}else{
  //old Enough
  oldEnough = true;
}

//**if then statements (branching logic, application logic, business logic)***
if(oldEnough == true){
  // == means is equal to
  // = gets set to
  //more code here
  console.log("you can have a drink!");
}else{
  console.log("you cannot have a drink!");
}

//Functions *********************************************
//reusable chunks of code that can be called at any time

//methods are functions that belong to objects
//objects are a collection of properties and methods

function dynamicGreeting (){
  //create the built in date object
  var now = new Date ();
  var time = now.getHours();//extract the hours
  if(time < 12){
    alert("good morning");
  }
   if(time == 12){
    alert("to eat lunch at luna park");
  }
   if (time > 12){
    alert("good evening, the time is..." + now.toLocaleTimeString());
  }
  
}

dynamicGreeting();