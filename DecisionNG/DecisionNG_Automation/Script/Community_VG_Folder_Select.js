﻿function Community_VG_Folder_Select(Community_VG_Folder_Name)
{
  let Community = Aliases.browser.pageSapiensDecision2.FindElement("//*[@role='treeitem']//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]")
  Community.Click();
  
}
module.exports.Community_VG_Folder_Select = Community_VG_Folder_Select;