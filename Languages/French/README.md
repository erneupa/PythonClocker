
<h2 align="center">🌐 Autres Langues</h2>

<p align="center">
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Spanish">
    🇪🇸 <strong>Espagnol</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/French">
    🇫🇷 <strong>Français</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Japanese">
    🇯🇵 <strong>Japonais</strong>
  </a>
</p>

<h1 align="center">⏰ PythonClocker</h1>

<p align="center">
  <em>Parce que parfois, la seule façon d'apprendre Python... c'est de se réveiller avec.</em>
</p>

<p align="center">
  Cette idée est née lorsqu'un jeune de 18 ans a commencé à étudier la programmation.<br>
  Tout allait bien, mais... Python, ce langage interprété, parfois facile,<br>
  mais d'autres fois un véritable cauchemar.<br><br>
  <strong>Voici donc votre solution !!</strong><br>
  Cette extension de navigateur sauvera votre matière — un réveil que vous ne pouvez arrêter qu'en résolvant le programme.
</p>

---

<p align="center">
  <a href="https://chromewebstore.google.com/detail/kobehbnioildglecmfabpelnjnemihpn?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/🚀 Demo-PythonClocker-blue?style=for-the-badge" alt="Demo">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/wiki/Wiki%E2%80%90PythonClocker">
    <img src="https://img.shields.io/badge/📘 Wiki-Documentation-green?style=for-the-badge" alt="Wiki">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/📘 Contributing-Documentation-pink?style=for-the-badge" alt="CONTRIBUTING">
  </a>
</p>

## Signification de l'extension
Les extensions sont de petits programmes qui personnalisent l'expérience de navigation. Elles permettent aux utilisateurs de personnaliser la fonctionnalité et le comportement du navigateur en fonction de leurs besoins ou préférences.

## Modifier l'extension

1. Dans le fichier `server.js`, changez la `TU-APYKEY`
2. Dans le fichier `background.js`, changez la `TU-APYKEY`
3. La clé API peut être trouvée dans les fichiers Moodle.

## Comment installer l'extension ?

1. [CLIQUEZ ICI](https://github.com/erneupa/PythonClocker/tree/main/PythonClocker) pour télécharger l'extension.
2. Allez à ce lien `chrome://extensions/`
3. Activez cette fonctionnalité ![1](https://github.com/erneupa/PythonClocker/blob/main/assets/1a.png)
4. Ajoutez l'extension ici ![2](https://github.com/erneupa/PythonClocker/blob/main/assets/2a.png)
5. Installez un serveur local.

## Comment installer un serveur local ?
### Télécharger node.js.
    1. Allez à cette [url](https://nodejs.org/en)
    2. Téléchargez et installez l'application.
1. Ouvrez la console Windows.
2. Accédez au dossier de l'extension via la console.
3. Copiez et collez ce code :```npm install node-fetch@2```
4. Copiez et collez ce code : ```npm install express cors```
5. Copiez et collez ce code : ```node server.js```

**POUR UTILISER L'EXTENSION !!**

## Exemple d'utilisation.

## QUESTIONS

### Cycle de vie des données (5b)

#### Comment les données sont-elles gérées depuis leur génération jusqu'à leur suppression dans votre projet ?
Les données dans mon extension sont générées lorsque l'utilisateur entre l'heure dans le réveil ou lorsqu'une demande est faite à OpenAI pour obtenir une question. Elles ne sont pas stockées de manière permanente, elles sont utilisées tant que l'extension est active, puis disparaissent lorsque l'extension est fermée.

#### Quelle stratégie suivez-vous pour garantir la cohérence et l'intégrité des données ?
- Les heures et minutes sont validées avant de démarrer le compte à rebours.
- La réponse d'OpenAI est correctement gérée pour éviter des erreurs dans la structure JSON.
- Un `try-catch` est utilisé dans `background.js` pour capturer les erreurs de l'API et gérer les réponses incorrectes.

### Stockage dans le cloud (5f)

#### Si votre logiciel utilise le stockage dans le cloud, comment garantissez-vous la sécurité et la disponibilité des données ?
- HTTPS est utilisé pour toutes les requêtes vers OpenAI.
- Aucune donnée sensible n'est stockée dans des fichiers accessibles.
- L'intégration de l'authentification pourrait améliorer la sécurité dans les futures versions.

#### Quelles alternatives avez-vous envisagées pour le stockage des données et pourquoi avez-vous choisi votre solution actuelle ?
J'aurais pu stocker les données dans `chrome.storage` ou sur un serveur, mais comme l'extension ne nécessite pas de persistance, j'ai préféré garder tout en mémoire pour plus de rapidité.

#### Si vous n'utilisez pas le cloud, comment pourriez-vous l'intégrer dans les futures versions ?
Je pourrais connecter l'extension à Google Drive ou Firebase pour que l'utilisateur puisse accéder à son historique de questions et réponses depuis n'importe quel appareil.

### Sécurité et réglementation (5i)

#### Quelles mesures de sécurité avez-vous mises en place pour protéger les données ou les processus dans votre projet ?
- **Aucune donnée personnelle n'est stockée dans le frontend.**
- **Les erreurs sont gérées dans `background.js`** pour éviter des défaillances de l'API.
- **Restriction d'accès dans `manifest.json`**, permettant uniquement des connexions sécurisées.

#### Quelles réglementations (par exemple, le RGPD) pourraient affecter l'utilisation de votre logiciel et comment les avez-vous prises en compte ?
Cela n'affecte pas actuellement car aucune donnée personnelle n'est stockée. Mais si des données utilisateur étaient stockées dans les futures versions, il faudrait ajouter des options de confidentialité pour se conformer au RGPD.

### Implication des THD dans l'entreprise et la production (2e)

#### Quel impact votre logiciel aurait-il dans un environnement commercial ou dans une usine industrielle ?
Cela pourrait être utile dans l'éducation ou dans des entreprises qui souhaitent évaluer leurs employés avec des questions aléatoires. Dans une usine industrielle, il pourrait être adapté pour afficher des rappels ou gérer des tâches automatisées.

#### Comment pensez-vous que votre solution pourrait améliorer les processus opérationnels ou la prise de décisions ?
Si elle est mise en œuvre dans une entreprise, elle pourrait automatiser l'apprentissage avec des questions générées dynamiquement. Elle servirait aussi de rappel automatique pour les tâches importantes.

#### Si votre projet ne s'applique pas directement aux affaires ou à la production, quels autres environnements pourraient en bénéficier ?
L'éducation est l'endroit où cela pourrait le mieux s'intégrer. Il pourrait être amélioré pour que les étudiants en programmation s'entraînent avec des tests personnalisés en fonction de leur niveau.

### Améliorations IT et OT (2f)

#### Comment votre logiciel pourrait-il faciliter l'intégration entre les environnements IT et OT ?
S'il est adapté pour une entreprise, il pourrait s'intégrer avec des systèmes d'alertes ou de surveillance pour automatiser les processus.

#### Quels processus spécifiques pourraient bénéficier de votre solution en termes d'automatisation ou d'efficacité ?
- **Rappels automatiques** pour la maintenance en usine.
- **Évaluations dynamiques** pour les employés utilisant OpenAI.
- **Automatisation des tâches** avec des alertes basées sur des délais prédéfinis.

#### Si cela ne s'applique pas à l'IT ou à l'OT, comment pourriez-vous l'adapter pour améliorer des processus technologiques spécifiques ?
Il pourrait se connecter à Google Calendar pour des rappels personnalisés ou à des API externes pour une gestion plus efficace du temps.

### Technologies habilitantes numériques (2g)

#### Quelles technologies habilitantes numériques (THD) avez-vous utilisées ou pourriez-vous intégrer dans votre projet ?
- **Intelligence Artificielle (OpenAI) :** Génère des questions de programmation en temps réel.
- **API Key :** Connecte l'extension à OpenAI à distance.
- **Stockage local (`chrome.storage`) :** Pourrait être utilisé dans de futures versions pour stocker des configurations.

#### Comment ces technologies améliorent-elles la fonctionnalité ou la portée de votre logiciel ?
- OpenAI permet d'avoir des questions dynamiques et différentes à chaque utilisation.
- Un système de stockage permettrait aux utilisateurs de conserver leur progression.
