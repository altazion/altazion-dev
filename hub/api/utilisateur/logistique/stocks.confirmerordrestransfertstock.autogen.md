## <span id='confirmerordrestransfertstock'>Confirmer des ordres de transfert de stock</span>

Confirme des ordres de transfert de stock

Url :`[PUT] api/stocks/transferts/confirmer`

Paramètres : 

- en tant que body, un objet Guid[] : La liste des IDs de transfert à confirmer

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

