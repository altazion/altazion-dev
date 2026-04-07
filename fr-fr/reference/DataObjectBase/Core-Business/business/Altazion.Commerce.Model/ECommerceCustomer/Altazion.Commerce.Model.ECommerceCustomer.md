## ECommerceCustomer

La classe ECommerceCustomer représente un compte client e-commerce avec ses identifiants, statut et informations de session.

Propriétés publiques:
- CustomerAccountGuid: Identifiant unique du compte e-commerce (Guid).
- SiteId: Identifiant du site e-commerce auquel le compte est rattaché (int).
- CustomerGuid: Identifiant du client métier lié, optionnel (Guid?).
- Email: Adresse email utilisée pour la connexion (string).
- Password: Hash ou jeton de mot de passe optionnel selon le mode d'authentification (string).
- AssociatedInternalUserGuid: Identifiant utilisateur technique (UXID) si attribué, optionnel (Guid?).
- CustomerName: Nom affiché du client (civilité ou raison sociale) (string).
- IsAnonymousCustomer: Indique si le client est anonyme (session invitée), optionnel (bool?).
- AnonymousToken: Jeton d'authentification pour comptes anonymes, optionnel (string?).
- LastLoginDate: Date du dernier login connu, optionnel (DateTimeOffset?).

Cette classe ne définit pas de constantes ou énumérations associées.

### D�claration TypeScript
```typescript
export interface ECommerceCustomer {
  CustomerAccountGuid: string; // Unique identifier of the e-commerce account (GUID in string format)
  SiteId: number;              // E-commerce site identifier
  CustomerGuid?: string | null; // Linked business customer identifier (optional)
  Email: string;              // Email used for connection
  Password?: string | null;  // Password hash or token (optional)
  AssociatedInternalUserGuid?: string | null; // Technical user ID (UXID), optional
  CustomerName: string;       // Displayed customer name
  IsAnonymousCustomer?: boolean | null;  // Indicates if customer is anonymous (optional)
  AnonymousToken?: string | null;        // Auth token for anonymous accounts (optional)
  LastLoginDate?: string | null;          // Last login date in ISO format (optional)
}
```