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

### Créer le projet

=> .net standard 2.0
=> Bibliothèque de classe

### Réferencer les nugets



### Implémenter l'interface

### Ecrire le fichier manifeste

### Packager et déployer

#### Pour Docker

=> se baser sur l'image [altazion/hub-host](https://hub.docker.com/repository/docker/altazion/hub-host)
=> copier le contenu de votre module dans /app/bin/ de cette image
=> créer votre docker file 

```text
FROM altazion/hub-host:latest AS base
WORKDIR /app
COPY "./" /app/bin/
ENTRYPOINT ["dotnet", "Altazion.Hub.Host.dll"]
```

#### Pour service Windows ou SystemD linux

## Implémenter une fonctionnalité spécifique

|Zone|Fonctionnalité|
|---|---|
|CRM|[Base données clients](crm/ICustomersRepositoryExt.md)