## StoreOpeningHours

The StoreOpeningHours class represents the opening hours of a store for a specific day of the week.

Public properties:

- StoreGuid: Unique identifier (GUID) of the store.
- Day: Day of the week to which the opening hours apply (of type DayOfWeek).
- OpeningHoursPeriod1: String indicating the first opening period (e.g., morning).
- OpeningHoursPeriod2: String indicating the second opening period (e.g., afternoon).

Static methods:

- ConvertDatabaseToDayOfWeek(int): Converts a database integer value to a DayOfWeek enum value (1 = Monday, ..., 7 = Sunday).
- ConvertDayOfWeekToDatabase(DayOfWeek): Converts a DayOfWeek enum to its corresponding integer value for the database.

### TypeScript class
```typescript
interface StoreOpeningHours {
  StoreGuid: string; // GUID as string
  Day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  OpeningHoursPeriod1: string | null;
  OpeningHoursPeriod2: string | null;
}
```