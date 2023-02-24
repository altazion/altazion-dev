## <span id='validerordrestransfertstock'>Valider des ordres de transfert de stock</span>

Valide des ordres de transfert de stock

Url :`[PUT] api/stocks/transferts/valider`

Paramètres : 

- en tant que body, un objet Guid[] : La liste des IDs de transfert à valider

Type de retour : `ResultatOperation[]`

Type(s) de données :

```csharp
class ResultatOperation
{
	System.Guid OperationGuid { get; set; }
	bool IsSuccess { get; set; }
	string Message { get; set; }
}

```
