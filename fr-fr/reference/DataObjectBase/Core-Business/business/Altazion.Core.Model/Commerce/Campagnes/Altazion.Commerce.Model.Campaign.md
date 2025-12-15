## Campaign

La classe Campaign représente une campagne commerciale et contient les propriétés suivantes :

- Guid : Identifiant unique de la campagne (type Guid).
- Label : Libellé ou nom de la campagne (type string).
- Description : Description détaillée de la campagne (type string).
- Type : Type de la campagne, codé sur un seul caractère (type string).
- ManagerUserGuid : Identifiant du responsable ou gestionnaire utilisateur de la campagne (type Guid).
- IsArchived : Indicateur booléen précisant si la campagne est archivée.

Cette classe hérite de DataObjectBase et inclut des validations pour garantir que les champs Guid, Label, Type et ManagerUserGuid sont correctement renseignés et dans les formats attendus.

### D�claration TypeScript
```typescript
interface Campaign {
  Guid: string; // Unique identifier (UUID)
  Label: string; // Campaign name
  Description?: string; // Campaign description
  Type: string; // Campaign type (1 character code)
  ManagerUserGuid: string; // Guid of the campaign manager
  IsArchived: boolean; // Whether the campaign is archived
}
```