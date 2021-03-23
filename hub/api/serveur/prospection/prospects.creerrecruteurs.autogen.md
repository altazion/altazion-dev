## <span id='creerrecruteurs'>Recruteurs (créer)</span>

Créé un nouveau recruteur de prospects

Url :`[GET] app/prospection/recruteurs/creer?libelle={libelle:string}&estInterne={estInterne:bool}`

Paramètres : 

- **libelle** (string) : Le nom du recruteur
- **estInterne** (bool) : true si le recruteur est votre propre entreprise

Url :`[PUT] app/prospection/recruteurs`

Paramètres : 

- en tant que body, un objet RecruteurCreateData : Le recruteur à créer

Type de retour : `Recruteur`

Type(s) de données :

```csharp
class Recruteur
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	bool EstRectruteurInterne { get; set; }
}

class RecruteurCreateData
{
	string Libelle { get; set; }
	bool EstRectruteurInterne { get; set; }
}

```
