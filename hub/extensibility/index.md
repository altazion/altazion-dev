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

Depuis la version 3.0, les modules Hub sont uniquement des composants développés en .net standard 2.0 et supérieur. Pour créer un nouveau module, créez tout simplement un projet assembly .net standard 2.0.

Dans Visual Studio, vous pouvez créer un projet de "Bibilothèque de classe .net standard 2.0".

![visual studio](index-visualstudio-hubproject.PNG)

Si vous utilisez un autre IDE, la commande 

```powershell
dotnet new classlib -f netstandard2.0
```

vous permettra de créer le projet.

![dotnet new classlig](index-dotnetnew-hubproject.PNG)

### Réferencer les nugets

Vous devrez ensuite ajouter les nugets Altazion Hub à votre projet.

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

## Ajouter un service API

### Implémenter l'interface supplémentaire

### Ajouter le(s) controleur(s)


## Implémenter une fonctionnalité spécifique

|Zone|Fonctionnalité|
|---|---|
|CRM|[Base données clients](crm/ICustomersRepositoryExt.md)