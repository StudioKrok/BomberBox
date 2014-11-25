var giapi;

function init(){
  giapi = new GiAPI(executeAction);
}

function addToProgram(action){
  console.log("Action to add : " + action);
  giapi.registerAction(action);
}

function removeLast(){
  console.log("Remove action");
  giapi.removeAction();
}

function executeAction(action){
  //In real life, here will be the actions of the monacho
  if(action !== giapi.ENDOFPROGRAM){
    document.getElementById("programExecution").innerHTML += action + '</br>';
    setTimeout(actionCompleted,1000);
  }else{
    document.getElementById("programExecution").innerHTML += 'PROGRAM COMPLETED </br>';
  }
}

function runProgram(){
  giapi.init();
}

function actionCompleted(){
  giapi.actionExcecuted();
}

