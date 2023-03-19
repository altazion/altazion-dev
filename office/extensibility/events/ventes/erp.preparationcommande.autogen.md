## <span id='preparationcommande'>Préparation Commande</span>

Cet évènement est déclenché lorsqu'une commande e-commerce passe dans l'état préparé (>4)

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : CommandePreparee
 - **Classe de données** : CommandePrepareeEventData

Type(s) de données :

```csharp
class ProduitData
{
	Guid ArticleGuid { get; set; }
	string ArticleRef { get; set; }
	decimal QuantiteCommande { get; set; }
	decimal QuantitePrep { get; set; }
}

class CommandePrepareeEventData
{
	Guid CommandeGuid { get; set; }
	DateTime DateCommande { get; set; }
	decimal MontantTTC { get; set; }
	CPointSoftware.Equihira.Business.Clients.BonsCommandesBll+ProduitData[] ListeProduits { get; set; }
	Guid ClientGuid { get; set; }
	string ClientEmail { get; set; }
	string NumeroTelephone1 { get; set; }
	string NumeroTelephone2 { get; set; }
}

```
