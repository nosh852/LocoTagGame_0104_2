gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDWarningObjects1= [];
gdjs.Game_32OverCode.GDWarningObjects2= [];
gdjs.Game_32OverCode.GDButton_9595AObjects1= [];
gdjs.Game_32OverCode.GDButton_9595AObjects2= [];
gdjs.Game_32OverCode.GDB_9595buttonObjects1= [];
gdjs.Game_32OverCode.GDB_9595buttonObjects2= [];
gdjs.Game_32OverCode.GDCoinScoreObjects1= [];
gdjs.Game_32OverCode.GDCoinScoreObjects2= [];
gdjs.Game_32OverCode.GDScoreRunObjects1= [];
gdjs.Game_32OverCode.GDScoreRunObjects2= [];
gdjs.Game_32OverCode.GDgameboy_9595joystickObjects1= [];
gdjs.Game_32OverCode.GDgameboy_9595joystickObjects2= [];
gdjs.Game_32OverCode.GDSave_9595ButtonObjects1= [];
gdjs.Game_32OverCode.GDSave_9595ButtonObjects2= [];
gdjs.Game_32OverCode.GDRestart_9595ButtonObjects1= [];
gdjs.Game_32OverCode.GDRestart_9595ButtonObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDScrollGroundStillObjects1= [];
gdjs.Game_32OverCode.GDScrollGroundStillObjects2= [];
gdjs.Game_32OverCode.GDFinalCoinScoreObjects1= [];
gdjs.Game_32OverCode.GDFinalCoinScoreObjects2= [];
gdjs.Game_32OverCode.GDFinalRunScoreObjects1= [];
gdjs.Game_32OverCode.GDFinalRunScoreObjects2= [];
gdjs.Game_32OverCode.GDCoins_9595textObjects1= [];
gdjs.Game_32OverCode.GDCoins_9595textObjects2= [];
gdjs.Game_32OverCode.GDRunScore_9595textObjects1= [];
gdjs.Game_32OverCode.GDRunScore_9595textObjects2= [];
gdjs.Game_32OverCode.GDfloor2Objects1= [];
gdjs.Game_32OverCode.GDfloor2Objects2= [];


gdjs.Game_32OverCode.asyncCallback15814428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32OverCode.localVariables);
{gdjs.evtTools.firebaseTools.firestore.writeField("UserInfo", gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "uid", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "coinScore", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.VariablesContainer.badVariable, true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("UserInfo", gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "uid", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "runScore", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), gdjs.VariablesContainer.badVariable, true);
}gdjs.Game_32OverCode.localVariables.length = 0;
}
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32OverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_32OverCode.asyncCallback15814428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15789052);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalCoinScore"), gdjs.Game_32OverCode.GDFinalCoinScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("FinalRunScore"), gdjs.Game_32OverCode.GDFinalRunScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDFinalCoinScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDFinalCoinScoreObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDFinalRunScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDFinalRunScoreObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDWarningObjects1.length = 0;
gdjs.Game_32OverCode.GDWarningObjects2.length = 0;
gdjs.Game_32OverCode.GDButton_9595AObjects1.length = 0;
gdjs.Game_32OverCode.GDButton_9595AObjects2.length = 0;
gdjs.Game_32OverCode.GDB_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDB_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDCoinScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDCoinScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreRunObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreRunObjects2.length = 0;
gdjs.Game_32OverCode.GDgameboy_9595joystickObjects1.length = 0;
gdjs.Game_32OverCode.GDgameboy_9595joystickObjects2.length = 0;
gdjs.Game_32OverCode.GDSave_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDSave_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDRestart_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRestart_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDScrollGroundStillObjects1.length = 0;
gdjs.Game_32OverCode.GDScrollGroundStillObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalCoinScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalCoinScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalRunScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalRunScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDCoins_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDCoins_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDRunScore_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDRunScore_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDfloor2Objects1.length = 0;
gdjs.Game_32OverCode.GDfloor2Objects2.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
gdjs.Game_32OverCode.GDWarningObjects1.length = 0;
gdjs.Game_32OverCode.GDWarningObjects2.length = 0;
gdjs.Game_32OverCode.GDButton_9595AObjects1.length = 0;
gdjs.Game_32OverCode.GDButton_9595AObjects2.length = 0;
gdjs.Game_32OverCode.GDB_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDB_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDCoinScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDCoinScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreRunObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreRunObjects2.length = 0;
gdjs.Game_32OverCode.GDgameboy_9595joystickObjects1.length = 0;
gdjs.Game_32OverCode.GDgameboy_9595joystickObjects2.length = 0;
gdjs.Game_32OverCode.GDSave_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDSave_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDRestart_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRestart_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDScrollGroundStillObjects1.length = 0;
gdjs.Game_32OverCode.GDScrollGroundStillObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalCoinScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalCoinScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalRunScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalRunScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDCoins_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDCoins_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDRunScore_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDRunScore_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDfloor2Objects1.length = 0;
gdjs.Game_32OverCode.GDfloor2Objects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
