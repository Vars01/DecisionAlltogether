﻿function Test()
{
//      let FactType = "Test56 [V1.0]";
//      let RemoveFT = "Yes";          
//      let FactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
//  
//      for(var i = 1; i <= FactTypeList.length ; i++)
//      {
//        let FactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[1]");
////      Log.Message(FactTypeName.textContent)
//        if(FactTypeName.textContent.trim() == FactType)
//        {  
//          let Status = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[3]").textContent;
//          let Unused = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[7]").textContent;
//      
//          Log.Message(Status)
//          Log.Message(Unused)
//          
//          
//          if(Status == "DRAFT" && Unused == "Unused")
//          {        
//        
//            let Button = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[10]/div/span").childElementCount;
//            Log.Message(Button);
//            if(Button > 0)
//            {
//                Log.Checkpoint("Remove Button Exists")
//                Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[10]").Click();
//        
//                aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeAreYouSureYouWantToRemov, "contentText", cmpEqual, "Are you sure you want to remove this Fact Type from this task?");
//        
//                if(RemoveFT == "Yes")
//                {
//                    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//                              
//                }
//                else
//                {
//                    Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
//                }
//            }
//            else
//            {
//              Log.Error("Remove Button is not available for "+ FactTypeName);
//            }
//            break;
//          }
//          else
//          {
//            let Button = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[10]/div/span").childElementCount;
//            Log.Message(Button)
//            if(Button >0)
//            {
//              Log.Error("Button Exists");
//            }
//            else
//            {
//              Log.Checkpoint("Remove button is not available");
//            }
//            break;
//        
//          }
//      
//        }
//  }

}

function get4DigitRandomInt()
{
      var min = 1000, max = 9999;
      return Math.round(Math.random()*(max-min)+min);
}



