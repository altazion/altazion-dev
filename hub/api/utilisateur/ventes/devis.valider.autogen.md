## <span id='valider'>Valider un devis</span>

Valide un devis (enregistre son acceptation par le client

Url :`[POST] api/ventes/devis/{devisId}/accepter`

Paramètres : 

- **devisId** (long) : L'identifiant du devis
- en tant que body, un objet DevisAcceptationInfo : Le détail de l'acceptation

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

class DevisAcceptationInfo
{
	string Nom { get; set; }
	string NumeroPieceAcceptation { get; set; }
}

```

