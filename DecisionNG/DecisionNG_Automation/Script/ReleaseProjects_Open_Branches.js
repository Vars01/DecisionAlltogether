function ReleaseProjects_Open_Branches()
{
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeBranches, "contentText", cmpEqual, "Branches");
  
  Aliases.browser.pageSapiensDecision2.textnodeBranches.Click();
//  Click & Open - Common Utilities
//  Log.Message(Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr[1]//td[1]").textContent);
  
    Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr[1]//td[1]").Click();
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Revision");
    
    
    
}
