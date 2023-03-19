## <span id='modifier'>Modifier un évènement magasin</span>

Modifie un évènement magasin

Url :`[PATCH] api/magasins/{magasin_guid}/evenements/{evm_guid}`

Paramètres : 

- **evm_guid** (System.Guid) : L'identifiant de l'évènement magasin
- en tant que body, un objet ObjetCreationEvenementMagasin : Les infos de l'évènement
- **magasin_guid** (System.Guid) : L'identifiant du magasin

Type de retour : `bool`

Type(s) de données :

```csharp
class ObjetCreationEvenementMagasin
{
	string Categorie { get; set; }
	DateTime Date { get; set; }
	string Libelle { get; set; }
	string Description { get; set; }
}

```

