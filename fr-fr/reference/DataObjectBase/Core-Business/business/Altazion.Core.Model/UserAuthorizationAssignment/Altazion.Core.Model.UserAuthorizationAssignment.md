## UserAuthorizationAssignment

La classe UserAuthorizationAssignment représente l'affectation (attribution) d'une habilitation à un utilisateur ou à un groupe d'utilisateurs.

Propriétés publiques :

- Guid : Identifiant unique de l'affectation d'autorisation.
- AuthorizationDefinitionId : Identifiant de la définition d'habilitation, clé étrangère vers les droits de sécurité.
- GroupId : Identifiant facultatif du groupe auquel l'habilitation est affectée, si l'attribution est à un groupe.
- UserId : Identifiant facultatif de l'utilisateur auquel l'habilitation est affectée, si l'attribution est individuelle.

Cette classe permet de gérer les relations entre un droit d'autorisation, un utilisateur ou un groupe auquel ce droit est assigné.

Méthodes clés :
- FromDataRow : Initialise l'objet à partir d'une ligne de données.
- GetKey : Retourne la clé unique de cette instance, ici le Guid.
- ToString : Retourne une description textuelle précisant à qui l'autorisation est affectée (utilisateur ou groupe).

### D�claration TypeScript
```typescript
interface UserAuthorizationAssignment {
  Guid: string; // Unique identifier of the authorization assignment (UUID)
  AuthorizationDefinitionId: string; // Identifier of the authorization definition (UUID)
  GroupId?: string | null; // Optional group identifier (UUID), if assigned to a group
  UserId?: string | null; // Optional user identifier (UUID), if assigned to a user
}
```