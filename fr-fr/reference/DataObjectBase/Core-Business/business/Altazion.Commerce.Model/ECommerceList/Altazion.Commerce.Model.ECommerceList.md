## ECommerceList

La classe ECommerceList représente une liste e-commerce (par exemple une liste de souhaits ou une liste de mariage) associée à un client ou à un site.

Propriétés publiques :
- Guid : Identifiant unique de la liste.
- SiteId : Identifiant du site associé à la liste. Null si la liste n'est pas liée à un site spécifique.
- CustomerGuid : Identifiant unique du client propriétaire de la liste. Null si elle n'est pas associée à un client.
- LastAccess : Date et heure du dernier accès à la liste.
- ListTypeGuid : Identifiant unique du type de liste (exemples : liste de souhaits, liste de mariage).
- Title : Titre de la liste.
- IsArchived : Booléen indiquant si la liste est archivée.

Cette classe contient également des méthodes pour initialiser les propriétés à partir d'une ligne de données, obtenir la clé de l'objet, et valider les données obligatoires (Guid, ListTypeGuid, Title, LastAccess).

### D�claration TypeScript
```typescript
interface ECommerceList {
  Guid: string; // Unique identifier of the list (UUID string)
  SiteId?: number | null; // Site identifier associated with the list, nullable
  CustomerGuid?: string | null; // Unique identifier of the customer owner, nullable
  LastAccess: string; // DateTime string representing last access
  ListTypeGuid: string; // Unique identifier for the type of list
  Title: string; // Title of the list
  IsArchived: boolean; // Indicates whether the list is archived
}
```