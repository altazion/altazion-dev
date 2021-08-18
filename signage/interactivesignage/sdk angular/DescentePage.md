#DescentePage

###Affichage
- `invoke(source: string, data: any)`
Pr�pare l�affichage en fonction de la raison (affichage de la descente) 

- `invokeFromPanel(panel: Phygital.AnimationTools.HomePagePanel)`
Pr�pare l�affichage � partir d�un HomePagePanel 

- `invokeFromAd(ad: Phygital.AnimationTools.AdPanel)`
Pr�pare l�affichage � partir d�une publicit� 

- `invokeFromLink(link: AnimationTools.SearchLink)`
Pr�pare l�affichage � partir d�un lien

- `doSearch(search: Phygital.ProductTools.ContexteRechercheValeur)`
Effectue une recherche


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


###Autres 

- `onTitleClick()`

- `detailClick(guid: string): void`
