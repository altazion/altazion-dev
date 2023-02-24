## <span id='editzonemagasin'>Modifier une zone magasin</span>

Modifie une zone magasin

Url :`[POST] app/magasins/zones/{zmg_guid}`

Paramètres : 

- **zmg_guid** (System.Guid)
- en tant que body, un objet ZonesMagasinData

Type de retour : `bool`

Type(s) de données :

```csharp
class ZonesMagasinData
{
	string Libelle { get; set; }
	string Code { get; set; }
	string PayPk { get; set; }
	bool EstAffilie { get; set; }
	bool EstAutreMarque { get; set; }
}

```
