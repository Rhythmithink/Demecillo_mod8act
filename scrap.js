var fullName = prompt("Wassup, what is ur full name");
var userName = prompt("Wassup, what should be ur username");

var gender = confirm("What is ur gender?\nOk if male\nCancel if female");
    if(gender){
        gender = "M";
        alert("Your gender has been set to 'male'");
    }
    else{
        gender = "F";
        alert("Your gender has been set to 'female'");
    }

var description = prompt("put ur short description");
var birthYear = prompt("What is your birthyear");
var profilepic = confirm("Do u want to use a custom pfp?");
    if(profilepic){
        profilepic = prompt("Give file of profile pick >:)");
        alert("your pfp has been setted to the file " + profilepic);
    }
    else{
        profilepic = "prof.png";
        alert("your pfp has not been set");
    }

document.getElementById("fname").innerHTML = fullName;
document.getElementById("username").innerHTML = userName;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = 2023 - birthYear;
document.getElementById("ppic").setAttribute("src", profilepic);
