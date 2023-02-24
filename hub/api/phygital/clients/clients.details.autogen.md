## <span id='details'>Obtenir les détails d'un client/prospect</span>

Récupère le détail d'un client/prospect

Url :`[GET] v2/customers/{guid:guid}`

Paramètres : 

- **guid** (System.Guid)

Type de retour : `ClientProspectData`

Type(s) de données :

```csharp
class ClientProspectData
{
	DateTime? DateMinCommande { get; set; }
	DateTime? DateMinTicket { get; set; }
	string Prenom { get; set; }
	int FidelitePoints { get; set; }
	decimal FideliteCompte { get; set; }
	PhygitalSite.Clients.ClientsProspectsController+FideliteCarte[] FideliteCartes { get; set; }
	PhygitalSite.Commercial.NewsletterInfo[] Newsletters { get; set; }
	PhygitalSite.Clients.ClientsProspectsController+AdresseData[] ToutesLesAdresses { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	System.Guid Guid { get; set; }
	string Type { get; set; }
	string Email { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
}

class FideliteCarte
{
	string Numero { get; set; }
	string Libelle { get; set; }
	string Type { get; set; }
}

class NewsletterInfo
{
	string Libelle { get; set; }
	int Id { get; set; }
	bool EstAbonne { get; set; }
	DateTime? DerniereModif { get; set; }
}

class AdresseData
{
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	bool EstPrincipale { get; set; }
	bool EstFacturation { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
	string Region { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string PayPk { get; set; }
}

```
