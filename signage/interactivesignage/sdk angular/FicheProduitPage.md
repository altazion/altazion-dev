#FicheProduitPage

##Scope

 export interface IFicheProduitModel extends NGTools.IScope {
        loading: boolean;
        activeTab: string;
        article: Phygital.ProductTools.ArticleBase;
        articleDetail: Phygital.ProductTools.ArticleDetail;
        cartOperationInProgress: boolean;
        lignePanier: Phygital.CartTools.LignePanier;
    }


- `clear(): void`

###Affichage 
- `invoke(source: string, data: any)`

- `invokeFromArticleBase(data: ProductTools.ArticleBase)`

- `invokeFromLink(data: string)`

- `invokeFromId(data: string)`

###Article

- `getAttributeValue(article: ProductTools.ArticleDetail, attributeGuid: string): string`
Obtient la valeur d’un attribut 

- `addToCart(article: ProductTools.ArticleBase = null, preferLocal: boolean = true)`
Ajoute un article au panier 
