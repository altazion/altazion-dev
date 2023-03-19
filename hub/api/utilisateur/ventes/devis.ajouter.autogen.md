## <span id='ajouter'>Ajouter une ligne de devis</span>

Ajoute une ligne à un devis

Url :`[POST] api/ventes/devis/lignedevis`

Paramètres : 

- en tant que body, un objet InfosLigneDevis

Type de retour : `bool`

Type(s) de données :

```csharp
class InfosLigneDevis
{
	string dev_numero { get; set; }
	long art_pk { get; set; }
	string libelle { get; set; }
	decimal qte { get; set; }
	decimal? pu_ht { get; set; }
	decimal? pu_ttc { get; set; }
	string commentaire { get; set; }
	bool estOptionnel { get; set; }
	string idExterne { get; set; }
}

```

