## TableTest

The TableTest class represents a data object containing several properties related to dates and times as well as an identifier. It inherits from DataObjectBase.

Public properties:
- Id (short): Unique identifier of the object.
- DateTimeOffSet (DateTimeOffset): Date and time with timezone offset.
- DateTime (DateTime): Date and time without timezone.
- DateTimeOffSetNullable (DateTimeOffset?): Nullable date and time with timezone offset.
- DateTimeNullable (DateTime?): Nullable date and time.
- DateTimeOffSetEnbase (DateTime): Date and time stored in the database, no explicit timezone indication.
- DateTimeEnBase (DateTimeOffset): Date and time with timezone stored in the database.
- DateTimeOffSetNullableEnbase (DateTime?): Nullable date and time stored in the database.
- DateTimeNullableEnBase (DateTimeOffset?): Nullable date and time with timezone stored in the database.

Important method:
- GetKey() : Returns the unique key of the object, here the Id.

This class is used for tests related to date and timezone management in database context.

### TypeScript class
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