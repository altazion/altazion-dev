## TableTest

The TableTest class is a data class derived from DataObjectBase, representing an object with various date-related properties and an identifier.

Public properties:
- Id (short): Unique identifier of the object.
- DateTimeOffSet (DateTimeOffset): Date and time with offset.
- DateTime (DateTime): Date and time without offset.
- DateTimeOffSetNullable (DateTimeOffset?): Nullable date and time with offset.
- DateTimeNullable (DateTime?): Nullable date and time without offset.
- DateTimeOffSetEnbase (DateTime): Date and time without offset, used in database.
- DateTimeEnBase (DateTimeOffset): Date and time with offset, used in database.
- DateTimeOffSetNullableEnbase (DateTime?): Nullable date and time without offset, used in database.
- DateTimeNullableEnBase (DateTimeOffset?): Nullable date and time with offset, used in database.

The GetKey method returns the primary key which is the Id. The class can populate its properties from a DataRow using the FromDataRow method.

### TypeScript class
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