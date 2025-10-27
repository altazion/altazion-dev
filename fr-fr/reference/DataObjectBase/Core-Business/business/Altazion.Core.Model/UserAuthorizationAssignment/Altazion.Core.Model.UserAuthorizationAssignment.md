## UserAuthorizationAssignment

Cette classe représente l'attribution (affectation) d'une habilitation à un utilisateur ou à un groupe d'utilisateurs.

Propriétés publiques :
- Guid : Identifiant unique de l'affectation d'autorisation.
- AuthorizationDefinitionId : Identifiant de la définition d'habilitation (clé étrangère vers security_droits).
- GroupId : Identifiant du groupe auquel l'habilitation est affectée (nullable, si attribution à un groupe).
- UserId : Identifiant de l'utilisateur auquel l'habilitation est affectée (nullable, si attribution individuelle).

La classe permet de charger ses données à partir d'une DataRow et fournit une clé unique pour l'objet correspondant à l'identifiant de l'affectation.

La méthode ToString retourne une description textuelle indiquant à quel utilisateur ou groupe l'habilitation est affectée.

### D�claration TypeScript
```typescript
interface UserAuthorizationAssignment {
  Guid: string; // Unique identifier of the authorization assignment (GUID)
  AuthorizationDefinitionId: string; // Identifier for the authorization definition (GUID)
  GroupId?: string | null; // Optional identifier of the group assigned (GUID or null)
  UserId?: string | null; // Optional identifier of the user assigned (GUID or null)
}
```