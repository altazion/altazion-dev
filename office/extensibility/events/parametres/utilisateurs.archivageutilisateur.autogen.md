## <span id='archivageutilisateur'>Archivage Utilisateur</span>

Cet évènement est déclenché lorsqu'un utilisateur est archivé

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : CreationUser
 - **Classe de données** : ArchivageUserEventData

Type(s) de données :

```csharp
class ArchivageUserEventData
{
	decimal UserPk { get; set; }
	string UserLogin { get; set; }
	Guid? UserUxid { get; set; }
	string UserType { get; set; }
}

```
