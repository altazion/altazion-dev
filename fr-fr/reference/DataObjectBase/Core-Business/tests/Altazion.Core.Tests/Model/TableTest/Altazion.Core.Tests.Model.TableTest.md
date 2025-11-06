## TableTest

La classe TableTest est une classe de données dérivant de DataObjectBase, représentant un objet avec diverses propriétés liées à des dates et un identifiant. 

Propriétés publiques :
- Id (short) : Identifiant unique de l'objet.
- DateTimeOffSet (DateTimeOffset) : Date et heure avec décalage temporel.
- DateTime (DateTime) : Date et heure sans décalage.
- DateTimeOffSetNullable (DateTimeOffset ?) : Date et heure avec décalage temporel, nullable.
- DateTimeNullable (DateTime ?) : Date et heure nullable.
- DateTimeOffSetEnbase (DateTime) : Date et heure sans décalage, usage en base.
- DateTimeEnBase (DateTimeOffset) : Date et heure avec décalage, usage en base.
- DateTimeOffSetNullableEnbase (DateTime ?) : Date et heure nullable, usage en base.
- DateTimeNullableEnBase (DateTimeOffset ?) : Date et heure avec décalage nullable, usage en base.

Méthode GetKey retourne la clé primaire qui est l'Id. La classe permet de charger ses propriétés depuis une DataRow avec la méthode FromDataRow.

### D�claration TypeScript
```typescript
interface TableTest {
  Id: number; // short
  DateTimeOffSet: string; // DateTimeOffset as ISO string
  DateTime: string; // DateTime as ISO string
  DateTimeOffSetNullable?: string | null; // Nullable DateTimeOffset
  DateTimeNullable?: string | null; // Nullable DateTime
  DateTimeOffSetEnbase: string; // DateTime as ISO string
  DateTimeEnBase: string; // DateTimeOffset as ISO string
  DateTimeOffSetNullableEnbase?: string | null; // Nullable DateTime
  DateTimeNullableEnBase?: string | null; // Nullable DateTimeOffset
}
```