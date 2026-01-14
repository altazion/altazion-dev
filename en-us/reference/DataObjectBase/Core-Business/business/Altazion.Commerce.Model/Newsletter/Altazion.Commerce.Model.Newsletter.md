## Newsletter

The Newsletter class represents a newsletter with its essential properties.

Public properties:

- Guid: unique identifier of the newsletter (Guid type).
- EstValide: boolean indicating if the newsletter is valid.
- Date: creation or activation date of the newsletter (DateTimeOffset).
- DateFinOffre: end date of the offer associated with the newsletter (DateTimeOffset).
- Libelle: string corresponding to the label or name of the newsletter.
- CampagneGuid: unique GUID identifier of the associated campaign (Guid).

Internal constants:
- EventAbonnementNwl: "AbonnementNwl", used to identify a newsletter subscription event.
- EventDesabonnementNwl: "DesabonnementNwl", used to identify an unsubscription event.

Enum TypeBounce:
- HardBounce
- SoftBounce
- Complaint
- Unsubscribe

Internal class ChangementEtatAbonnementEventData:
- Email: string, concerned email address.
- EstAbonne: boolean indicating if the email is subscribed or not.
- NewsletterId: int, newsletter identifier.
- EtatValidationCourante: string, current validation state of the subscription.

### TypeScript class
```typescript
interface Newsletter {
  Guid: string; // Guid represented as string
  EstValide: boolean;
  Date: string; // ISO string for DateTimeOffset
  DateFinOffre: string; // ISO string for DateTimeOffset
  Libelle: string | null;
  CampagneGuid: string; // Guid represented as string
}

enum TypeBounce {
  HardBounce,
  SoftBounce,
  Complaint,
  Unsubscribe
}

interface ChangementEtatAbonnementEventData {
  Email: string;
  EstAbonne: boolean;
  NewsletterId: number;
  EtatValidationCourante: string;
}
```