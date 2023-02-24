## <span id='obtenirprestaspaiements'>Obtenir la liste des prestataires de paiements</span>

Récupère la liste des prestataires de paiements actifs

Url :`[GET] api/financier/reglements/prestataires`

Paramètres : 

- Cette url n'accepte aucun paramètre

Url :`[GET] api/financier/reglements/prestataires/partype/{type}`

Paramètres : 

- **type** (string) : Le type du prestataire à rechercher

Type de retour : `PrestataireReglement[]`

Type(s) de données :

```csharp
class PrestataireReglement
{
	int Id { get; set; }
	string Libelle { get; set; }
	string Type { get; set; }
	bool AvecJournaux { get; set; }
}

```
