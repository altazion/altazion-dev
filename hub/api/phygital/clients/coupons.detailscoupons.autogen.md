## <span id='detailscoupons'>Obtenir les détails</span>

Obtenir un coupon depuis son code

Url :`[GET] v2/promotions/coupons/{code}`

Paramètres : 

- **code** (string) : Le code du coupon à récupérer

Type de retour : `CouponDetails`

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

```

