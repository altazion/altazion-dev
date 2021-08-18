#Navigation

###Navigation Générale
- `goHome()`
affiche la HomePage

- `goHomeAndClear()`

- `goTo(pageName: string, source: string = null, dataObject: any = null)`
Affiche une page 

-` goBack()`
Affiche la page précécente si cela est possible 

- `handleNavigation(event)`

- `navigateToPage(toPage: string, source: string = null, dataObject: any = null): void`
Navigue vers une page donnée 

- `changePage(toPage: string, source: string = null, dataObject: any = null): void`
Affiche une page donnée, sans tracer la navigation 

- `clearActivity()`
Remet l’interface à l’état initial 

###Affichage Méthodes Invoke

- `invoke(source: string, data: any)`

- `invokeFromArticleBase(data: ProductTools.ArticleBase)`

- `invokeFromLink(data: string)`

- `invokeFromId(data: string)`

- `invoke(source: string, data: any)`
Appelé lorsque la page est affichée 



###Scopes 
- `allPageScope(): IAllPageModel`
Obtient le scope associé à l’ensemble des pages 

- `pageScope(pageName: string): Phygital.NGTools.IScope`

- `getPageScope(pageName: string): Phygital.NGTools.IScope`
Obtient le scope associé à une page spécifique 

- `getAllPagesScope(): IAllPageModel`
Obtient le scope associé à l’ensemble des pages 

- `getPageController(pageName: string): Phygital.NGTools.Controller`
Obtient le scope associé à une page spécifique 

- `getAllPagesController(): AllPages`
Obtient le scope associé à l’ensemble des pages 


###Screen-Saver

- `showScreenSaver()`
Affiche le screen-saver 

- `hideScreenSaver()`
Cache le screen-saver 

- `onClick(): boolean`
Réagit au click sur un screen saver 


###Affichage 

- `invoke(source: string, data: any)`
Prépare l’affichage en fonction de la raison (affichage de la descente) 

- `invokeFromPanel(panel: Phygital.AnimationTools.HomePagePanel)`
Prépare l’affichage à partir d’un HomePagePanel 

- `invokeFromAd(ad: Phygital.AnimationTools.AdPanel)`
Prépare l’affichage à partir d’une publicité 

- `invokeFromLink(link: AnimationTools.SearchLink)`
Prépare l’affichage à partir d’un lien


###Recherche 

- `onSearch(searchString: string)`
Déclenche une recherche (et affiche la page de descente correspondante)

- `setActiveSearch(text: string, navigatable: boolean)`
Définit la recherche active 

- `doSearch(search: Phygital.ProductTools.ContexteRechercheValeur)`
Effectue une recherche

- `submitSearch(): void`
Déclenche une recherche depuis la boîte de recherche 

- `invokeSuggestion(suggestion: ProductTools.CatalogSearchSuggestion): void`
Affiche le résultat correspondant à une suggestion (ne fonctionne qu’avec les suggestions de type 3 pour le moment) 

- `clearSuggestions(timeoutInMs: number = 1500): void`

- `getSuggestions(suggestionType: ProductTools.SuggestionType): Array<ProductTools.CatalogSearchSuggestion>`

- `refreshSuggestions(): void`

- `clearText()`


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
