## <span id='creationutilisateur'>Création Utilisateur</span>

Cet évènement est déclenché lorsqu'un utilisateur est créé

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : CreationUser
 - **Classe de données** : CreationUserEventData

Type(s) de données :

```csharp
class CreationUserEventData
{
	decimal UserPk { get; set; }
	string UserLogin { get; set; }
	Guid? UserUxid { get; set; }
	string UserType { get; set; }
}

```
