### Suggestions

```csharp
    public interface IRechercheSuggestionProvider
    {
        VueSuggestionDS GetSuggestions(int rjs_id, int sit_pk, Guid? mag_guid, string[] keywords, int count = 10);
    }
```

### Recherche articles

```csharp
    public interface IRechercheProvider4 
    {
        ContenuRecherche Get(int rjs_id, Guid? mag_guid, int sit_pk, decimal[] seg_pk, Guid vit_guid, decimal[] mar_pk, string[] keywords, RechercheCritereValeur[] criteres, int startIndex, int pageSize, CritereTri tri, OrdreTri ordre);

        ContexteRecherche GetInfoContexte(int rjs_id, Guid? mag_guid, int sit_pk, decimal[] seg_pk, Guid vit_guid, decimal[] mar_pk, string[] keywords, RechercheCritereValeur[] criteres, int pageSize);

        MinMaxContenuRecherche GetBornes(int rjs_id, Guid? mag_guid, int sit_pk, decimal[] seg_pk, Guid vit_guid, decimal[] mar_pk, string[] keywords, RechercheCritereValeur[] criteres, int startIndex, int pageSize, CritereTri tri, OrdreTri ordre);

    }
```

Cette interface remplace toutes les versions précédentes.

#### Initialisation du module

