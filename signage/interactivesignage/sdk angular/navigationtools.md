#Navigation

###Navigation G�n�rale
- `goHome()`
affiche la HomePage

- `goHomeAndClear()`

- `goTo(pageName: string, source: string = null, dataObject: any = null)`
Affiche une page 

-` goBack()`
Affiche la page pr�c�cente si cela est possible 

- `handleNavigation(event)`

- `navigateToPage(toPage: string, source: string = null, dataObject: any = null): void`
Navigue vers une page donn�e 

- `changePage(toPage: string, source: string = null, dataObject: any = null): void`
Affiche une page donn�e, sans tracer la navigation 

- `clearActivity()`
Remet l�interface � l��tat initial 

###Affichage M�thodes Invoke

- `invoke(source: string, data: any)`

- `invokeFromArticleBase(data: ProductTools.ArticleBase)`

- `invokeFromLink(data: string)`

- `invokeFromId(data: string)`

- `invoke(source: string, data: any)`
Appel� lorsque la page est affich�e 



###Scopes 
- `allPageScope(): IAllPageModel`
Obtient le scope associ� � l�ensemble des pages 

- `pageScope(pageName: string): Phygital.NGTools.IScope`

- `getPageScope(pageName: string): Phygital.NGTools.IScope`
Obtient le scope associ� � une page sp�cifique 

- `getAllPagesScope(): IAllPageModel`
Obtient le scope associ� � l�ensemble des pages 

- `getPageController(pageName: string): Phygital.NGTools.Controller`
Obtient le scope associ� � une page sp�cifique 

- `getAllPagesController(): AllPages`
Obtient le scope associ� � l�ensemble des pages 


###Screen-Saver

- `showScreenSaver()`
Affiche le screen-saver 

- `hideScreenSaver()`
Cache le screen-saver 

- `onClick(): boolean`
R�agit au click sur un screen saver 


###Affichage 

- `invoke(source: string, data: any)`
Pr�pare l�affichage en fonction de la raison (affichage de la descente) 

- `invokeFromPanel(panel: Phygital.AnimationTools.HomePagePanel)`
Pr�pare l�affichage � partir d�un HomePagePanel 

- `invokeFromAd(ad: Phygital.AnimationTools.AdPanel)`
Pr�pare l�affichage � partir d�une publicit� 

- `invokeFromLink(link: AnimationTools.SearchLink)`
Pr�pare l�affichage � partir d�un lien


###Recherche 

- `onSearch(searchString: string)`
D�clenche une recherche (et affiche la page de descente correspondante)

- `setActiveSearch(text: string, navigatable: boolean)`
D�finit la recherche active 

- `doSearch(search: Phygital.ProductTools.ContexteRechercheValeur)`
Effectue une recherche

- `submitSearch(): void`
D�clenche une recherche depuis la bo�te de recherche 

- `invokeSuggestion(suggestion: ProductTools.CatalogSearchSuggestion): void`
Affiche le r�sultat correspondant � une suggestion (ne fonctionne qu�avec les suggestions de type 3 pour le moment) 

- `clearSuggestions(timeoutInMs: number = 1500): void`

- `getSuggestions(suggestionType: ProductTools.SuggestionType): Array<ProductTools.CatalogSearchSuggestion>`

- `refreshSuggestions(): void`

- `clearText()`


###Facets 

- `viderFacets(viderCriteres: boolean = false, viderSegmentation: boolean = false, : boolean = false)`
Efface les facets de la descente actuelle 

- `retirerCritere(critere: string)`
Retire une facet de type �crit�re� 

- `estCritereValeurActif(critereValeurCode: string): boolean`
D�termine si une facet de type crit�re est d�une valeur donn�e 

- `valeurCritereActif(critereCode: string): ProductTools.FacetValueData`
Obtient la valeur sous forme d'un ProductTools.FacetValueData) active d'un crit�re


- `estCritereActif(critereCode: string): boolean`
D�termine si un crit�re est actif (quelle que soit la valeur) 

- `ajouterCritere(valeur: string)`
Ajoute une nouvelle facet de type crit�re � la recherche active 

- `getCritereEnumere(critereGuid: string): Array<Phygital.ProductTools.CritereRechercheArticleValeurPossible>`
Obtient la liste des valeurs �num�r�es d�un crit�re 
