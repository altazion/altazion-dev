## <span id='creer'>Créer un évènement magasin</span>

Créé un évènement magasin

Url :`[PUT] api/magasins/{magasin_guid}/evenements`

Paramètres : 

- **magasin_guid** (System.Guid) : L'identifiant du magasin
- en tant que body, un objet ObjetCreationEvenementMagasin : Les infos de l'évènement

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

