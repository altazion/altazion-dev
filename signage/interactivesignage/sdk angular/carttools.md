#Panier

- `openCart()`

- `refreshCart(cart: CartTools.Panier = null, force: boolean = false, success: (data: CartTools.Panier) => void = null)`
Rafraîchit le contenu du panier

- `isUniqueGroupePanier(groupe: string): boolean`
Détermine si le groupe de panier est le même pour tous les articles 



###Lignes du panier 

- `getLignesDuGroupe(groupe: string): Array<Phygital.CartTools.LignePanier>`
Obtient les lignes du panier qui correspondent à un groupe donné

- `removeLigne(lig: Phygital.CartTools.LignePanier)`
Retire une ligne du panier 

- `updateLigne(lig: Phygital.CartTools.LignePanier)`
Met à jour la quantité d’une ligne 

- `removeSingleQuantity(lig: Phygital.CartTools.LignePanier)`

- `changeIsLocal(lig: Phygital.CartTools.LignePanier, isLocal: boolean)`
Modifie une ligne en la passant de magasin à commande ou inversement 




###Quantité 
- `getQuantiteDuGroupe(groupe: string): number`
Obtient la quantité totale dans un groupe de panier

- `getQuantitePanier(): number`
Obtient la quantité totale du panier 



###Prix 
- `getTotalTTCDuGroupe(groupe: string): number`
Obtient le total TTC d’un groupe de panier


###Livraison 
- `refreshLivraisonPossible(): void`
Récupère la liste des modes de livraisons possibles 

- `getShippingModeAvailable(mlvIdentifiant: string): CartTools.ChoixModeLivraison`
Obtient un mode de livraison disponible (ou null si aucun ne correspond) 

- `isShippingModeAvailable(mlvIdentifiant: string): boolean`
Détermine si un mode de livraison est disponible 

- `isShippingModeSelected(mlvIdentifiant: string): boolean`
Détermine si un mode de livraison est disponible 

- `selectShippingMode(mlvIdentifiant: string)`
Choisis un mode de livraison


###Commandes

- `commandeSimple($event)`

- `commandeComplete($event)`

- `termineCommande(payer: boolean)`
