## CrossChannelEvent

Représente un événement cross-canal défini par la centrale et auquel les magasins peuvent participer.

Propriétés publiques :

- Id : Identifiant unique de l'événement cross-canal (Guid).
- Title : Titre de l'événement (string, max 255 caractères).
- EventDate : Date de l'événement (DateOnly).
- Category : Catégorie de l'événement, exemples possibles : "OUVERT" (ouverture exceptionnelle), "FERME" (fermeture exceptionnelle), "ANIMATION" (événement commercial), "INSCRIT" (événement avec inscription) (string, max 10 caractères).
- Description : Description détaillée de l'événement (string).
- IsArchived : Indique si l'événement est archivé (bool).
- Message : Message à afficher pour l'événement (string).
- IsMandatoryForOwnedStores : Indique si la participation est obligatoire pour les magasins intégrés (bool).
- IsMandatoryForAffiliatedStores : Indique si la participation est obligatoire pour les magasins affiliés (bool).
- EventUrl : URL relative de la page web associée à l'événement (string, max 250 caractères).
- MaxParticipants : Nombre maximum de participants autorisés (nullable int, pour événements avec inscription).
- RegistrationDeadline : Date limite d'inscription à l'événement (nullable DateTimeOffset, pour événements avec inscription).
- JsonData : Données JSON supplémentaires associées à l'événement (string).


### D�claration TypeScript
```typescript
interface CrossChannelEvent {
  Id: string; // GUID unique identifier of the event
  Title: string; // Title of the event (max 255 characters)
  EventDate: string; // Date of the event, ISO date string
  Category: string; // Category of the event (max 10 characters), e.g. 'OUVERT', 'FERME', 'ANIMATION', 'INSCRIT'
  Description?: string; // Detailed description
  IsArchived: boolean; // Whether the event is archived
  Message?: string; // Message to display
  IsMandatoryForOwnedStores: boolean; // Mandatory participation for owned stores
  IsMandatoryForAffiliatedStores: boolean; // Mandatory participation for affiliated stores
  EventUrl?: string; // Relative URL of associated webpage (max 250 characters)
  MaxParticipants?: number | null; // Max number of participants if applicable
  RegistrationDeadline?: string | null; // Registration deadline date/time (ISO string)
  JsonData?: string; // Additional JSON data
}
```