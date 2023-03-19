## <span id='creationmagasin'>Création Magasin</span>

Cet évènement est déclenché lorsqu'un magasin est créé

Informations sur l'évènement : 

 - **Catégorie** : e/pos
 - **Code** : CreationMagasin
 - **Classe de données** : CreationMagasinEventData

Type(s) de données :

```csharp
class CreationMagasinEventData
{
	Guid MagGuid { get; set; }
	string MagCode { get; set; }
	string MagLibelle { get; set; }
	Guid? PtnGuid { get; set; }
}

```
