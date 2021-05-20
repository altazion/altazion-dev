# Namespace ProductTools

## ProductManager

La classe statique `Phygital.ProductTools.ProductManager` contient les opérations métiers associées à la manipulation des articles

### Configuration & Marques

- `getMarques (success: (data: FacetData[]) => void)`
- `getConfig (success: (data: CatalogueConfig) => void)`

### Recherche

- `search(search: Partial<ContexteRechercheValeur>, id: string, success: (data: RechercheArticleResultat, id: string) => void, startIndex: number = 0, count: number = 200)`

Cette méthode permet de lancer une recherche sur un ensemble de critères, et d'appeler une méthode en retour en cas de succès. Le paramètre id vous permet de passer un identifiant de requêtes afin de gérer l'ordonnancement des appels dans le cas où vous lanceriez plusieurs reqûetes à la suite et où le serveur ne répondrait pas dans l'ordre.

Le comportement est assez simple : la méthode appelle simplement le point API de recherche 

Pour définir vos critères de recherche, vous pouvez utiliser la classe ci-dessous. Pour la plupart des critères, vous pourrez récupérer les valeurs à utiliser à partir :

- soit des valeurs provenant d'un appel précédent à la méthode de recherche
- soit de celles provenant de la méthode de configuration.

```typescript
class ContexteRechercheValeur {
    public Criteres: RechercheCritereValeur[];
    public Segmentations: RechercheSegmentation[];
    public Marques: RechercheMarque[];
    public Keywords: String[];
    public VitrineGuid: string;
    constructor() {
        this.Criteres = new Array<RechercheCritereValeur>();
        this.Segmentations = new Array<RechercheSegmentation>();
        this.Marques = new Array<RechercheMarque>();
        this.Keywords = new Array<String>();
        this.VitrineGuid = "";
    }
}

class RechercheCritereValeur {
    public ValueLabel: string;
    public ValueGuid: string;
    public MinValue: number;
    public MaxValue: number;
    public Ordre: number;
    public UrlPerso: string;
    public Count: number;
    public Importance: number;
    public CritereGuid: string;
    public ValueText: string;
}

class RechercheSegmentation {
    public Id: number;
    public Level: number;
    public ParentId: number;
    public Label: string;
    public Code: string;
    public Count: number;
}

class RechercheMarque {
    public Id: number;
    public Label: string;
    public Code: string;
    public Count: number;
    public Importance: number;
}
```

Par exemple, pour réaliser une recherche sur la segmentation d'identifiant 1375, vous pouvez réaliser l'appel suivant :

```typescript
    this.search({ Segmentations : [new RechercheSegmentation(1375)]},
        new Date().getTime().toString(),
        (data, id) => {
            // réaliser ici votre traitement
        }
    );
```


## Fiche produit

- `getFromBase(article: ArticleBase, success: (data: ArticleDetail) => void)`
- `getFromGuid(guid: string, success: (data: ArticleDetail) => void)`
- `getFromRef(reference: string, success: (data: ArticleDetail) => void)`


### Filtrer les produits associés

- 