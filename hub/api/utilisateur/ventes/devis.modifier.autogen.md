## <span id='modifier'>Modifier un devis</span>

Modifier un devis

Url :`[PATCH] api/ventes/devis/{devisId}/modifier`

Paramètres : 

- en tant que body, un objet DevisInsert
- **devisId** (long)

Type de retour : `Devis`

Type(s) de données :

```csharp
class Devis
{
	CPointSoftware.Equihira.Common.LigneDevis[] Lignes { get; set; }
	string NumeroComplet { get; }
	System.Int32? Revision { get; set; }
	string Etat { get; set; }
	string EtatDetaille { get; }
	DateTime? DateMaxValidite { get; set; }
	string Numero { get; set; }
	decimal Id { get; set; }
	decimal MontantTTC { get; set; }
	decimal MontantHT { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
	string Pays { get; set; }
	System.Int32? ClientID { get; set; }
	bool EstLieAClientOuProspect { get; }
	string Email { get; set; }
	DateTime Date { get; set; }
	string Libelle { get; set; }
	string SourceAcceptation { get; set; }
	DateTime? DateAcceptation { get; set; }
	bool EstAccepte { get; }
}

class DevisInsert
{
	string Origine { get; set; }
	System.Int32? Client_Primary_Key { get; set; }
	string Client_Nom { get; set; }
	string Client_Adresse { get; set; }
	string Client_Code_Postal { get; set; }
	string Client_Ville { get; set; }
	string Client_Email { get; set; }
	DateTime Date_Maximum_Validite { get; set; }
	string Libelle { get; set; }
	GestomWebApi.Ventes.DevisController+ProduitsDevis[] Produits { get; set; }
}

```

