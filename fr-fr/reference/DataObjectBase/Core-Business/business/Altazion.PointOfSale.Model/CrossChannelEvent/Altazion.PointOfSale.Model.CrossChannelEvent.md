## CrossChannelEvent

La classe CrossChannelEvent représente un événement cross-canal défini par la centrale et auquel les magasins peuvent participer.

Propriétés publiques :
- Id (Guid) : Identifiant unique de l'événement cross-canal.
- Title (string) : Titre de l'événement, obligatoire, longueur maximale de 255 caractères.
- EventDate (DateTime) : Date de l'événement.
- Category (string) : Catégorie de l'événement (exemples : "OUVERT", "FERME", "ANIMATION", "INSCRIT"), obligatoire, longueur maximale de 10 caractères. Catégories possibles : OUVERT (ouverture exceptionnelle), FERME (fermeture exceptionnelle), ANIMATION (événement commercial), INSCRIT (événement avec inscription).
- Description (string) : Description détaillée de l'événement.
- IsArchived (bool) : Indique si l'événement est archivé.
- Message (string) : Message à afficher pour l'événement.
- IsMandatoryForOwnedStores (bool) : Indique si la participation est obligatoire pour les magasins intégrés.
- IsMandatoryForAffiliatedStores (bool) : Indique si la participation est obligatoire pour les magasins affiliés.
- EventUrl (string) : URL relative de la page web associée à l'événement, longueur maximale de 250 caractères.
- MaxParticipants (int?) : Nombre maximum de participants autorisés (pour les événements avec inscription).
- RegistrationDeadline (DateTimeOffset?) : Date limite d'inscription (pour les événements avec inscription).
- JsonData (string) : Données JSON supplémentaires associées à l'événement, pour stocker des informations additionnelles structurées.

Méthode importante : GetKey() retourne l'identifiant unique Id de l'événement.

### D�claration TypeScript
```typescript
interface CrossChannelEvent {
  Id: string; // GUID
  Title: string;
  EventDate: string; // ISO date string
  Category: string;
  Description?: string | null;
  IsArchived: boolean;
  Message?: string | null;
  IsMandatoryForOwnedStores: boolean;
  IsMandatoryForAffiliatedStores: boolean;
  EventUrl?: string | null;
  MaxParticipants?: number | null;
  RegistrationDeadline?: string | null; // ISO date-time string
  JsonData?: string | null;
}

```