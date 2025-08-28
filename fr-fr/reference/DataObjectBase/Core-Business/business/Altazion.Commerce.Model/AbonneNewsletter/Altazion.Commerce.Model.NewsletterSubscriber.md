## NewsletterSubscriber

La classe NewsletterSubscriber représente un abonné à une newsletter avec ses informations associées dans le contexte d'un système e-commerce. 

Propriétés publiques :
- Guid : Identifiant unique de l'abonné (type Guid).
- Email : Adresse e-mail de l'abonné (type string).
- NewsletterId : Identifiant de la newsletter à laquelle l'abonné est inscrit (type int).
- IsSubscribed : Indique si l'abonné est actuellement inscrit à la newsletter (type bool).
- ClientGuid : Identifiant unique du client associé à l'abonné (type Guid).

Cette classe dérive de DataObjectBase et possède une méthode protégée FromDataRow qui initialise les propriétés à partir d'une ligne de données.
Elle fournit aussi une méthode GetKey qui retourne la clé unique de l'objet, soit le Guid de l'abonné.

### D�claration TypeScript
```typescript
interface NewsletterSubscriber {
  Guid: string; // unique identifier
  Email: string | null;
  NewsletterId: number;
  IsSubscribed: boolean;
  ClientGuid: string; // client unique identifier
}
```