## <span id='modificationmagasin'>Modification Magasin</span>

Cet évènement est déclenché lorsqu'un magasin est modifié

Informations sur l'évènement : 

 - **Catégorie** : e/pos
 - **Code** : ModificationMagasin
 - **Classe de données** : ModificationMagasinEventData

Type(s) de données :

```csharp
class ModificationMagasinEventData
{
	Guid MagGuid { get; set; }
	string MagCode { get; set; }
	string MagLibelle { get; set; }
	Guid? PtnGuid { get; set; }
}

```
