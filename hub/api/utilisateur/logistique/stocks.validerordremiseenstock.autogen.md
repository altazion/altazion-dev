## <span id='validerordremiseenstock'>Valider un ordre de mise en stock</span>

Valide un ordre de mise en stock

Url :`[PUT] api/stocks/misesenstock/valider`

Paramètres : 

- en tant que body, un objet Guid[] : L'ID de la mise en stock à valider

Url :`[PUT] api/stocks/misesenstock/valider/{IDMiseEnStock}`

Paramètres : 

- en tant que body, un objet Guid[] : L'ID de la mise en stock à valider

Type de retour : `ResultatOperation`

Type(s) de données :

```csharp
class ResultatOperation
{
	System.Guid OperationGuid { get; set; }
	bool IsSuccess { get; set; }
	string Message { get; set; }
}

```
