#FicheProduitPage

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
