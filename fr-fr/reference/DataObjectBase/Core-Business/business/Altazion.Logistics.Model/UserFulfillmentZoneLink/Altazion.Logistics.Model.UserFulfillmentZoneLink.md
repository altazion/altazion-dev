## UserFulfillmentZoneLink

Cette classe représente une liaison entre un utilisateur et une zone de préparation dans la logistique.

Propriétés publiques :
- Id (Guid) : Identifiant unique de la liaison.
- UserUxid (Guid) : Identifiant de l'utilisateur.
- FulfillmentZoneId (Guid) : Identifiant de la zone de préparation.
- Roles (string) : Liste sérialisée des rôles associés à cette liaison, avec une limite de 250 caractères.

Chaque propriété correspond à un champ clé pour gérer la relation entre un utilisateur et sa zone de préparation associée. La validation assure que les identifiants sont fournis et que la longueur de la liste des rôles reste raisonnable.

### D�claration TypeScript
```typescript
interface UserFulfillmentZoneLink {
  /** Unique identifier of the link */
  Id: string; // GUID
  /** User identifier */
  UserUxid: string; // GUID
  /** Fulfillment zone identifier */
  FulfillmentZoneId: string; // GUID
  /** Serialized list of roles associated with the link */
  Roles: string | null;
}
```