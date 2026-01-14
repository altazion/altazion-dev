## TableTest

La classe TableTest représente un objet de données contenant plusieurs propriétés liées à des dates et heures ainsi qu'un identifiant. Elle dérive de DataObjectBase.

Propriétés publiques :
- Id (short) : Identifiant unique de l'objet.
- DateTimeOffSet (DateTimeOffset) : Date et heure avec fuseau horaire.
- DateTime (DateTime) : Date et heure sans fuseau horaire.
- DateTimeOffSetNullable (DateTimeOffset?) : Date et heure avec fuseau horaire, pouvant être nulle.
- DateTimeNullable (DateTime?) : Date et heure nullable.
- DateTimeOffSetEnbase (DateTime) : Date et heure stockée en base, sans indication explicite si avec ou sans fuseau.
- DateTimeEnBase (DateTimeOffset) : Date et heure avec fuseau horaire stockée en base.
- DateTimeOffSetNullableEnbase (DateTime?) : Date et heure nullable stockée en base.
- DateTimeNullableEnBase (DateTimeOffset?) : Date et heure avec fuseau horaire nullable stockée en base.

Méthode importante :
- GetKey() : Retourne la clé unique de l'objet, ici l'Id.

Cette classe est utilisée pour des tests liés à la gestion des dates et fuseaux horaires en base de données.

### D�claration TypeScript
```typescript
interface TableTest {
  Id: number; // short integer
  DateTimeOffSet: string; // ISO 8601 string with timezone offset
  DateTime: string; // ISO 8601 string without timezone
  DateTimeOffSetNullable?: string | null; // nullable ISO 8601 string with timezone offset
  DateTimeNullable?: string | null; // nullable ISO 8601 string without timezone
  DateTimeOffSetEnbase: string; // ISO 8601 string, stored in database
  DateTimeEnBase: string; // ISO 8601 string with timezone, stored in database
  DateTimeOffSetNullableEnbase?: string | null; // nullable ISO 8601 string stored in database
  DateTimeNullableEnBase?: string | null; // nullable ISO 8601 string with timezone stored in database
}
```