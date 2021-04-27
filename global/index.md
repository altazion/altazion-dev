# Etendre la solution

Les possibilités d'extension de la solution sont très différentes selon le fait que vous utilisiez nos outils en mode SaaS (hébergés par nos soins) ou OnPremise (installés sur vos serveurs)

## SaaS

Si vous utilisez notre solution en mode SaaS, vous ne pouvez pas étendre directement nos outils en injectant votre code directement sur nos serveurs. 

Vous pouvez toutefois intégrer vos personnalisation en développant des plugins que vous hébergerez sur votre infrastructure et qui pourront étendre l'un des points de contributions de nos solutions.

Vous pouvez, par exemple, écrire un [gestionnaire d'évènement de type Webhook](../hub/extensibility/index.md) pour réagir à la création d'un nouveau client et synchroniser ses informations avec votre système CRM ; créer un template pour Signage ; ou encore écrire une page d'extension pour Office.

Consultez la description de chaque application pour en connaitre les points de contribution et méchanismes d'extension.

## On Premise

A la différence du mode SaaS/Cloud, il est possible d'ajouter des personnalisations "codées" dans notre solution Cloud. En complément des solutions d'extensibilité utilisables en mode Cloud, il est aussi possible d'écrire des extensions sous forme de classes .net et d'utiliser [l'inversion de contrôle et l'injection de dépendance](https://medium.com/ividata-link/c-linjection-de-dépendances-di-et-l-inversion-de-contrôle-ioc-48dbe76cff6b) pour insérer du code personnalisé dans l'application. 

Ce mode d'extensibilité vous permet une plus grande liberté, mais vous demandera, aussi, de connaître plus en détail la solution : si votre traitement est incorrect, vous pourrez engendrer erreurs et instabilité.

Si vous n'êtes pas familier avec l'inversion de contrôle, le principe en est assez simple : dans de très nombreux endroits de notre solution, nous avons mis en place la possibilité pour vous d'écrire un "plug-in", sous la forme d'une interface à implémenter, pour que vous puissiez remplacer le comportement standard de la solution. 

Par exemple, lors de l'ajout au panier d'un article dans le module Commerce, nous effectuons une vérification de disponibilité du produit pour savoir quelle quantité maximale peut être commandé. Ce traitement a un comportement par défaut qui effectue une vérification dans la base de données. Vous pouvez toutefois changer ce comportement, en implémentant l'interface :

```csharp
    IPanierStockCheck
```

Par exemple :

```csharp
    [Export(typeof(IPanierStockCheck))]
    public class MaVerifStock : IPanierStockCheck
    {
        bool IPanierStockCheck.CheckStock(Guid art_guid, 
            ref decimal quantite, Guid? magasin, string typeCommandable)
        {
            var stockProduit = ApiModuleStock.GetStock(art_guid, magasinGuid);
            if(stockProduit.Front.Quantite >= quantite)
                return true;
            else 
            {
                // on ajuste la quantité commandable
                quantite = stockProduit.Front.Quantite; 
                return false;
            }
        }
    }
```

Quelques pointeurs pour comprendre le fonctionnement général de l'inversion de contrôle et son implémentation en technologies .net :

- https://medium.com/ividata-link/c-linjection-de-dépendances-di-et-l-inversion-de-contrôle-ioc-48dbe76cff6b
- https://docs.microsoft.com/en-us/dotnet/framework/mef/

### SDK

Bien entendu, pour pouvoir implémenter l'interface `IPanierStockCheck`, il vous faut d'abord référencer sa définition. Nous mettons à disposition des développeurs un SDK, déployé sous forme de nuget herbergés sur Github.

> [!WARNING]
> Pour l'instant, ce SDK est uniquement disponible sur demande, après signature d'un NDA. Nous vous invitons à nous contacter via l'adresse se trouvant sur le profil d'altazion : https://github.com/altazion.
> Une fois l'accès accordé, vous pourrez ajouter la source de nuget en suivant le procédure ci-dessous.

Vous aurez besoin de vous connecter à un flux de package Github. Pour cela, le plus simple est de créer un token PAT ayant le droit `read:packages`, puis d'ajouter l'url correspondant à notre organisation. [Pour plus de détail, suivez ce guide détaillé](use-github-packages.md)

En complément des packages nugets vous permettant de développer, vous trouverez dans notre SDK :

- la documentation des classes métier qui composent notre solution
- le descriptif de la base de données.

### Déployer

Une fois l'interface implémentée, ajoutez une balise d'export signalant qu'elle doit être utilisée, compilez puis déployez l'assembly correspondante dans le dossier d'extensibilité.

La solution possède deux paths "importants" en configuration OnPremise :

- le(s) dossier(s) où se trouvent installés les différents modules de l'application (en règle générale : %ProgramFiles%\simplement-e\apps\{nom du module})
- le dossier sous lequel sera regroupé toutes les informations de configuration, et les fichiers spécifique à l'instance de la solution (en règle générale %ALLUSERSPROFILE%\Cpoint\[e]).

Le dossier se trouvant dans %ALLUSERSPROFILE% permet de configurer et personnaliser l'application, là où le dossier se trouvant sous %Program Files% contient notre applicatif "éditeur".

Pour plus de renseignement sur la procédure de déploiement, vous pouvez vous référer à :

- pour l'installation d'une extension (ajout d'une fonctionnalité dans nos outils standard) : [consultez la procédure de build et de déploiement](build-extension-onprem.md)
- pour l'installation d'un développement spécifique (application complète utilisant notre SDK) : [la procédure de build et de déploiement est différente](build-specifique-onprem.md)

## Exemples

Vous pourrez trouver des exemples d'extensions sur notre github, dans la repository [altazion/onpremise-extensibility-samples](https://github.com/altazion/onpremise-extensibility-samples)