## <span id='activemodereglementsite'>Activer un mode de réglement pour un site</span>

Active un mode de réglement pour un site

Url :`[PUT] api/financier/reglements/modes/{idModeReglement}/activer/{idSite}?minCommande={minCommande:decimal?}&maxCommande={maxCommande:decimal?}`

Paramètres : 

- **idModeReglement** (System.Guid) : L'id du mode de réglement
- **idSite** (int) : L'id du site
- **minCommande** (decimal?) : Montant minimum d'une commande pour utiliser le mode de paiement
- **maxCommande** (decimal?) : Montant maximum d'une commande pour utiliser le mode de paiement

Type de retour : `bool`

