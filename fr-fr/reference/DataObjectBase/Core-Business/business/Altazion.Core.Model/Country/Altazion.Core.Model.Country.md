La classe `Country` représente un pays avec ses codes ISO et ses libellés descriptifs. 

Propriétés publiques :
- `Iso3LettersCode` : Code ISO à 3 lettres du pays, utilisé comme clé unique de l'objet.
- `Iso2LettersCode` : Code ISO à 2 lettres du pays.
- `Label` : Libellé du pays.
- `IsoLabel` : Libellé ISO du pays.

Cette classe dérive de DataObjectBase et est marquée avec l'attribut `DataConcept` pour le contexte « ReferenceData » avec le nom "Country".

Méthodes importantes (hors scope détaillé ici) :
- `GetKey()` retourne la clé unique, soit `Iso3LettersCode`.
- `FromDataRow(DataRow)` initialise les propriétés à partir d'une ligne de données.