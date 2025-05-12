# PythonClocker

## Vue d'ensemble
**PythonClocker** est une extension de navigateur conçue pour aider les étudiants en programmation en les défiant de résoudre des problèmes de programmation Python afin d'arrêter une alarme. Je l'ai créée comme une manière amusante de me motiver (et de motiver les autres) à pratiquer Python.

---

## Documentation pour les Développeurs

### Structure du Projet

- `server.js` : Le serveur backend qui gère les demandes et la fonctionnalité de l'extension.
- `background.js` : Le script d'arrière-plan qui exécute la logique de l'extension, comme vérifier si le problème est résolu.
- `manifest.json` : Le fichier de configuration qui indique au navigateur comment charger l'extension.
- `assets/` : Dossier contenant des images et autres ressources nécessaires à l'extension.

### Dépendances

- **Node.js** : Nécessaire pour exécuter le serveur localement.
- **Express** : Un framework web pour Node.js utilisé pour gérer les requêtes HTTP.
- **CORS** : Un middleware pour Express qui gère les requêtes entre différentes origines.
- **Node-fetch** : Une bibliothèque légère pour effectuer des requêtes HTTP en Node.js.

### Installation pour les Développeurs

1. Clonez le repository ou téléchargez le fichier ZIP depuis [PythonClocker GitHub](https://github.com/erneupa/PythonClocker).
2. Ouvrez un terminal et naviguez jusqu'au dossier du projet.
3. Installez les dépendances nécessaires en exécutant :

    ```bash
    npm install node-fetch@2
    npm install express cors
    ```

4. Après l'installation des dépendances, exécutez le serveur avec :

    ```bash
    node server.js
    ```

5. Vous pouvez maintenant tester l'extension localement en la chargeant dans votre navigateur via la page des Extensions (`chrome://extensions/`), en activant le mode développeur et en sélectionnant "Charger l'extension non empaquetée".

### Configuration de la Clé API

1. Ouvrez le fichier `server.js` et remplacez `TU-APYKEY` par votre véritable clé API.
2. Faites de même dans le fichier `background.js` où la clé est également nécessaire.
3. La clé API se trouve généralement dans les fichiers Moodle associés à votre projet.

### Comment fonctionne l'extension

L'extension fonctionne comme une alarme interactive. Elle déclenche une alarme qui ne peut être arrêtée que lorsque l'utilisateur résout un problème Python. Cette fonctionnalité en fait un outil amusant et efficace pour pratiquer la programmation.

---

## Devlog (Publication sur LinkedIn)

### **Devlog Entrée #1 : Concept initial et idée**

Lorsque j'ai commencé à apprendre la programmation à l'âge de 18 ans, j'ai trouvé que Python était à la fois simple et frustrant. Il y avait des jours où je me sentais motivé, et d'autres où les difficultés constantes me donnaient envie d'abandonner. Je voulais trouver une solution qui me garde engagé tout en apprenant. C'est alors que j'ai eu l'idée de **PythonClocker** — une extension de navigateur qui combine l'apprentissage et le défi. L'alarme ne s'arrête que lorsque l'utilisateur résout un problème Python. C'était une manière de combiner motivation et plaisir.

### **Devlog Entrée #2 : Début du développement de l'extension**

L'étape suivante a été de décider comment construire l'extension. J'ai choisi d'utiliser JavaScript pour l'extension de navigateur, car c'est facile à utiliser pour ce type de projet. J'ai commencé par créer la structure de base de l'extension : un fichier manifeste, des scripts d'arrière-plan et un HTML simple pour la fonctionnalité de l'alarme. Ensuite, j'ai configuré un serveur de base en utilisant **Node.js**, **Express** et **CORS**. Je voulais que tout fonctionne sans problème et localement, afin de m'assurer que la configuration soit fiable.

### **Devlog Entrée #3 : Création du serveur**

Une fois l'extension de base en place, je me suis concentré sur le serveur. Le serveur est essentiel pour gérer les requêtes et gérer l'API qui fournit les problèmes Python. J'ai utilisé **Node-fetch** pour effectuer des requêtes HTTP et gérer les tâches asynchrones. Configurer le serveur a été compliqué, mais une fois que j'ai compris, j'ai pu faire fonctionner l'extension sans problème sur ma machine locale.

### **Devlog Entrée #4 : Débogage et tests**

Le débogage a été l'une des parties les plus difficiles de ce projet. Il fallait que je m'assure que lorsque l'utilisateur résolvait le problème Python, l'alarme s'arrêtait. Au début, il y avait des problèmes avec la clé API et la communication entre le serveur et l'extension, mais je les ai résolus en révisant soigneusement la logique dans `server.js` et `background.js`.

### **Devlog Entrée #5 : Derniers ajustements et déploiement**

Après plusieurs semaines de tests, j'avais enfin tout qui fonctionnait comme prévu. L'extension tournait sans accroc et les problèmes Python étaient bien affichés. J'ai effectué quelques ajustements finaux sur l'interface utilisateur pour m'assurer que tout soit bien présenté. L'étape suivante a été de préparer l'extension pour le déploiement.

J'ai téléchargé le projet sur GitHub, créé un README détaillé et partagé l'extension avec mes amis pour obtenir leurs retours. C'est incroyable de voir comment une idée initiale a évolué en un outil fonctionnel qui m'aide non seulement, mais qui peut aussi aider d'autres étudiants dans leur parcours de programmation.

### **Devlog Entrée #6 : Réflexion et prochaines étapes**

En repensant à ce projet, c'était une excellente expérience d'apprentissage. J'ai rencontré de nombreux obstacles, mais chacun d'entre eux m'a permis de progresser en tant que développeur. L'extension est maintenant prête à être utilisée et je prévois de continuer à l'améliorer en fonction des retours des utilisateurs. J'ai aussi commencé à réfléchir à de futures fonctionnalités, comme ajouter plus de types de défis de programmation ou l'intégrer à d'autres langages comme JavaScript ou C++.

Ce projet a été une excellente occasion de plonger dans le développement web, Node.js et l'univers des extensions de navigateur. Je suis impatient de voir ce qui va se passer ensuite !

### **Devlog Final :**

J'espère que ce devlog aidera toute personne souhaitant créer sa propre extension de navigateur ou simplement comprendre le processus de transformer une idée en réalité. La principale leçon à retenir est que la persévérance finit par payer — même lorsque les choses ne fonctionnent pas au début. Continuez à coder, continuez à apprendre et, surtout, continuez à vous amuser !

---
