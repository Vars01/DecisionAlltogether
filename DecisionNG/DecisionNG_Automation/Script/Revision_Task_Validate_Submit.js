﻿var RevisionTasks_Buttons = require("RevisionTasks_Buttons");
function Revision_Task_Validate_Submit()
{
  RevisionTasks_Buttons.Assets_Validate().Click();
    
  RevisionTasks_Buttons.Assets_Validate().WaitProperty("Enabled", true, 100000);
  
  if(Aliases.browser.pageSapiensDecision2.panel35.Exists == true)
  {
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "contentText", cmpEqual, "Revision Task validation completed successfully");

    if(Aliases.browser.pageSapiensDecision.panel16.textContent == "Revision Task validation completed successfully")
    {
      Aliases.browser.pageSapiensDecision2.panel35.Click();
      
      //Submit the Pull Request
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Submit']").Click();
      
      //User should be navigated to the Revision Page
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Revision");
  
//     Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
//     Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Discard']").HoverMouse();
    }
    else
    {
      Log.Error("Revision Task is displayed with an error");
    }
   
  }
  else
  {
    Log.Error("Validation didn't happen");
  }
  
}