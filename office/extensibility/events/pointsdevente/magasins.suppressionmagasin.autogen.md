## <span id='suppressionmagasin'>Suppression Magasin</span>

Cet évènement est déclenché lorsqu'un magasin est supprimé

Informations sur l'évènement : 

 - **Catégorie** : e/pos
 - **Code** : SuppressionMagasin
 - **Classe de données** : SuppressionMagasinEventData

Type(s) de données :

```csharp
class SuppressionMagasinEventData
{
	Guid MagGuid { get; set; }
	string MagCode { get; set; }
	string MagLibelle { get; set; }
	Guid? PtnGuid { get; set; }
}

```
