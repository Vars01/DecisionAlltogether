﻿var Open_SingleItem_MultipleRows = require("Open_SingleItem_MultipleRows");
function ReleaseProjects_Open_Branches(BranchName)
{
  
//  Click & Open - Common Utilities
//    let BranchName = "Main";
    Open_SingleItem_MultipleRows.Open_SingleItem_MultipleRows(BranchName);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Revision");
        
}

function Edit_Branch()
{
  
  //i[@class='icon-edit']
}

function Retire_Branch()
{
  
}


