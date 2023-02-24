## <span id='facturer'>Facturer un devis</span>

Facturer un devis

Url :`[POST] api/ventes/devis/{devisId}/facturer`

Paramètres : 

- **devisId** (long) : L'identifiant du devis
- en tant que body, un objet DevisFacture : Le détail de la facture

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

class DevisFacture
{
	bool FacturerTout { get; set; }
	System.Decimal[] LignesAFacturer { get; set; }
	System.Decimal[] OptionsValidees { get; set; }
	DateTime? DateTransformation { get; set; }
	bool CreerNouveauClient { get; set; }
	System.Int32? ReplacementClientPK { get; set; }
	short TypeClient { get; set; }
	string RefClientFacture { get; set; }
}

```
