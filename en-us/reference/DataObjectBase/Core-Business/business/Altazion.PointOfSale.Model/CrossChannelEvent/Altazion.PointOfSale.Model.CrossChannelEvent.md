## CrossChannelEvent

The CrossChannelEvent class represents a cross-channel event defined by headquarters which stores can participate in.

Public properties:
- Id (Guid): Unique identifier of the cross-channel event.
- Title (string): Event title, required, maximum length 255 characters.
- EventDate (DateTime): Date of the event.
- Category (string): Event category (examples: "OUVERT", "FERME", "ANIMATION", "INSCRIT"), required, max length 10 characters. Possible categories: OUVERT (exceptional opening), FERME (exceptional closing), ANIMATION (commercial event), INSCRIT (event with registration).
- Description (string): Detailed description of the event.
- IsArchived (bool): Indicates if the event is archived.
- Message (string): Message to display for the event.
- IsMandatoryForOwnedStores (bool): Indicates if participation is mandatory for integrated stores.
- IsMandatoryForAffiliatedStores (bool): Indicates if participation is mandatory for affiliated stores.
- EventUrl (string): Relative URL of the web page associated with the event, max length 250 characters.
- MaxParticipants (int?): Maximum number of participants allowed (for events requiring registration).
- RegistrationDeadline (DateTimeOffset?): Deadline for event registration (for events requiring registration).
- JsonData (string): Additional JSON data associated with the event, to store structured extra information.

Key method: GetKey() returns the unique Id of the cross-channel event.

### TypeScript class
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