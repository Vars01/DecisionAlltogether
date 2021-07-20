function Item_Availability(Item)
{
  
  Log.Message(Item);
  //let Item = "TG1626166517284" ;  
  let flag = 0;

  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
  //Iterate through all the rows and finding the desired Task
  for(var j = 1; j <= ItemCount.length ; j++)
  {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");
          Log.Message(HighlightedItemName.textContent);
          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item)
          {          
                 //HighlightedItemName.click();
                flag =1;
                Log.Checkpoint("Item is available");
                break;   
           }     
     
  }
 
  if(flag == 0)
  {
    Log.Checkpoint("Item is not found");
  }  
  
}
module.exports.Item_Availability = Item_Availability;