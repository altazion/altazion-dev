## Newsletter

La classe Newsletter représente une newsletter avec ses propriétés essentielles.

Propriétés publiques :

- Guid : identifiant unique de la newsletter (type Guid).
- EstValide : booléen indiquant si la newsletter est valide.
- Date : date de création ou d'activation de la newsletter (DateTimeOffset).
- DateFinOffre : date de fin de l'offre associée à la newsletter (DateTimeOffset).
- Libelle : chaîne de caractères correspondant au libellé ou nom de la newsletter.
- CampagneGuid : identifiant unique du GUID de la campagne associée (Guid).

Constantes internes :
- EventAbonnementNwl : "AbonnementNwl", utilisé pour identifier un événement d'abonnement à la newsletter.
- EventDesabonnementNwl : "DesabonnementNwl", utilisé pour identifier un événement de désabonnement.

Enumération TypeBounce :
- HardBounce
- SoftBounce
- Complaint
- Unsubscribe

Classe interne ChangementEtatAbonnementEventData :
- Email : string, adresse email concernée.
- EstAbonne : booléen indiquant si l'email est abonné ou non.
- NewsletterId : int, identifiant de la newsletter.
- EtatValidationCourante : string, état courant de la validation de l'abonnement.

### D�claration TypeScript
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