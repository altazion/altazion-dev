La classe `CategorieApporteurAffaire` représente une catégorie d'apporteurs d'affaires (ou partenaires d'acquisition) dans le contexte commercial.

### Propriétés publiques :
- `Guid` : Identifiant unique de la catégorie (type `Guid`).
- `Label` : Libellé ou nom de la catégorie (type `string`).
- `Kind` : Type ou nature de la catégorie d'apporteur d'affaires (type `string`).

Cette classe dérive de `DataObjectBase` et est identifiée comme un concept de donnée via l'attribut `DataConcept`.

La méthode `FromDataRow` initialise une instance depuis un `DataRow`, en récupérant les valeurs des colonnes `cap_guid`, `cap_libelle`, et `cap_type`.

La méthode `GetKey` retourne l'identifiant unique `Guid` représentant la clé primaire de l'objet.

Enfin, la méthode `ToString` retourne le libellé de la catégorie, ce qui facilite son affichage sous forme textuelle.