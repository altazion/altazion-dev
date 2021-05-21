# Panier

## CartManager

### Obtenir les infos du panier

- `getData(success: (data: Panier) => void, force: boolean = false)`

### Manipuler le panier

- `addToCart(art: ProductTools.ArticleBase, preferLocal: boolean, success: (data: Panier) => void, extras: ExtrasArticle = new ExtrasArticle())`
- `removeLine(ligneId: string, success: (data: Panier) => void)`
- `updateLine(ligneId: string, newQty: number, success: (data: Panier) => void)`
- `clear(success: (data: Panier) => void)`

### Gestion des paniers locaux

- `updateIsLocal(ligneId: string, isLocal: boolean, success: (data: Panier) => void)`

### Livraison

- `getShippingModes(success: (data: Array<ChoixModeLivraison>) => void)`
- `getGroupedShippingModes(success: (data: Array<ChoixModeLivraison>) => void)`
- `setShippingMode(shippingModeId: string, success: (data: Panier) => void)`

## Process Manager

### Obtenir les infos du process

- `getData(success: (data: ResumeProcess) => void, force: boolean = false)`

### Connexion utilisateur
 
- `loginAnonymous(success: (data: ResumeProcess) => void)`
- `loginGuest(success: (data: ResumeProcess) => void, username: string, client: CompteEtAdresseClientProcess)`
- `loginAnonymous(success: (data: ResumeProcess) => void)`
- `logout(success: (data: ResumeProcess) => void)`
- `clearLogin(success: (data: ResumeProcess) => void)`

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