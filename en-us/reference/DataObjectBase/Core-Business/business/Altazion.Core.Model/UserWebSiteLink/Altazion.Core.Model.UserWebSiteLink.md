## UserWebSiteLink

Represents a link between a user and a website.

Public properties:

- Id: Unique identifier of the link (type Guid).
- UserUxid: Identifier of the user (type Guid).
- WebSiteId: Identifier of the website (type int).
- Roles: Serialized list of roles associated with this link (type string). Maximum length is 250 characters.

The class ensures that Id, UserUxid, and WebSiteId are not empty or zero, and that the Roles string does not exceed 250 characters.

### TypeScript class
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