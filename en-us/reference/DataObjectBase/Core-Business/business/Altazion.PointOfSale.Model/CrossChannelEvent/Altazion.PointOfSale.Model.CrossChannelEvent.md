## CrossChannelEvent

Represents a cross-channel event defined by the central management, in which stores can participate.

Public properties:

- Id: Unique identifier of the cross-channel event (Guid).
- Title: Event title (string, max 255 characters).
- EventDate: Event date (DateOnly).
- Category: Event category, possible values include "OUVERT" (exceptional opening), "FERME" (exceptional closing), "ANIMATION" (commercial event), "INSCRIT" (event with registration) (string, max 10 characters).
- Description: Detailed description of the event (string).
- IsArchived: Indicates if the event is archived (bool).
- Message: Message to display for the event (string).
- IsMandatoryForOwnedStores: Indicates if participation is mandatory for owned stores (bool).
- IsMandatoryForAffiliatedStores: Indicates if participation is mandatory for affiliated stores (bool).
- EventUrl: Relative URL of the event’s web page (string, max 250 characters).
- MaxParticipants: Maximum number of participants allowed (nullable int, for events with registration).
- RegistrationDeadline: Registration deadline date (nullable DateTimeOffset, for events with registration).
- JsonData: Additional JSON data associated with the event (string).


### TypeScript class
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