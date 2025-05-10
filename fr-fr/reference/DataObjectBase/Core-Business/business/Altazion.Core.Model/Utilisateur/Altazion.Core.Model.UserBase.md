## UserBase

La classe UserBase représente un utilisateur avec ses informations de base et dérive de DataObjectBase.

Propriétés publiques :
- Id : Identifiant unique de l'utilisateur (type decimal).
- Uxid : Identifiant global unique (GUID) de l'utilisateur.
- Name : Nom de l'utilisateur (string).
- EMail : Adresse e-mail de l'utilisateur (string).
- IsDeleted : Indique si l'utilisateur est supprimé ou désactivé (bool).
- IsLiteAccount : Indique si l'utilisateur est un compte secondaire ou simplifié (bool).
- IsMasterAdmin : Indique si l'utilisateur est un administrateur principal (bool).

Cette classe contient aussi des méthodes pour initialiser ses propriétés depuis une ligne de données (FromDataRow), pour obtenir la clé unique de l'utilisateur (GetKey) et pour obtenir sa représentation sous forme de chaîne, qui est ici l'adresse e-mail (ToString).

### D�claration TypeScript
```typescript
interface UserBase {
  Id: number; // Unique identifier of the user
  Uxid: string; // GUID of the user
  Name: string | null; // User's name
  EMail: string | null; // User's email address
  IsDeleted: boolean; // Indicates if user is deleted or deactivated
  IsLiteAccount: boolean; // Indicates if user is a secondary/simplified account
  IsMasterAdmin: boolean; // Indicates if user is a primary administrator
}
```