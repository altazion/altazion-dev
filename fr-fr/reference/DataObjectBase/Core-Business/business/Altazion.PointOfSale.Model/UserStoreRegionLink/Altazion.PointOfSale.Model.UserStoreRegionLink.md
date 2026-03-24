## UserStoreRegionLink

La classe UserStoreRegionLink représente une liaison entre un utilisateur et une zone de magasins.

Propriétés publiques :
- Id (Guid) : Identifiant unique de la liaison.
- UserUxid (Guid) : Identifiant de l'utilisateur.
- StoreRegionId (Guid) : Identifiant de la zone de magasins.
- Roles (string) : Liste sérialisée des rôles associés à cette liaison.

Cette classe permet de modéliser l'association d'un utilisateur à une zone de magasins spécifique avec des rôles définis. Elle inclut des validations sur les identifiants et la longueur maximale des rôles.

### D�claration TypeScript
```typescript
interface UserStoreRegionLink {
  Id: string; // Unique identifier of the link (GUID string)
  UserUxid: string; // Identifier of the user (GUID string)
  StoreRegionId: string; // Identifier of the store region (GUID string)
  Roles: string | null; // Serialized list of roles associated with the link
}
```