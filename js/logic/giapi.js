//Define instance fields for GiAPI
function GiAPI(listener){
  this.listener = listener;
  this.actions = [];
  this.started = false;
  this.finished = false;
  this.actionsIndex = 0;
  this.currentInstruction = null;
}
GiAPI.prototype = {constructor : GiAPI};
GiAPI.prototype.init = function(){
  this.started = true;

  //...do other things...STUPID things...

  this.readProgram();
};
GiAPI.prototype.registerAction = function(action){
  if(!this.started){
    this.actions.push(action);
  }
};
GiAPI.prototype.removeAction = function(){
  if(!this.started) {
    this.actions.pop();
  }
};
GiAPI.prototype.readProgram = function(){
  this.currentInstruction = this.actions[this.actionsIndex];
  console.log(this.currentInstruction);

  //...do...something amazing!!!
  //.....and them some validations and other maricadas

  this.execAction();
};
GiAPI.prototype.execAction = function(){
  this.listener(this.currentInstruction);
};
GiAPI.prototype.actionExcecuted = function(){
  //TODO: Validate errors and other things...
  if(this.actionsIndex < this.actions.length - 1){
    this.actionsIndex++;
    this.readProgram();
  }else{
    //The programm stack...is ended
    this.programEnded();
  }
};
GiAPI.prototype.programToString = function(){};
GiAPI.prototype.programEnded = function(){
  this.finished = true;
  this.listener(this.ENDOFPROGRAM);
};
GiAPI.ENDOFPROGRAM = 'giapi_finish';
