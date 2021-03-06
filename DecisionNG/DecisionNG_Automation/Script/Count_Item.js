function Count_Item()
{
    let Paginator;
    
    if(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
    Log.Message(Paginator);
    
    let hasNext = "true";
  
    let TotalCount = 0;
  
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
          Delay(200);
          
          TotalCount = TotalCount + ItemCount.length;
          
          if(Paginator == "Yes")
          {
            if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
    if(Paginator == "Yes")
    {
      if(!Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'ui-paginator-first')]").getAttribute("class").includes("ui-state-disabled"))
      {    
        Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'ui-paginator-first')]").click(); 
      }    
    }
      
    Log.Message(TotalCount);
    
    Project.Variables.CommonTotalCount = TotalCount;

}
module.exports.Count_Item = Count_Item;