
<h2 align="center">🌐 他の言語</h2>

<p align="center">
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Spanish">
    🇪🇸 <strong>スペイン語</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/French">
    🇫🇷 <strong>フランス語</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Japanese">
    🇯🇵 <strong>日本語</strong>
  </a>
</p>

<h1 align="center">⏰ PythonClocker</h1>

<p align="center">
  <em>なぜなら、Pythonを学ぶ唯一の方法は、Pythonで目を覚ますことだからです。</em>
</p>

<p align="center">
  このアイデアは、18歳の少年がプログラミングを学び始めた時に生まれました。<br>
  すべては順調でしたが... Python、そのインタープリター言語は、時には簡単で、<br>
  時には完全な悪夢のようです。<br><br>
  <strong>だから、これがあなたの解決策です！！</strong><br>
  このブラウザ拡張機能は、あなたの科目を救います — あなたがプログラムを解決するまで止められない目覚まし時計です。
</p>

--- 

<p align="center">
  <a href="https://chromewebstore.google.com/detail/kobehbnioildglecmfabpelnjnemihpn?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/🚀 デモ-PythonClocker-blue?style=for-the-badge" alt="デモ">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/wiki">
    <img src="https://img.shields.io/badge/📘 Wiki-ドキュメント-green?style=for-the-badge" alt="Wiki">
  </a>
</p>

## 拡張機能の意味
拡張機能は、ブラウジング体験をカスタマイズする小さなソフトウェアプログラムです。ユーザーがブラウザの機能や動作を個別のニーズや好みに合わせてカスタマイズすることを可能にします。

## 拡張機能の編集

1. `server.js`ファイルで`TU-APYKEY`を変更
2. `background.js`ファイルで`TU-APYKEY`を変更
3. APIキーはMoodleファイルで確認できます。

## 拡張機能のインストール方法

1. [ここをクリック](https://github.com/erneupa/PythonClocker/blob/main/PYTHONCLOCKER.zip)して拡張機能をダウンロード
2. `chrome://extensions/`にアクセス
3. この機能を有効にします ![1](https://github.com/erneupa/PythonClocker/blob/main/assets/1a.png)
4. ここで拡張機能を追加します ![2](https://github.com/erneupa/PythonClocker/blob/main/assets/2a.png)
5. ローカルサーバーをインストール

## ローカルサーバーのインストール方法
### node.jsをダウンロード
    1. [このURL](https://nodejs.org/en)にアクセス
    2. アプリをダウンロードしてインストール
1. Windowsコンソールを開く
2. コンソールを使用して拡張機能のフォルダにアクセス
3. 次のコードをコピーして貼り付けます：```npm install node-fetch@2```
4. 次のコードをコピーして貼り付けます：```npm install express cors```
5. 次のコードをコピーして貼り付けます：```node server.js```

**拡張機能を使用するには!!**

## 使用例


## 質問

### データライフサイクル (5b)

#### プロジェクトでデータが生成されてから削除されるまで、どのように管理されていますか？
この拡張機能では、ユーザーが時計に時間を設定したとき、またはOpenAIに質問をリクエストしたときにデータが生成されます。データは永続的に保存されず、拡張機能がアクティブな間だけ使用され、終了時に消えます。

#### データの一貫性と整合性を保証するための戦略は何ですか？
- 時間と分はカウントダウンを開始する前に検証されます。
- OpenAIの応答はJSON構造のエラーを避けるために適切に処理されます。
- `background.js`ではAPIのエラーをキャッチして、不正な応答を処理します。

### クラウドストレージ (5f)

#### ソフトウェアでクラウドストレージを使用している場合、データのセキュリティと可用性はどのように保証されていますか？
- OpenAIへのすべてのリクエストにHTTPSを使用
- アクセス可能なファイルに機密データは保存されません。
- 将来のバージョンでセキュリティを強化するために認証を統合することができます。

#### データ保存のために考慮した代替案と、現在の解決策を選んだ理由は何ですか？
`chrome.storage`や独自のサーバーにデータを保存することも考えましたが、拡張機能には永続性が必要ないため、メモリにすべてを保持する方が速いと判断しました。

#### クラウドを使用しない場合、将来的にどのように統合できますか？
Google DriveやFirebaseと接続して、ユーザーが任意のデバイスから質問と回答の履歴にアクセスできるようにすることができます。

