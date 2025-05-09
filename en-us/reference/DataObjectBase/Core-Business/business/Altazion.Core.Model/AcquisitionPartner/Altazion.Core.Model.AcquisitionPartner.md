Represents an acquisition partner.

Public properties:
- Guid: unique identifier of the acquisition partner (Guid type).
- Name: name of the acquisition partner (string type).
- AquisitionCategoryGuid: unique identifier of the associated acquisition category (Guid type).
- IdentificationString: identification string of the acquisition category (string type).

This class models a partner through which a commercial acquisition is made, holding its identification keys and name. It derives from DataObjectBase.

Main methods (not listed in the description) include construction from a data row and retrieval of the unique key which here is the Guid.