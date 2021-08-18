#BaseController

##Navigation
- `goHome()`
affiche la HomePage

- `goHomeAndClear()`

- `onProductClickGuid(guid: string)`

- `onProductClick(product: Phygital.ProductTools.ArticleBase)`
D�clenche une navigation vers la fiche produit 

- `goTo(pageName: string, source: string = null, dataObject: any = null)`
Affiche une page 

- `goBack()`
Affiche la page pr�c�cente si cela est possible 

- `onSearch(searchString: string)`
D�clenche une recherche (et affiche la page de descente correspondante)

- `EndJumboProcess()`
Fin Process 

- `onProductClickGuid(guid: string)`

- `onProductLinkClick(product: Phygital.ProductTools.ProductLink)`
D�clenche une navigation vers la fiche produit 

- `onDescenteLinkClick(link: Phygital.AnimationTools.SearchLink): boolean`
D�clenche une navigation vers la descente produits (un lien d�crivant la recherche � effectuer)

- `onPanelClick(panel: Phygital.AnimationTools.HomePagePanel): boolean`
D�clenche une navigation vers la descente produits (le panel de HomePage d�crivant la descente � afficher) 

- `onHomeAdClicked(ad: Phygital.AnimationTools.AdPanel): boolean`
D�clenche une navigation vers la descente produits (un AdPanel d�crivant la descente � afficher)	

- `onAskForHelpClicked(msg: string)`


##Scopes 
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
