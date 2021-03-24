# Extensibilité Altazion Hub

## Développer un module

``` csharp
using Altazion.Hub.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Altazion.Hub.Modules.Exemple
{
    public class ExempleModule : IAltazionHubModule
    {
        bool IAltazionHubModule.Execute()
        {
            return false;
        }

        void IAltazionHubModule.Init(IAltazionModuleHost host, string init)
        {
            
        }

        bool IAltazionHubModule.Poll()
        {
            return false;
        }

        public string ExecuteCommand(string command, string parameters)
        {
            return "OK";
        }
    }
}
```

## Implémenter une fonctionnalité spécifique

|Zone|Fonctionnalité|
|---|---|
|CRM|[Base données clients](crm/ICustomersRepositoryExt.md)