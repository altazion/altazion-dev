# Présentation

## Généralités
Les sources d'approvisionnement servent à définir les stocks alloués à vos différents canaux de vente et qui seront utilisés pour préparer les commandes.
Il s'agit d'un module optionnel qui, une fois activé, remplace le calcul simple par un système permettant de choisir plus précisément les stocks à utiliser.

Une source d'appro permet de définir des règles pour savoir quels stocks et quelle part de ces stocks sont pris en compte pour chaque article. Ces règles d'approvisionnement sont entièrement paramètrables et vous permettent de gérer finement l'allocation de vos stocks à vos sources d'approvisionnement.

Elles sont indispensables pour pouvoir utiliser les modules Delivery Optimizer et Unified Stock.

## Association aux canaux de ventes
Afin de déterminer les quantités disponibles pour un canal de vente (site e-commerce, bornes, etc...), celui-ci doit être associé à une source d'approvisionnement. Lorsque cela est fait, le canal déporte tous calculs des stocks à un module Unified Stock et les calculs de paniers/commandes à un module Delivery Optimizer.

## Type d'exécution

Les sources d'approvisionnement peuvent être exécutées dans deux cadres différents :
 - Dans la base de données principale. Cette première version des sources d'approvisionnement concidère la base comme référentiel des stocks. Cette version ne permet pas de disposer de vos stocks en temps réel.
 - Pour Unified Stock. Cette seconde version est utilisée si vous disposez d'un module Unified Stock paramétré. Dans ce cas, Unified Stock est concidéré comme référentiel des stocks et permet de bénéficier du calcul de vos stocks en temps réel.

 En fonction du cadre d'exécution, le fonctionnement des sources d'approvisionnement diffère légèrement.
