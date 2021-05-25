﻿function Model_Definition_Unfreeze_Version()
{
    let Version = "1.0.0_Copy_#1_Copy_#1";
    
    let VersionTab = Aliases.browser.pageSapiensDecision2.linkVersions.textnode8;  
    if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
    {
      VersionTab.click();
    }
    
    let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
    Log.Message(VersionCount.length);
    
    for(let i = 1; i <=VersionCount.length; i++)
    {
      let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ i +"]//td[1]/div/div[1]");
      Log.Message(VersionName.textContent);
      
      if(VersionName.textContent == Version)
      {              
          VersionName.HoverMouse();
          //Click on Ellipses
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+i+"]//td[3]//dcn-button-menu").HoverMouse();
         
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+i+"]//td[3]//dcn-button-menu").click();
          
          Aliases.browser.pageSapiensDecision2.FindElement("//body//div[contains(@style,'display: block')]//ul//span[text()='Unfreeze']").click() 
          
          //Delay(500);
          
          if(Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr[" + i +"]//td[2]//i[contains(@class,'icon-frozen')]").Exists == true)
          {
            Log.Message("The Version " + Version + " is Unfreezed");
            
            break;
          }
         
      }      
        
    }   
    
}