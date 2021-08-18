# Panier

## CartManager

### Obtenir les infos du panier

- `getData(success: (data: Panier) => void, force: boolean = false)`
Obtient l’état du panier actuel 

### Manipuler le panier

- `addToCart(art: ProductTools.ArticleBase, preferLocal: boolean, success: (data: Panier) => void, extras: ExtrasArticle = new ExtrasArticle())`
Ajouter un article au panier, en local ou en commande en fonction des disponibilités 

- `removeLine(ligneId: string, success: (data: Panier) => void)`
Retire une ligne du panier 

- `updateLine(ligneId: string, newQty: number, success: (data: Panier) => void)`
Met à jour la quantité d’une ligne du panier 

- `clear(success: (data: Panier) => void)`
Vide le panier 

### Gestion des paniers locaux

- `updateIsLocal(ligneId: string, isLocal: boolean, success: (data: Panier) => void)`
Déplace une ligne du panier magasin au panier centrale et inversement 

### Livraison

- `getShippingModes(success: (data: Array<ChoixModeLivraison>) => void)`
Obtient les différents modes de livraison 

- `getGroupedShippingModes(success: (data: Array<ChoixModeLivraison>) => void)`

- `setShippingMode(shippingModeId: string, success: (data: Panier) => void)`
Définit le mode de livraison du panier 

-`setAdresseLivraison(adrGuid: string, success: (dataReturn: any) => void)`

-`getClientAdressList(success: (dataReturn: any) => void)`

-`getPointsLivraison(mlvGuid: string, cp: string, ville: string, pays: string, success: (dataReturn: any) => void)`

## Process Manager

### Obtenir les infos du process

- `getData(success: (data: ResumeProcess) => void, force: boolean = false)`
Obtient l’état du process actuel 

### Connexion utilisateur
 
-`registerAndLogin(datas: any, success: (dataReturn: any) => void)`
- `loginAnonymous(success: (data: ResumeProcess) => void)`
- `loginGuest(success: (data: ResumeProcess) => void, username: string, client: CompteEtAdresseClientProcess)`
- `loginAnonymous(success: (data: ResumeProcess) => void)`
- `loginByGuid(guid: string, success: (data: Phygital.CartTools.ResumeProcess) => void)`
- `logout(success: (data: ResumeProcess) => void)`
- `clearLogin(success: (data: ResumeProcess) => void)`
-`logout(success: (data: Phygital.CartTools.ResumeProcess) => void)`
-`fullLogout(success: (data: Panier) => void)`
Déconnecte totalement la session actuelle


### Infos enlèvement

- `definirNomLivraison(success: (data: ResumeProcess) => void, nom: string)`

### Paiement

- `payerCommande(success: (data: CommandeTools.BonCommandeDetails) => void, bcdGuid: string)`
 
>[!NOTE]
> Deux signatures ne sont pas disponibles sous la forme d'une signature publique dans la version actuelle du SDK et le seront dans une prochaine release :
>
> - signature de paiement avec le mode de reg et le montant 
> - signature pour récupérer les modes dispo pour la commande 

### Finalisation de commande

- `termineCommande(success: (data: CommandeTermine) => void)`
- `imprimerTicket()`