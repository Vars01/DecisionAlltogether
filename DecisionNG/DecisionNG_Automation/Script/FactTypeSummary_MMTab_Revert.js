function FactTypeSummary_MMTab_Revert(Verify_Enabled)
{
   let page= Aliases.browser.pageSapiensDecision2;
  let Revertlink= page.FindElement(" //*[contains(@style,'visibility: visible; display: block')]//*[text()='Revert']");
  let RevertlinkClass=Revertlink.Parent.getAttribute('class');
  Log.Message(RevertlinkClass)
  if(RevertlinkClass == "ui-menuitem-link ui-corner-all ui-state-disabled ng-star-inserted")
  {
    if(Verify_Enabled == "Disabled")
    {
      //Posts an information message to the test log.
      Log.Checkpoint("Revert is Disabled", "");
    }
    else
    {
      //Posts an error to the test log.
      Log.Error("Revert is Enabled", "");
    }
    //Clicks the 'linkRevert' link.
    Revertlink.Click();
  }
  if(RevertlinkClass == "ui-menuitem-link ui-corner-all ng-star-inserted")
  {
    //Clicks the 'linkRevert' link.
    Revertlink.Click();
    //Posts an information message to the test log.
    Log.Message("Revert is Enabled", "");
  }
}