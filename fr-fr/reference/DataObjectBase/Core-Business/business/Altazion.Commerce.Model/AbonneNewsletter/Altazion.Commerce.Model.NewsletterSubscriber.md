## NewsletterSubscriber

La classe NewsletterSubscriber représente un abonné à une newsletter avec ses informations associées.

Propriétés publiques:

- Guid : Identifiant unique de l'abonné à la newsletter de type Guid.
- Email : Adresse e-mail de l'abonné, de type string.
- NewsletterId : Identifiant de la newsletter à laquelle l'abonné est inscrit, de type int.
- IsSubscribed : Indique si l'abonné est actuellement inscrit à la newsletter, de type bool.
- ClientGuid : Identifiant unique du client associé à l'abonné, de type Guid.

Cette classe dérive de DataObjectBase et gère le chargement des données à partir d'une ligne de données (DataRow).



### D�claration TypeScript
```typescript
interface NewsletterSubscriber {
  Guid: string; // Unique identifier of the subscriber
  Email: string | null; // Email address of the subscriber
  NewsletterId: number; // ID of the newsletter
  IsSubscribed: boolean; // Subscription status
  ClientGuid: string; // Unique identifier of the associated client
}
```