﻿function GetTextBlockCustom(anObject, aPattern)
{
  // Recognize the text the specified onscreen object shows
  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 0)
  {
    // Iterate through text blocks
    // until the one that matches the regular expression is found is found
    for (var i = 0; i < obj.BlockCount; i ++)
    {
      var re = new RegExp(aPattern);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      if (Matches != null)
      {
        // Return the first block that matches the regular expression
        return obj.Block(i+1);
      }

    }
  // If no text block matches the specified regular expression,
  // return null
  return null;
  }
  else
    return null;

}

function EnterTextInFacttypetextbox(FacttypeName)
{
  let page= Aliases.browser.pageSapiensDecision
  page.FindElement("//p-autocomplete//input").SetText(FacttypeName);
  page.Keys("[Enter]")
}
function Main(RFname,FacttypeName)
{
  // The search condition (a regular expression)
//  var RFname = "Condo Project Local Jurisdiction Document Issuance Indicator";

  // Get an onscreen object
  var obj = Aliases.browser.pageSapiensDecision2.canvas;

  // Get the text block that matches the search condition
  var b = GetTextBlockCustom(obj, RFname);
  if (b != null)
  {
    // Simulate user actions on the text block
    b.Click();
  
  }
  EnterTextInFacttypetextbox(FacttypeName);

}