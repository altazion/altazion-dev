## UserBase

La classe `UserBase` représente un utilisateur avec ses informations de base dans le système.

Propriétés publiques :

- `Id` (decimal) : Identifiant unique de l'utilisateur.
- `Uxid` (Guid) : Identifiant global unique (GUID) de l'utilisateur.
- `Name` (string) : Nom de l'utilisateur.
- `EMail` (string) : Adresse e-mail de l'utilisateur.
- `IsDeleted` (bool) : Indique si l'utilisateur est supprimé ou désactivé.
- `IsLiteAccount` (bool) : Indique si l'utilisateur est un compte secondaire ou simplifié.
- `IsMasterAdmin` (bool) : Indique si l'utilisateur est un administrateur principal.

Cette classe hérite de `DataObjectBase` et est associée à une table SQL nommée 'security_utilisateurs' dans le contexte 'Office' avec une entité 'User'. Elle contient des méthodes pour initialiser ses propriétés à partir d'une ligne de données (DataRow) et pour obtenir la clé unique de l'objet.

### D�claration TypeScript
```typescript
interface UserBase {
  /** Unique identifier of the user. */
  Id: number;
  /** Globally unique identifier (GUID) of the user. */
  Uxid: string; // GUID represented as string
  /** Name of the user. */
  Name: string | null;
  /** Email address of the user. */
  EMail: string | null;
  /** Indicates if the user is deleted or deactivated. */
  IsDeleted: boolean;
  /** Indicates if the user is a secondary or simplified account. */
  IsLiteAccount: boolean;
  /** Indicates if the user is a main administrator. */
  IsMasterAdmin: boolean;
}
```