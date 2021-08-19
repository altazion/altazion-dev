#PanierPage

##Scope 
 export interface IPanierPageModel extends NGTools.IScope {
        cart: Phygital.CartTools.Panier;
        erreur: Phygital.CartTools.ErreurPanier;
        previousErreur: Phygital.CartTools.ErreurPanier;
        cartToolTimeout: number;
        livraisonsPossibles: Array<Phygital.CartTools.ChoixModeLivraison>;
    }



- `invoke(source: string, data: any)`
Appelé lorsque la page est affichée

###Panier 

- `openCart()`

- `getLignesDuGroupe(groupe: string): Array<Phygital.CartTools.LignePanier>`
Obtient les lignes du panier qui correspondent à un groupe donné

- `getTotalTTCDuGroupe(groupe: string): number`
Obtient le total TTC d’un groupe de panier

- `getQuantiteDuGroupe(groupe: string): number`
Obtient la quantité totale dans un groupe de panier

-` getQuantitePanier(): number`
Obtient la quantité totale du panier 

- `removeLigne(lig: Phygital.CartTools.LignePanier)`
Retire une ligne du panier 

- `updateLigne(lig: Phygital.CartTools.LignePanier)`
Met à jour la quantité d’une ligne 

- `changeIsLocal(lig: Phygital.CartTools.LignePanier, isLocal: boolean)`
Modifie une ligne en la passant de magasin à commande ou inversement 

- `removeSingleQuantity(lig: Phygital.CartTools.LignePanier)`

- `isUniqueGroupePanier(groupe: string): boolean`
Détermine si le groupe de panier est le même pour tous les articles 


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



###Autres 

- `clearError(): void`





