# 簡単なChat GPT　APIを使用するアプリ

## 概要
React+chat gptで簡単なチャットボットを作成しました。
動作の確認用のため現在は簡素なUIとなっています。
ブラウザのアラートにレスポンス結果を返す使用になっています。

## 使いかた

リポジトリのクローン

```bash
git clone https://github.com/mittiiiiiiiii/React-gptAPI.git
```

プロジェクトのルートディレクトリに.envを作成してください。
そこにメモしたChat GPTのAPIを記載してください。

.envファイルの設定

```bash
REACT_APP_OPENAI_API_KEY="my-api-key"
```

npm startもしくはyarn startで実行できます

```bash
npm start
```

```bash
yarn start
```

もし、reactモジュールが見つからないという問題が発生しているときは下のコマンドを実行してください。
(yarnの場合)
```bash
rm -rf node_modules
rm yarn.lock
yarn install
yarn start
```