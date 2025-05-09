Représente un partenaire d'acquisition.

Propriétés publiques :
- Guid : identifiant unique du partenaire d'acquisition (type Guid).
- Name : nom du partenaire d'acquisition (type string).
- AquisitionCategoryGuid : identifiant unique de la catégorie d'acquisition associée (type Guid).
- IdentificationString : chaîne d'identification de la catégorie d'acquisition (type string).

Cette classe sert à modéliser un partenaire par lequel une acquisition commerciale est faite, avec ses clés d'identification et son nom. Elle dérive de DataObjectBase.

Méthodes principales (non listées dans le descriptif) incluent la construction depuis une ligne de données et la récupération de la clé unique qui est ici le Guid.