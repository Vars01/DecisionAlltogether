function Create_Revision_Tasks()
{
  Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Create Revision Task')]").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Revision Task");
  
  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'+Add')]").Click();
    
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Add Assets to the Revision Task");
  
  //aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnode2.textnodeSource, "className", contains, "ui-state-default ui-corner-top ui-tabview-selected ui-state-active ng-star-inserted");
 // ui-state-default ui-corner-top ng-star-inserted
 // ui-state-default ui-corner-top ng-star-inserted ui-tabview-selected ui-state-active
 
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.textnode6.textnode7, "className", cmpContains, "ui-tabview-selected");
  
  
}
