# google formの自動返信機能

google formで入力した内容を、そのフォームに入力したアドレスに自動で返信する機能です。

(google formで送信された内容がspreadsheetに記録され、その最新のデータをメール送信する機能)


## 準備
・google form を作成して、それをgoogle spreadsheet と連携させてください。

・google spredsheet から、 「拡張機能」　→　「AppScript」 を選択

・「コード.js」に スクリプトを記述

・AppScriptのページからトリガーを選択

・イベントのソースを「スプレッドシートから」、イベントの種類を選択からを「フォーム送信時」に設定（確認ページがありますので許可してください）


## コードの説明

google フォームから送信されたら、スプレッドシートに反映されていると思います。
私の場合は以下になります。

<img width="906" alt="Screenshot 2023-04-06 9 28 50" src="https://user-images.githubusercontent.com/69481175/230243005-b5671efd-e8ff-4acf-a186-44f1ae7a17d8.png">


このデータを配列で格納し、1つずつ取り出しています。
```
  const time = values[0];  // 時刻
  const name = values[1];  // 名前
  const email = values[2];  // メール
  const occupationDesired = values[3];  //  希望職種
  const interviewMethod = values[4];  // 面談方法
  const others = values[5];  // その他 
 ```
 
 あとはお好みでカスタマイズしてください。
 
