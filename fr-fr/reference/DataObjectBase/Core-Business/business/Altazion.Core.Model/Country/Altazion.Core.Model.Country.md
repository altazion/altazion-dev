La classe Country représente un pays avec ses informations essentielles basées sur les normes ISO.

Propriétés publiques :
- Iso3LettersCode : chaîne de caractères représentant le code ISO à 3 lettres du pays. C'est la clé unique de chaque objet Country.
- Iso2LettersCode : chaîne de caractères représentant le code ISO à 2 lettres du pays.
- Label : chaîne de caractères représentant le libellé du pays.
- IsoLabel : chaîne de caractères représentant le libellé ISO du pays.

Méthodes principales héritées surchargées :
- GetKey() : retourne la clé unique, ici correspond au code ISO 3 lettres.
- FromDataRow(DataRow dr) : initialise les propriétés de la classe à partir des colonnes d'une ligne de données, en mappant "pay_pk" à Iso3LettersCode, "pay_iso_2" à Iso2LettersCode, "pay_libelle" à Label, et "pay_libelle_iso" à IsoLabel.