﻿
function Open_Flow(Item)
{
   let Paginator;
   let page= Aliases.browser.pageSapiensDecision2;
    if(Aliases.browser.pageSapiensDecision.FindElement("//p-paginator//div").VisibleOnScreen)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    Log.Message(Paginator);
    Delay(1000)
    var ItemCount;
    var flag = 0;
    var ItemName = Item
    var hasNext = true

  
do{

    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-expandable-selectable-list-item//i[contains(@class,'icon-flow')]/following-sibling::div/a");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          Log.Message(ItemCount.length)
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-expandable-selectable-list-item["+j+"]//i[contains(@class,'icon-flow')]/following-sibling::div/a");
          Log.Message(HighlightedItemName.textContent)
          //If the Item Name matches 
          if(HighlightedItemName.textContent == Item )
          {          
                 HighlightedItemName.click();
                 page.WaitElement(page.canvas,30000)
                 //Aliases.browser.pageSapiensDecision2.WaitElement(Aliases.browser.pageSapiensDecision2.FindElement("//canvas"),20000)
                 flag =1;    
           }
           if(flag == 1)
           {
              break;
           }
      }
      if(flag ==1)
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

//module.exports.Open_Flow = Open_Flow;