function Tasks_MyTasks()
{
    let Paginator;
    
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator//div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    Log.Message(Paginator);
    var ItemCount;
    var flag = 0;
    var TaskName = "NewTask";
    var CommunityName = " Sumant";
    hasNext = true;
  
    do
    {     
      //Row Counts in one page
      ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
      //Iterate through all the rows and finding the desired Task
      for(var j = 1; j <= ItemCount.length ; j++)
      {
      
        var HighlightedTaskName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]");
        var HighlightedCommunityName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+ j + "]/td[2]");
    
        //If the Task Name matches 
        if(HighlightedTaskName.textContent == TaskName )
        {
            //Community Name also Matches click 
            if(HighlightedCommunityName.textContent == CommunityName)
            {
               HighlightedTaskName.click();
               flag =1;
              // Log.Message("Pass");
            }
                    
        }         
      }
       if(flag == 1)
        {
        
          break;
        }
        
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
        
        
      }while (hasNext==true)

}
