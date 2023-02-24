## <span id='historiquedachat'>Obtenir l'historique d'achat d'un client</span>

Obtient l'historique d'achat d'un client

Url :`[GET] v2/customers/{guid:guid}/historique?avecEnCoursIntegration={avecEnCoursIntegration:bool}`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du client
- **avecEnCoursIntegration** (bool) : true pour ajouter les commandes en cours d'intégration

Type de retour : `HistoriqueData[]`

Type(s) de données :

```csharp
class HistoriqueData
{
	DateTime Date { get; set; }
	string Type { get; set; }
	string Numero { get; set; }
	System.Guid Guid { get; set; }
	decimal MontantTtc { get; set; }
}

```
