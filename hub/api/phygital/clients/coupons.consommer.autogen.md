## <span id='consommer'>Consommer un coupons</span>

Consommer un coupon/cheque fidélité

Url :`[GET] v2/promotions/coupons/{codeUniqueAConsommer}/incrementusage?email={email:string}`

Paramètres : 

- **codeUniqueAConsommer** (string) : Le code du coupon à consommer
- **email** (string) : L'e-mail, pour vérification

Type de retour : `ResultatConsommationCode`

Type(s) de données :

```csharp
enum ResultatConsommationCode
{
	OK, // =0
	ErreurCodeDejaUtilise, // =1
	ErreurCodeInconnu, // =2
	ErreurCodeInvalide, // =3
	ErreurTechnique, // =4
}

```

