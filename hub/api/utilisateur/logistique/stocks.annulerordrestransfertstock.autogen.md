## <span id='annulerordrestransfertstock'>Annuler des ordres de transfert de stock</span>

Annule des ordres de transfert de stock

Url :`[POST] api/stocks/transferts/annuler`

Paramètres : 

- en tant que body, un objet Guid[] : La liste des IDs de transfert à annuler

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
