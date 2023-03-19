## <span id='importstocksarticlesenmasse'>Importer des stocks d'article en masse</span>

Importe des stocks d'articles en masse

Url :`[POST] api/stocks/emplacements/{codeEmp}/import`

Paramètres : 

- **codeEmp** (string) : Le code de l'emplacement
- en tant que body, un objet StockImport[] : Une liste d'objets de type StockImport

Type de retour : `String[]`

Type(s) de données :

```csharp
class StockImport
{
	GestomWebApi.Logistique.StockController+ArticleIdentifiant TypeID { get; set; }
	string ArticleID { get; set; }
	decimal Quantite { get; set; }
	System.Boolean? EstDispo { get; set; }
}

enum ArticleIdentifiant
{
	ArticleGuid, // =0
	ArticleRef, // =1
	ArticleEan, // =2
}

```

