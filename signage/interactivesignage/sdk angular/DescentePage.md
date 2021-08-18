#DescentePage

###Affichage
- `invoke(source: string, data: any)`
Prépare l’affichage en fonction de la raison (affichage de la descente) 

- `invokeFromPanel(panel: Phygital.AnimationTools.HomePagePanel)`
Prépare l’affichage à partir d’un HomePagePanel 

- `invokeFromAd(ad: Phygital.AnimationTools.AdPanel)`
Prépare l’affichage à partir d’une publicité 

- `invokeFromLink(link: AnimationTools.SearchLink)`
Prépare l’affichage à partir d’un lien

- `doSearch(search: Phygital.ProductTools.ContexteRechercheValeur)`
Effectue une recherche


###Facets 
- `viderFacets(viderCriteres: boolean = false, viderSegmentation: boolean = false, : boolean = false)`
Efface les facets de la descente actuelle 

- `retirerCritere(critere: string)`
Retire une facet de type ‘critère’ 

- `estCritereValeurActif(critereValeurCode: string): boolean`
Détermine si une facet de type critère est d’une valeur donnée 

- `valeurCritereActif(critereCode: string): ProductTools.FacetValueData`
Obtient la valeur sous forme d'un ProductTools.FacetValueData) active d'un critère

- `estCritereActif(critereCode: string): boolean`
Détermine si un critère est actif (quelle que soit la valeur) 

- `ajouterCritere(valeur: string)`
Ajoute une nouvelle facet de type critère à la recherche active 

- `getCritereEnumere(critereGuid: string): Array<Phygital.ProductTools.CritereRechercheArticleValeurPossible>`
Obtient la liste des valeurs énumérées d’un critère 


###Autres 

- `onTitleClick()`

- `detailClick(guid: string): void`
