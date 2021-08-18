# Catalogue

## CatalogueManager


###CatalogueConfig

- `getConfig(success: (data: CatalogueConfig) => void)`
Obtient la configuration du catalogue 


### CatalogueSearchSuggestion

- `getSuggestions(searchString: string, id: string,success: (id: string, data: Array<CatalogSearchSuggestion>) => void): void`


- `getArticlePartialRef(searchString: string, id: string, success: (id: string, data: Array<CatalogSearchSuggestion>) => void): void`
