function Open_TestGroup(Item)
{
 // let Item = TGName;
  let flag = 0;

  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
  //Iterate through all the rows and finding the desired Task
  for(var j = 1; j <= ItemCount.length ; j++)
  {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item)
          {      
                  flag =1;
                  Log.Checkpoint("Test Group is Found");
                  HighlightedItemName.click();
                  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeTg1626167000507, "contentText", cmpEqual, Item);
                  break;   
           }     
     
  }
 
  if(flag == 0)
  {
    Log.Error("Test Group Not Found");
  }
  
}
module.exports.Open_TestGroup = Open_TestGroup;