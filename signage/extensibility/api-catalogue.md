# API Catalogue

## Compléter les informations produits

Vous pouvez ajouter ou modifier des informations en créant un composants MEF implémentant l'interface `CPointSoftware.Equihira.Extensibility.IProvideMoreProductData` (dans le nuget altazion-signage) :

```csharp
    public interface IProvideMoreProductData
    {
        void AddInfoToDetails(int rjs_id, int sit_pk, ArticlePhygitalDetail details);
        void AddInfoToList(int rjs_id, int sit_pk, ArticlePhygitalBase[] items);
    }
```

par exemple :

```csharp
    public class AddInfoPromo : IProvideMoreProductData
    {
        public void AddInfoToDetails(int rjs_id, int sit_pk, ArticlePhygitalDetail details)
        {
            if(details.PuPromoTTC.HasValue && details.Description!=null)
            {
                details.Description = "<div class='infoPromo'>Promotion exceptionnelle !</div>" + details.Description;
            }
        }

        public void AddInfoToList(int rjs_id, int sit_pk, ArticlePhygitalBase[] items)
        {
            throw new NotImplementedException();
        }
    }

```

Vous devez implémenter au moins l'une des méthodes suivantes :

- `AddInfoToDetails` : permet d'ajouter des informations dans l'objet de la fiche produit complète
- `AddInfoToList`: permet de compléter les articles dans les descentes produits et dans les listes telles que les produits associés.

Vous trouverez un exemple dans le projet [onpremise-extensibility-samples](https://github.com/altazion/onpremise-extensibility-samples).

### Informations de fiche produit

En ajoutant des informations via `AddInfoToDetails`, vous compléterez les données renvoyées par les point API :

- [Fiche article](https://www.altazion.dev/hub/api/phygital/catalogue/articles.html#span-idfichearticlefiche-articlespan)
- [Obtenir un produit au hasard](https://www.altazion.dev/hub/api/phygital/catalogue/articles.html#span-idfichearticleauhasardobtenir-un-article-au-hasardspan)

Soit, dans le SDK, les données de :

- `Phygital.ProductTools.ProductManager.getFromBase`
- `Phygital.ProductTools.ProductManager.getFromGuid`
- `Phygital.ProductTools.ProductManager.getFromRef`
- la propriété `article` du scope associé au controleur `FicheProduitPage`

> [!WARNING]
> Si vous modifiez les informations de disponibilités (`DisponibleCommande`, `DisponibleCentrale`, `DisponibleMagasin`) pour rendre un produit non disponible, vous devrez aussi ajouter un module de vérification de disponibilité (stock ou commandable) qui effectue les mêmes vérifications pour vous assurer que le produit ne puisse pas être ajouté au panier.

### Informations des descentes produits

En modifiant les items dans la méthode `AddInfoToList`, vous impacterez les points API suivants :

- [Recherche](https://www.altazion.dev/hub/api/phygital/catalogue/articles.html#span-idrechercherecherchespan)
- [Obtenir les instance d'un article générique](https://www.altazion.dev/hub/api/phygital/catalogue/articles.html#span-idversionsdeclinaisonsobtenir-les-versions-dun-article-g%C3%A9n%C3%A9riquespan)

Ainsi que quelques points connextes :

- [Obtenir les infos principales d'un produit](https://www.altazion.dev/hub/api/phygital/catalogue/articles.html#span-idobtenirquickobtenir-les-infos-principales-dun-produitspan)
- [Obtenir un produit dépublié](https://www.altazion.dev/hub/api/phygital/catalogue/articles.html#span-idfichearticledepubliefiche-article-d%C3%A9publi%C3%A9span)