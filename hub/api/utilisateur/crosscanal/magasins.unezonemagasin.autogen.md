## <span id='unezonemagasin'>Récuperer une zone magasin</span>

Récupère une zone magasin

Url :`[GET] api/magasins/zones/{zmg_guid}`

Paramètres : 

- **zmg_guid** (Guid)

Type de retour : `ZonesMagasin`

Type(s) de données :

```csharp
class ZonesMagasin
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string PayPk { get; set; }
	bool EstAffilie { get; set; }
	bool EstAutreMarque { get; set; }
}

```
