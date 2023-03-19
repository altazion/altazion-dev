## <span id='etatducompte'>Obtenir l'état du compte fidélité d'un client</span>

Récupère l'état du compte de fidélité d'un client

Url :`[GET] v2/fidelite/{clientGuid:guid}`

Paramètres : 

- **clientGuid** (System.Guid) : L'identifiant du client

Type de retour : `LoyaltyStatus[]`

Type(s) de données :

```csharp
class LoyaltyStatus
{
	PhygitalSite.Crm.LoyaltyController+LoyaltyKind TypeCompte { get; set; }
	System.Guid ProgrammeGuid { get; set; }
	decimal Balance { get; set; }
	PhygitalSite.Crm.LoyaltyController+CouponData[] Coupons { get; set; }
	PhygitalSite.Crm.LoyaltyController+LoyaltyAccount[] Accounts { get; set; }
}

enum LoyaltyKind
{
	Cagnottage, // =0
	Points, // =1
}

class CouponData
{
	PhygitalSite.Crm.LoyaltyController+CouponKind TypeCoupon { get; set; }
	string TypeAvantage { get; set; }
	Guid? AvantageGuid { get; set; }
	string Groupe { get; set; }
	bool EstValide { get; set; }
	DateTime? DebutValidite { get; set; }
	DateTime? FinValidite { get; set; }
	bool DemandeAuthentification { get; set; }
	string Code { get; set; }
}

enum CouponKind
{
	BonAchat, // =0
	Avantage, // =1
	ChequeFidelite, // =2
}

class LoyaltyAccount
{
	string Identifiant { get; set; }
	string Libelle { get; set; }
}

```

