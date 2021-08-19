#AllPages 

##Scope

 export interface IAllPageModel extends NGTools.IScope {
        config: ApplicationConfigData;
        catalogConfig: Phygital.ProductTools.CatalogueConfig;
        device: Phygital.DeviceTools.DeviceConfigData;
        store: Phygital.DeviceTools.MagasinData;
        currentPage: string;
        cart: Phygital.CartTools.Panier;
        searchString: string;
        isStartupFinished: boolean;
        activeSearch: ActiveSearchData;
        animatedMessageTimeout: Array<number>;


        suggestions: Array<ProductTools.CatalogSearchSuggestion>;
        cartIsBusy: boolean;
        isNetworkConnected: boolean;
    }

###Animations
- `animateText(content: string, pageName: string, btn: Bouton[] = null): void`

- `startAnimation(pageName: string, content: string, btn: Bouton[] = null, over: Function): void`

###Panier
- `refreshCart(cart: CartTools.Panier = null, force: boolean = false, success: (data: CartTools.Panier) => void = null)`
Rafraîchit le contenu du panier

###Screen-Saver
- `showScreenSaver()`
Affiche le screen-saver 

- `hideScreenSaver()`
Cache le screen-saver 

###Navigation
- `handleNavigation(event)`

- `navigateToPage(toPage: string, source: string = null, dataObject: any = null): void`
Navigue vers une page donnée 

- `changePage(toPage: string, source: string = null, dataObject: any = null): void`
Affiche une page donnée, sans tracer la navigation 

- `clearActivity()`
Remet l’interface à l’état initial 

- `setActiveSearch(text: string, navigatable: boolean)`
Définit la recherche active 

- `submitSearch(): void`
Déclenche une recherche depuis la boîte de recherche 

- `invokeSuggestion(suggestion: ProductTools.CatalogSearchSuggestion): void`
Affiche le résultat correspondant à une suggestion (ne fonctionne qu’avec les suggestions de type 3 pour le moment) 

- `clearSuggestions(timeoutInMs: number = 1500): void`

- `getSuggestions(suggestionType: ProductTools.SuggestionType): Array<ProductTools.CatalogSearchSuggestion>`

- `refreshSuggestions(): void`

- `clearText()`

- `clear(): void`

