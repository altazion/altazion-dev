## <span id='obtenirmodesreglementsparprestatairedepaiement'>Obtenir la liste des modes de réglements par prestataire de paiement</span>

Récupère la liste des modes réglements par prestataire de paiement actifs

Url :`[GET] api/financier/reglements/prestataires/{prestataireId}/modes`

Paramètres : 

- **prestataireId** (int) : L'ID du prestataire à rechercher

Type de retour : `ModeReglement[]`

Type(s) de données :

```csharp
class ModeReglement
{
	System.Guid Guid { get; set; }
	string Nom { get; set; }
	CPointSoftware.Equihira.Common.TypeReglement Type { get; set; }
	int PrestataireId { get; set; }
	bool EstPrincipal { get; set; }
	byte Priorite { get; set; }
	string Classe { get; set; }
	string ClefMarchand { get; set; }
	bool EstModifiable { get; set; }
	string ChaineComplementaire { get; set; }
	bool EstRRR { get; set; }
	System.Byte[] File1 { get; set; }
	System.Byte[] File2 { get; set; }
	int Delai { get; set; }
	bool EstDispoClicknMortar { get; set; }
	bool EstDispoEcommerce { get; set; }
	bool EstDispoPos { get; set; }
	bool EstDispoGc { get; set; }
	bool EstDispoMarketplace { get; set; }
}

```

