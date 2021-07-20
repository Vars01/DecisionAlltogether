var Count_Item = require("Count_Item");
function Generate_Test_Cases()
{
  let SelectAll = "Yes";
 // let SelectTestValues = "";
  
  if (Aliases.browser.pageSapiensDecision2.buttonGenerate.Enabled == true)
  {  
        Aliases.browser.pageSapiensDecision2.buttonGenerate.ClickButton();
    
        Delay(100);
    
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.form4.panel21, "contentText", cmpEqual, "Generate Test Cases");
    
        Aliases.browser.pageSapiensDecision2.form4.buttonGenerateTestValues.ClickButton();    
  
      
        if(Aliases.browser.pageSapiensDecision.form.buttonCancel.WaitProperty("Exists", true, 100000))
        {
      
          Aliases.browser.pageSapiensDecision2.form4.buttonSelectTestValues.ClickButton();
        
       
      
          if(SelectAll == "Yes")
          {
      
                let SelectAllcheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'multi-selectable-checkbox__header')]//*[contains(@class,'ui-chkbox-box')]");
                if(SelectAllcheckbox.getAttribute("class").includes("ui-state-active"))
            	  {
                  SelectAllcheckbox.click();
                  //NewFactTypecheckbox.click();
                  Log.Checkpoint("All Values are Selected"); 
                }             			          
                else
                {
                      SelectAllcheckbox.click();
                      Log.Message("Vaues are already Selected");
                }
      
          }      
          else if(SelectAll != "Yes")
          {
  //          var SelectTestValues = "NULL,Space"
            var SelectTestValue = SelectTestValues.split(',');
        
            for(var i = 0; i <=SelectTestValue.length ; i++ )
            {
          
              let SelectValues = Aliases.browser.pageSapiensDecision.FindElements("//dcn-multi-selectable-checkbox//ul//li");
          
              for(var j =1; j <=SelectValues.length ; j++)
              {
                if ((Aliases.browser.pageSapiensDecision.FindElement("//dcn-multi-selectable-checkbox//ul//li[" +j+"]").textContent).includes(SelectTestValue[i]))
                {
                   let SelectCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-multi-selectable-checkbox//ul//li[" +j+"]//div[contains(@class,'ui-chkbox-box')]");
                  if(SelectCheckbox.getAttribute("class").includes("ui-state-active"))
              	  {
                    //NewFactTypecheckbox.click();
                    Log.Checkpoint("All Values are Selected"); 
                  }             			          
                  else
                  {
                        SelectCheckbox.click();
                        Log.Message("Vaues are already Selected");
                  }
                }
            
          
              }
        
            }
        
          }  
  
          Aliases.browser.pageSapiensDecision2.buttonApply.ClickButton();  
        }
      
        let messages = Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dialogbody']//*[contains(@class,'u-margin-left--full')]").textContent;
        let msg = messages.split(" ");
        Log.Message(msg[1]);

        let numberOfTestCasesGenerated = 2;
       
        Aliases.browser.pageSapiensDecision.FindElement("//*[@name='tc-number']").SetText(numberOfTestCasesGenerated);
        
          
        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  //
  //    Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();

        Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]"),10000);
        
        Delay(500);
      
        Count_Item.Count_Item();
      
        Log.Message(Project.Variables.CommonTotalCount);
           
        if(Project.Variables.CommonTotalCount == numberOfTestCasesGenerated)
        {
          Log.Message("Pass")
        }
        else
        {
          Log.Error("Fail")
        }

      
          
    
      }
      else
      {
        Log.Error("Generate Button is disabled");
      }
  
      
 
}


