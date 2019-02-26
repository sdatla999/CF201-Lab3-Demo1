"use strict"

var userName = getName();

//if the user name is valid then get inside the program
if (userName) {
  var answer = prompt('Thanks for your response ' + userName
    + '! I\'m going to ask few questions, if you are intrested please answer Y else N');
  
  console.log('User Answer:', answer.toUpperCase());

  //If user is interested then call the Question function
  if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES') {
    getQuestionsFromUser(userName);
  } else {
    alert('Thanks for your response ' + userName + ' We will catch you later');
  }
}

//add function to get the user Name
function getName() {
  
  //Intake valid user name
  var userName = prompt('What is your name?');

  if (userName) {
    console.log('User Name:' + userName);
    return userName;
  } else {
    alert("Please enter a valid name and retry");
    return false;
  }
}

// Add function for getting the questions
function getQuestionsFromUser(userName) {
  var answer_company = prompt(userName + '! Thanks for your Inetrest. Are you working for Amazon (Y/N) ');
    console.log('User Answer:', answer_company);
    
    var answer_company = answer_company.toUpperCase();
    var answer_organization = prompt('Are you in Peopletech Org(Y/N) ');
    console.log('User Answer:', answer_organization);
    
    var answer_organization = answer_organization.toUpperCase();
    var answer_designation = prompt('Are you an Application Engineer (Y/N');
    console.log('User Answer:', answer_designation);

    var answer_designation = answer_designation.toUpperCase();
    if ((answer_company === 'Y') && (answer_organization === 'Y') && (answer_designation === 'Y')) {
      alert('Great, you have software development training on this friday, enjoy the day');
    } else {
      alert('Dude! you are missing software development training on this friday');
    }
}