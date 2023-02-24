## <span id='listeleszonesmagasin'>Récuperer les zones magasin</span>

Récupère les zones magasin

Url :`[GET] app/magasins/zones`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `ZonesMagasin[]`

Type(s) de données :

```csharp
class ZonesMagasin
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string PayPk { get; set; }
	bool EstAffilie { get; set; }
	bool EstAutreMarque { get; set; }
}

```
