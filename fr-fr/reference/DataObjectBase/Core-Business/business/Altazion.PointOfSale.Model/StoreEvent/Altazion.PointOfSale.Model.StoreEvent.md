## StoreEvent

La classe StoreEvent représente un événement associé à un magasin, comme une ouverture ou fermeture exceptionnelle, un événement commercial, etc. Elle contient les propriétés publiques suivantes :

- Id : Identifiant unique de l'événement au format Guid.
- StoreId : Identifiant du magasin concerné par l'événement au format Guid.
- EventDate : Date de l'événement (DateTime).
- Category : Catégorie de l'événement sous forme de chaîne de caractères (exemples : "OUVERT", "FERME", "ANIMATION", "INSCRIT"), avec une longueur maximale de 10 caractères.
- Title : Titre de l'événement, chaîne de caractères avec une longueur maximale de 500.
- HtmlDescription : Description de l'événement au format HTML.
- IsArchived : Booléen indiquant si l'événement est archivé.
- CrossChannelEventId : Identifiant optionnel (nullable) d'un événement cross-canal parent au format Guid.
- ExceptionalOpeningHours : Horaires d'ouverture exceptionnelle pour les événements de type "OUVERT", texte au format chaîne avec une longueur maximale de 100 caractères.

Les catégories possibles pour la propriété Category sont : OUVERT (Ouverture exceptionnelle), FERME (Fermeture exceptionnelle), ANIMATION (Événement commercial), INSCRIT (Événement avec inscription).

### D�claration TypeScript
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