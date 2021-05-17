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

> [!WARNING]
> Si vous modifiez les informations de disponibilités (`DisponibleCommande`, `DisponibleCentrale`, `DisponibleMagasin`) pour rendre un produit non disponible, vous devrez aussi ajouter un module de vérification de disponibilité (stock ou commandable) qui effectue les mêmes vérifications pour vous assurer que le produit ne puisse pas être ajouté au panier.
