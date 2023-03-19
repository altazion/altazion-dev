## <span id='modificationutilisateur'>Modification Utilisateur</span>

Cet évènement est déclenché lorsqu'un utilisateur est modifié

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : ModificationUser
 - **Classe de données** : ModificationUserEventData

Type(s) de données :

```csharp
class ModificationUserEventData
{
	decimal UserPk { get; set; }
	string UserLogin { get; set; }
	Guid? UserUxid { get; set; }
	string UserType { get; set; }
}

```
