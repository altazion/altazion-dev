# Commandes

## CommandesManager (Commandes fermes)

### Rechercher des commandes

- `getCommandes(success: (data: BonCommandeEntete[]) => void, uniquementMagasin: boolean = true, origine: string = null, client: string = null, email: string = null, cp: string = null, numero: string = null, datemin: Date = null, datemax: Date = null, mode: string = null)`

### Details d'une commande

- `getCommandeClient(cmdGuid: string, success: (data: BonCommandeDetails) => void)`

## SuiviCommandeManager (Commandes en attente)

### Liste des commandes

- `getCommandesEnAttente(nbMaxHours: number, success: (data: EbcCommandeEnAttente[]) => void, uniquementCommandesLocales: boolean = false)`
- `getCommandesEnAttenteParMagasin(magasin: string, nbMaxHours: number, success: (data: EbcCommandeEnAttente[]) => void)`
