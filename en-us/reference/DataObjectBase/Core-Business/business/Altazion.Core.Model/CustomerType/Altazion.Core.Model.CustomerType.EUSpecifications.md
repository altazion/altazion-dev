The `EUSpecifications` class represents the specific European Union specifications for a customer type.

Public properties:
- `SalesAccountId` (string): Identifier of the sales account associated with this customer type.

Inherited methods from DataObjectBase allow initializing the properties from a DataRow source, specifically here `SalesAccountId` is initialized from the column `tcl_compte_compta`.
The unique key of this object is its `SalesAccountId`.