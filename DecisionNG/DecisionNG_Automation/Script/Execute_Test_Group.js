function Execute_Test_Group()
{

   if(Aliases.browser.pageSapiensDecision2.buttonExecuteGroup.Enabled == true)
   {

      Aliases.browser.pageSapiensDecision2.buttonExecuteGroup.ClickButton();
  
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel24, "className", cmpEqual, "test-case-progress-bar");
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel25, "className", cmpEqual, "ui-progressbar-label ng-star-inserted");
   
    //  Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      Delay(500)
      Log.Message(Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[4]").textContent);
  
      if(Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[4]").textContent == "Executed")
      {
        Log.Message("Test Cases are excuted");
      }
      else
      {
        Log.Error("Test Cases are not executed")
      }
      
    }
    else
    {
      Log.Error("Button is disabled")
    }
 
  
}
