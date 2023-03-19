## <span id='listercoupons'>Obtenir la liste des coupons d'un client</span>

Récupère tous les coupons/cheques fidélités associés à un e-mail

Url :`[GET] v2/promotions/coupons/search?email={email:string}`

Paramètres : 

- **email** (string) : L'email à vérifier

Type de retour : `CouponDetails[]`

Type(s) de données :

```csharp
class CouponDetails
{
	PhygitalSite.Commercial.PromotionsController+TypeCoupon Type { get; set; }
	string Code { get; set; }
	string Libelle { get; set; }
	System.Guid Guid { get; set; }
	DateTime? MaxValidite { get; set; }
	PhygitalSite.Commercial.PromotionsController+EtatConsommationCode EtatConsommation { get; set; }
}

enum TypeCoupon
{
	CodeAvantage, // =0
	RemiseFidelite, // =1
}

enum EtatConsommationCode
{
	CodeEnCoursDeConsommation, // =0
	CodeDisponible, // =1
	CodeConsomme, // =2
	CodeInconnu, // =3
	CodePerime, // =4
	CodeDesactive, // =5
}

```

