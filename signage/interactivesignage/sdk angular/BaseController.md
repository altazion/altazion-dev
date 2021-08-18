#BaseController

##Navigation
- `goHome()`
affiche la HomePage

- `goHomeAndClear()`

- `onProductClickGuid(guid: string)`

- `onProductClick(product: Phygital.ProductTools.ArticleBase)`
Déclenche une navigation vers la fiche produit 

- `goTo(pageName: string, source: string = null, dataObject: any = null)`
Affiche une page 

- `goBack()`
Affiche la page précécente si cela est possible 

- `onSearch(searchString: string)`
Déclenche une recherche (et affiche la page de descente correspondante)

- `EndJumboProcess()`
Fin Process 

- `onProductClickGuid(guid: string)`

- `onProductLinkClick(product: Phygital.ProductTools.ProductLink)`
Déclenche une navigation vers la fiche produit 

- `onDescenteLinkClick(link: Phygital.AnimationTools.SearchLink): boolean`
Déclenche une navigation vers la descente produits (un lien décrivant la recherche à effectuer)

- `onPanelClick(panel: Phygital.AnimationTools.HomePagePanel): boolean`
Déclenche une navigation vers la descente produits (le panel de HomePage décrivant la descente à afficher) 

- `onHomeAdClicked(ad: Phygital.AnimationTools.AdPanel): boolean`
Déclenche une navigation vers la descente produits (un AdPanel décrivant la descente à afficher)	

- `onAskForHelpClicked(msg: string)`


##Scopes 
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
