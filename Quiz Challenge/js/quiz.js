var questions = [
  ['What is the capitol of South Africa?', 'Pretoria'],
  ['Where is Table Mountain situated?', 'Cape Town'],
  ['Where is Etosha situated?', 'Namibia']
  ];

function buildList(arr){
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1)
{
  listHTML += '<li>' + arr[i] + '</li>';
}
listHTML += '</ol>';
return listHTML;
}

var score = 0;

var answerRightList = [];
answerWrongList = [];

for (var i = 0; i < questions.length; i += 1) {
    answers = prompt(questions[i][0]);
    if (answers.toLowerCase() === questions[i][1].toLowerCase()){
      alert("That is correct");
      answerRightList.push(questions[i][0]);
      score += 1;
    }
    else {
      alert("That is not right");
      answerWrongList.push(questions[i][0]);
    }
 
   
}
function print(message) {
  document.write("<p>You answered the following questions" + message + "  correctly");
}

print(buildList(answerRightList));
document.write("<p>You answered the following questions " + buildList(answerWrongList) + " incorrectly");
