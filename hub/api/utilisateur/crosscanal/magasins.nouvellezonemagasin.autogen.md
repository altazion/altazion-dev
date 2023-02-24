## <span id='nouvellezonemagasin'>Créer une zone magasin</span>

Crée une zone magasin

Url :`[PUT] api/magasins/zones`

Paramètres : 

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
