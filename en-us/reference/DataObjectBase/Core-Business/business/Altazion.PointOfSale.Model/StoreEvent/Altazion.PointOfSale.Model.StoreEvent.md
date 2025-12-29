## StoreEvent

The StoreEvent class represents an event associated with a store, such as exceptional openings or closings, commercial events, etc. It has the following public properties:

- Id: Unique identifier of the event (Guid).
- StoreId: Identifier of the store concerned by the event (Guid).
- EventDate: Date of the event (DateTime).
- Category: Event category as a string (examples: "OUVERT", "FERME", "ANIMATION", "INSCRIT"), with a maximum length of 10 characters.
- Title: Title of the event, string with a maximum length of 500.
- HtmlDescription: HTML description of the event.
- IsArchived: Boolean indicating if the event is archived.
- CrossChannelEventId: Optional (nullable) identifier of a parent cross-channel event (Guid).
- ExceptionalOpeningHours: Exceptional opening hours for "OUVERT" type events as a string with maximum length 100 characters.

The possible categories for the Category property are: OUVERT (Exceptional opening), FERME (Exceptional closing), ANIMATION (Commercial event), INSCRIT (Event with registration).

### TypeScript class
```typescript
interface StoreEvent {
  Id: string; // Guid unique identifier
  StoreId: string; // Guid store identifier
  EventDate: string; // Date as ISO string
  Category?: string; // Event category, max 10 chars
  Title: string; // Event title, max 500 chars
  HtmlDescription?: string; // HTML description
  IsArchived: boolean; // Whether the event is archived
  CrossChannelEventId?: string | null; // Optional Guid of cross-channel parent event
  ExceptionalOpeningHours?: string; // Exceptional opening hours, max 100 chars
}
```