## <span id='forcerimportstockdarticle'>Forcer l'import d'un stock d'article</span>

Force l'import d'un stock d'article

Url :`[POST] api/stocks/emplacements/{codeEmp}/forcerimport`

Paramètres : 

- **codeEmp** (string) : Le code de l'emplacement
- en tant que body, un objet StockImport : Un objet de type StockImport

Type de retour : `bool`

Type(s) de données :

```csharp
class StockImport
{
	GestomWebApi.Logistique.StockController+ArticleIdentifiant TypeID { get; set; }
	string ArticleID { get; set; }
	decimal Quantite { get; set; }
	System.Boolean? EstDispo { get; set; }
}

```
