## StoreOpeningHours

La classe StoreOpeningHours représente les horaires d'ouverture d'un magasin pour un jour spécifique de la semaine.

Propriétés publiques :

- StoreGuid : Identifiant unique (GUID) du magasin.
- Day : Jour de la semaine correspondant aux horaires (de type DayOfWeek).
- OpeningHoursPeriod1 : Chaîne indiquant la première plage horaire d'ouverture (par exemple, le matin).
- OpeningHoursPeriod2 : Chaîne indiquant la seconde plage horaire d'ouverture (par exemple, l'après-midi).

Méthodes statiques :

- ConvertDatabaseToDayOfWeek(int) : Convertit un entier de la base de données en valeur de DayOfWeek (1 = Lundi, ..., 7 = Dimanche).
- ConvertDayOfWeekToDatabase(DayOfWeek) : Convertit un DayOfWeek en entier correspondant pour la base de données.

### D�claration TypeScript
```typescript
interface StoreOpeningHours {
  StoreGuid: string; // GUID as string
  Day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  OpeningHoursPeriod1: string | null;
  OpeningHoursPeriod2: string | null;
}
```