# Commandes

## CommandesManager (Commandes fermes)

### Rechercher des commandes

- `getCommandes(success: (data: BonCommandeEntete[]) => void, uniquementMagasin: boolean = true, origine: string = null, client: string = null, email: string = null, cp: string = null, numero: string = null, datemin: Date = null, datemax: Date = null, mode: string = null)`
Obtient une liste de commandes 

### Details d'une commande

- `getCommandeClient(cmdGuid: string, success: (data: BonCommandeDetails) => void)`
Obtient la commande d’un client

## SuiviCommandeManager (Commandes en attente)

### Liste des commandes

- `getCommandesEnAttente(nbMaxHours: number, success: (data: EbcCommandeEnAttente[]) => void, uniquementCommandesLocales: boolean = false)`
Obtient la liste des commandes en attente 

- `getCommandesEnAttenteParMagasin(magasin: string, nbMaxHours: number, success: (data: EbcCommandeEnAttente[]) => void)`
Obtient la liste des commandes en attente par magasin 

### Config des commandes

- `getConfig(success: (data: CommandesConfig) => void)`
Obtient la config des commandes 

- `postAction(bcdGuid: string, codeaction: string, success: (data: BonCommandeDetails) => void, error: (data: string) => void)`
Envoie une requête au serveur 

- `getStatistiquesCommandes(success: (data: StatistiquesCommande[]) => void, datemin: Date = null, datemax: Date = null)`

