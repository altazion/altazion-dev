## ECommerceCustomer

La classe ECommerceCustomer représente un compte client e-commerce avec les identifiants, le statut, et les informations de session associées.

Propriétés publiques :
- CustomerAccountGuid : Identifiant unique du compte e-commerce (de type Guid).
- SiteId : Identifiant du site e-commerce auquel le compte est rattaché (int).
- CustomerGuid : Identifiant du client métier lié, peut être nul (Guid?).
- Email : Adresse email utilisée pour se connecter (string).
- Password : Hash ou jeton du mot de passe, optionnel selon le mode d'authentification (string?).
- UserExperienceId : Identifiant utilisateur technique (UXID), optionnel (Guid?).
- CustomerName : Nom affiché du client, civilité ou raison sociale (string).
- IsAnonymousCustomer : Indique si le client est anonyme, session invitée (bool?).
- AnonymousToken : Jeton d'authentification pour comptes anonymes (string?).
- LastLoginDate : Date du dernier login connu (DateTimeOffset?).

### D�claration TypeScript
```typescript
interface ECommerceCustomer {
  CustomerAccountGuid: string; // GUID unique identifier
  SiteId: number;
  CustomerGuid?: string | null;
  Email: string;
  Password?: string | null;
  UserExperienceId?: string | null;
  CustomerName: string;
  IsAnonymousCustomer?: boolean | null;
  AnonymousToken?: string | null;
  LastLoginDate?: string | null; // ISO datetime string
}
```