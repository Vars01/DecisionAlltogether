function SelectModelDefinitionVersion(ModelDefinitionVersion)
{
        let ModelDefinitionVersion_list=Aliases.browser.pageSapiensDecision.FindElements("//*[@class='dcn-datagrid model-definition-versions-list']//tbody//tr//td[1]");
        Log.Message(ModelDefinitionVersion_list.length)
        for(let i=0;i<ModelDefinitionVersion_list.length;i++)
        {
            
            let ModelDefinition_Text=ModelDefinitionVersion_list[i].textContent;
            //Log.Message("Model Definition Name is "+ModelDefinition_Text)
            if(ModelDefinition_Text == ModelDefinitionVersion)
            {
              //ModelDefinitionVersion_list[i].click();
              Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-definition-versions-list']//tbody//tr["+(i+1)+"]//*[@class='icon-more_menu spec-icon']").HoverMouse()
              Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-definition-versions-list']//tbody//tr["+(i+1)+"]//*[@class='icon-more_menu spec-icon']").click();
              Log.Message("Clicked on ellipsis")
              break;
            }
            
          if(i == (ModelDefinitionVersion_list.length-1))
            {
              Log.Error("Option doesn't exists/Wrong Input Data"); 
              ModelDefinitionVersion_list[0].click();
              break;
            }

 
  
        }




}