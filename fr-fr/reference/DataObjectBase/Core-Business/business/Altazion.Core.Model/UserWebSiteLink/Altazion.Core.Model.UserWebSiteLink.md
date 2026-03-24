## UserWebSiteLink

Représente une liaison entre un utilisateur et un site web.

Propriétés publiques :

- Id : Identifiant unique de la liaison (type Guid).
- UserUxid : Identifiant de l'utilisateur (type Guid).
- WebSiteId : Identifiant du site web (type int).
- Roles : Liste sérialisée des rôles associés à cette liaison (type string). La longueur maximale est de 250 caractères.

Cette classe valide que l'Id, UserUxid et WebSiteId sont non nuls ou positifs, et que la longueur des rôles ne dépasse pas 250 caractères.

### D�claration TypeScript
```typescript
export interface UserWebSiteLink {
  /** Unique identifier of the link */
  Id: string; // GUID as string
  /** Identifier of the user */
  UserUxid: string; // GUID as string
  /** Identifier of the website */
  WebSiteId: number;
  /** Serialized list of roles associated with this link, max 250 characters */
  Roles?: string | null;
}
```