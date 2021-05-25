﻿function ImportErrorsTabVerifications(FactTypeNameparameter)
{
  let ErrorFactTypesList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@ng-reflect-header,'Import Errors (')]//p-listbox//ul//li");
           
  for (var k = 1; k<=ErrorFactTypesList.length; k++)
  {
                  
  let ErrorFactType = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Import Errors (')]//p-listbox//ul//li["+k+"]");
  
  aqObject.CheckProperty(ErrorFactType, "textContent", cmpEqual, " "+FactTypeNameparameter+" ");
                 
  let ErrorMessage = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Import Errors (')]//dcn-bullet//span");
                                
  Log.Message(ErrorFactType.textContent + " Fact Type cannot be imported due to following error Message "+ ErrorMessage.textContent);
           
   }
}
module.exports.ImportErrorsTabVerifications = ImportErrorsTabVerifications;