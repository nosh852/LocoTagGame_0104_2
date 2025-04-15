gdjs.Start_95countdownCode = {};
gdjs.Start_95countdownCode.localVariables = [];
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects1= [];
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects2= [];
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects3= [];
gdjs.Start_95countdownCode.GDNewSpriteObjects1= [];
gdjs.Start_95countdownCode.GDNewSpriteObjects2= [];
gdjs.Start_95countdownCode.GDNewSpriteObjects3= [];
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects1= [];
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects2= [];
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects3= [];
gdjs.Start_95countdownCode.GDTimerTextObjects1= [];
gdjs.Start_95countdownCode.GDTimerTextObjects2= [];
gdjs.Start_95countdownCode.GDTimerTextObjects3= [];
gdjs.Start_95countdownCode.GDButton_9595AObjects1= [];
gdjs.Start_95countdownCode.GDButton_9595AObjects2= [];
gdjs.Start_95countdownCode.GDButton_9595AObjects3= [];
gdjs.Start_95countdownCode.GDB_9595buttonObjects1= [];
gdjs.Start_95countdownCode.GDB_9595buttonObjects2= [];
gdjs.Start_95countdownCode.GDB_9595buttonObjects3= [];
gdjs.Start_95countdownCode.GDCoinScoreObjects1= [];
gdjs.Start_95countdownCode.GDCoinScoreObjects2= [];
gdjs.Start_95countdownCode.GDCoinScoreObjects3= [];
gdjs.Start_95countdownCode.GDScoreRunObjects1= [];
gdjs.Start_95countdownCode.GDScoreRunObjects2= [];
gdjs.Start_95countdownCode.GDScoreRunObjects3= [];
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects1= [];
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects2= [];
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects3= [];
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects1= [];
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects2= [];
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects3= [];
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects1= [];
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects2= [];
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects3= [];
gdjs.Start_95countdownCode.GDGameOverObjects1= [];
gdjs.Start_95countdownCode.GDGameOverObjects2= [];
gdjs.Start_95countdownCode.GDGameOverObjects3= [];
gdjs.Start_95countdownCode.GDScrollGroundStillObjects1= [];
gdjs.Start_95countdownCode.GDScrollGroundStillObjects2= [];
gdjs.Start_95countdownCode.GDScrollGroundStillObjects3= [];
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects1= [];
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects2= [];
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects3= [];
gdjs.Start_95countdownCode.GDFinalRunScoreObjects1= [];
gdjs.Start_95countdownCode.GDFinalRunScoreObjects2= [];
gdjs.Start_95countdownCode.GDFinalRunScoreObjects3= [];
gdjs.Start_95countdownCode.GDCoins_9595textObjects1= [];
gdjs.Start_95countdownCode.GDCoins_9595textObjects2= [];
gdjs.Start_95countdownCode.GDCoins_9595textObjects3= [];
gdjs.Start_95countdownCode.GDRunScore_9595textObjects1= [];
gdjs.Start_95countdownCode.GDRunScore_9595textObjects2= [];
gdjs.Start_95countdownCode.GDRunScore_9595textObjects3= [];
gdjs.Start_95countdownCode.GDfloor2Objects1= [];
gdjs.Start_95countdownCode.GDfloor2Objects2= [];
gdjs.Start_95countdownCode.GDfloor2Objects3= [];


gdjs.Start_95countdownCode.asyncCallback15835852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_95countdownCode.localVariables);
gdjs.Start_95countdownCode.localVariables.length = 0;
}
gdjs.Start_95countdownCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_95countdownCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Start_95countdownCode.asyncCallback15835852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Start_95countdownCode.asyncCallback15839228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_95countdownCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene1", false);
}gdjs.Start_95countdownCode.localVariables.length = 0;
}
gdjs.Start_95countdownCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_95countdownCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Start_95countdownCode.asyncCallback15839228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Start_95countdownCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CountingDown");
}{gdjs.evtTools.sound.playSound(runtimeScene, "race-start-beeps-125125.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Start_95countdownCode.GDTimerTextObjects2);
{for(var i = 0, len = gdjs.Start_95countdownCode.GDTimerTextObjects2.length ;i < len;++i) {
    gdjs.Start_95countdownCode.GDTimerTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CountingDown") - 3))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CountingDown") >= 2.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Start_95countdownCode.GDTimerTextObjects2);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CountingDown");
}{for(var i = 0, len = gdjs.Start_95countdownCode.GDTimerTextObjects2.length ;i < len;++i) {
    gdjs.Start_95countdownCode.GDTimerTextObjects2[i].getBehavior("Text").setText("GO");
}
}
{ //Subevents
gdjs.Start_95countdownCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Start_95countdownCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "uid", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtTools.firebaseTools.firestore.getDocument("UserInfo", "playerUID", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.Start_95countdownCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Start_95countdownCode.eventsList2(runtimeScene);
}


};

gdjs.Start_95countdownCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95countdownCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Start_95countdownCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_95countdownCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_95countdownCode.GDNewSpriteObjects3.length = 0;
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Start_95countdownCode.GDTimerTextObjects1.length = 0;
gdjs.Start_95countdownCode.GDTimerTextObjects2.length = 0;
gdjs.Start_95countdownCode.GDTimerTextObjects3.length = 0;
gdjs.Start_95countdownCode.GDButton_9595AObjects1.length = 0;
gdjs.Start_95countdownCode.GDButton_9595AObjects2.length = 0;
gdjs.Start_95countdownCode.GDButton_9595AObjects3.length = 0;
gdjs.Start_95countdownCode.GDB_9595buttonObjects1.length = 0;
gdjs.Start_95countdownCode.GDB_9595buttonObjects2.length = 0;
gdjs.Start_95countdownCode.GDB_9595buttonObjects3.length = 0;
gdjs.Start_95countdownCode.GDCoinScoreObjects1.length = 0;
gdjs.Start_95countdownCode.GDCoinScoreObjects2.length = 0;
gdjs.Start_95countdownCode.GDCoinScoreObjects3.length = 0;
gdjs.Start_95countdownCode.GDScoreRunObjects1.length = 0;
gdjs.Start_95countdownCode.GDScoreRunObjects2.length = 0;
gdjs.Start_95countdownCode.GDScoreRunObjects3.length = 0;
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects1.length = 0;
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects2.length = 0;
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects3.length = 0;
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects1.length = 0;
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects2.length = 0;
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects3.length = 0;
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects1.length = 0;
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects2.length = 0;
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects3.length = 0;
gdjs.Start_95countdownCode.GDGameOverObjects1.length = 0;
gdjs.Start_95countdownCode.GDGameOverObjects2.length = 0;
gdjs.Start_95countdownCode.GDGameOverObjects3.length = 0;
gdjs.Start_95countdownCode.GDScrollGroundStillObjects1.length = 0;
gdjs.Start_95countdownCode.GDScrollGroundStillObjects2.length = 0;
gdjs.Start_95countdownCode.GDScrollGroundStillObjects3.length = 0;
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects1.length = 0;
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects2.length = 0;
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects3.length = 0;
gdjs.Start_95countdownCode.GDFinalRunScoreObjects1.length = 0;
gdjs.Start_95countdownCode.GDFinalRunScoreObjects2.length = 0;
gdjs.Start_95countdownCode.GDFinalRunScoreObjects3.length = 0;
gdjs.Start_95countdownCode.GDCoins_9595textObjects1.length = 0;
gdjs.Start_95countdownCode.GDCoins_9595textObjects2.length = 0;
gdjs.Start_95countdownCode.GDCoins_9595textObjects3.length = 0;
gdjs.Start_95countdownCode.GDRunScore_9595textObjects1.length = 0;
gdjs.Start_95countdownCode.GDRunScore_9595textObjects2.length = 0;
gdjs.Start_95countdownCode.GDRunScore_9595textObjects3.length = 0;
gdjs.Start_95countdownCode.GDfloor2Objects1.length = 0;
gdjs.Start_95countdownCode.GDfloor2Objects2.length = 0;
gdjs.Start_95countdownCode.GDfloor2Objects3.length = 0;

gdjs.Start_95countdownCode.eventsList3(runtimeScene);
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Start_95countdownCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Start_95countdownCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_95countdownCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_95countdownCode.GDNewSpriteObjects3.length = 0;
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Start_95countdownCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Start_95countdownCode.GDTimerTextObjects1.length = 0;
gdjs.Start_95countdownCode.GDTimerTextObjects2.length = 0;
gdjs.Start_95countdownCode.GDTimerTextObjects3.length = 0;
gdjs.Start_95countdownCode.GDButton_9595AObjects1.length = 0;
gdjs.Start_95countdownCode.GDButton_9595AObjects2.length = 0;
gdjs.Start_95countdownCode.GDButton_9595AObjects3.length = 0;
gdjs.Start_95countdownCode.GDB_9595buttonObjects1.length = 0;
gdjs.Start_95countdownCode.GDB_9595buttonObjects2.length = 0;
gdjs.Start_95countdownCode.GDB_9595buttonObjects3.length = 0;
gdjs.Start_95countdownCode.GDCoinScoreObjects1.length = 0;
gdjs.Start_95countdownCode.GDCoinScoreObjects2.length = 0;
gdjs.Start_95countdownCode.GDCoinScoreObjects3.length = 0;
gdjs.Start_95countdownCode.GDScoreRunObjects1.length = 0;
gdjs.Start_95countdownCode.GDScoreRunObjects2.length = 0;
gdjs.Start_95countdownCode.GDScoreRunObjects3.length = 0;
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects1.length = 0;
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects2.length = 0;
gdjs.Start_95countdownCode.GDgameboy_9595joystickObjects3.length = 0;
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects1.length = 0;
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects2.length = 0;
gdjs.Start_95countdownCode.GDSave_9595ButtonObjects3.length = 0;
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects1.length = 0;
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects2.length = 0;
gdjs.Start_95countdownCode.GDRestart_9595ButtonObjects3.length = 0;
gdjs.Start_95countdownCode.GDGameOverObjects1.length = 0;
gdjs.Start_95countdownCode.GDGameOverObjects2.length = 0;
gdjs.Start_95countdownCode.GDGameOverObjects3.length = 0;
gdjs.Start_95countdownCode.GDScrollGroundStillObjects1.length = 0;
gdjs.Start_95countdownCode.GDScrollGroundStillObjects2.length = 0;
gdjs.Start_95countdownCode.GDScrollGroundStillObjects3.length = 0;
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects1.length = 0;
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects2.length = 0;
gdjs.Start_95countdownCode.GDFinalCoinScoreObjects3.length = 0;
gdjs.Start_95countdownCode.GDFinalRunScoreObjects1.length = 0;
gdjs.Start_95countdownCode.GDFinalRunScoreObjects2.length = 0;
gdjs.Start_95countdownCode.GDFinalRunScoreObjects3.length = 0;
gdjs.Start_95countdownCode.GDCoins_9595textObjects1.length = 0;
gdjs.Start_95countdownCode.GDCoins_9595textObjects2.length = 0;
gdjs.Start_95countdownCode.GDCoins_9595textObjects3.length = 0;
gdjs.Start_95countdownCode.GDRunScore_9595textObjects1.length = 0;
gdjs.Start_95countdownCode.GDRunScore_9595textObjects2.length = 0;
gdjs.Start_95countdownCode.GDRunScore_9595textObjects3.length = 0;
gdjs.Start_95countdownCode.GDfloor2Objects1.length = 0;
gdjs.Start_95countdownCode.GDfloor2Objects2.length = 0;
gdjs.Start_95countdownCode.GDfloor2Objects3.length = 0;


return;

}

gdjs['Start_95countdownCode'] = gdjs.Start_95countdownCode;
