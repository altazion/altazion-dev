#Panier

- `openCart()`

- `refreshCart(cart: CartTools.Panier = null, force: boolean = false, success: (data: CartTools.Panier) => void = null)`
Rafra�chit le contenu du panier

- `isUniqueGroupePanier(groupe: string): boolean`
D�termine si le groupe de panier est le m�me pour tous les articles 



###Lignes du panier 

- `getLignesDuGroupe(groupe: string): Array<Phygital.CartTools.LignePanier>`
Obtient les lignes du panier qui correspondent � un groupe donn�

- `removeLigne(lig: Phygital.CartTools.LignePanier)`
Retire une ligne du panier 

- `updateLigne(lig: Phygital.CartTools.LignePanier)`
Met � jour la quantit� d�une ligne 

- `removeSingleQuantity(lig: Phygital.CartTools.LignePanier)`

- `changeIsLocal(lig: Phygital.CartTools.LignePanier, isLocal: boolean)`
Modifie une ligne en la passant de magasin � commande ou inversement 




###Quantit� 
- `getQuantiteDuGroupe(groupe: string): number`
Obtient la quantit� totale dans un groupe de panier

- `getQuantitePanier(): number`
Obtient la quantit� totale du panier 



###Prix 
- `getTotalTTCDuGroupe(groupe: string): number`
Obtient le total TTC d�un groupe de panier


###Livraison 
- `refreshLivraisonPossible(): void`
R�cup�re la liste des modes de livraisons possibles 

- `getShippingModeAvailable(mlvIdentifiant: string): CartTools.ChoixModeLivraison`
Obtient un mode de livraison disponible (ou null si aucun ne correspond) 

- `isShippingModeAvailable(mlvIdentifiant: string): boolean`
D�termine si un mode de livraison est disponible 

- `isShippingModeSelected(mlvIdentifiant: string): boolean`
D�termine si un mode de livraison est disponible 

- `selectShippingMode(mlvIdentifiant: string)`
Choisis un mode de livraison


###Commandes

- `commandeSimple($event)`

- `commandeComplete($event)`

- `termineCommande(payer: boolean)`
