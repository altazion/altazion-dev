The `CategorieApporteurAffaire` class represents a category of business introducers (or acquisition partners) in the commercial context.

### Public Properties:
- `Guid`: The unique identifier of the category (type `Guid`).
- `Label`: The name or label of the category (type `string`).
- `Kind`: The type or kind of acquisition partner category (type `string`).

This class inherits from `DataObjectBase` and is marked with the `DataConcept` attribute indicating a data concept.

The `FromDataRow` method initializes an instance from a `DataRow` by fetching values from columns `cap_guid`, `cap_libelle`, and `cap_type`.

The `GetKey` method returns the unique identifier `Guid` which acts as the object's primary key.

Finally, the `ToString` method returns the category's label for convenient textual representation.