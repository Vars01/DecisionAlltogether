function Add_New_Release_Project(Create, ProjectName)
{
//    let Create = "Yes";
  
    Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'add-btn')]").click();
  
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Create New Project");
    
    Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']").SetText(ProjectName);
    
    if(Create == "Yes")
    {
//      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form7.buttonOk, "Enabled", cmpEqual, true);
        Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'spec-confirmed')]").click();
      
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName, "Text", cmpEqual, ProjectName);
    }
    else
    {
        Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'spec-cancelled')]").click();
    }
  

  
  
}