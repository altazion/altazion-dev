## <span id='ajoutprospect'>Ajouter un prospect</span>

Ajoute un prospect et l'abonne aux newsletters désirées

Url :`[POST] v2/customers/prospects/add/{campagneGuid:guid}`

Paramètres : 

- **campagneGuid** (System.Guid)
- en tant que body, un objet ProspectData

Type de retour : `bool`

Type(s) de données :

```csharp
class ProspectData
{
	string Email { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string PrenomSeul { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
	string PayPk { get; set; }
	string Telephone { get; set; }
	string Telephone2 { get; set; }
	System.Int32[] NewslettersTypeAbonnementID { get; set; }
}

```

