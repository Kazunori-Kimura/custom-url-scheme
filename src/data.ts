export const content = `
# Windows 11 でカスタム URL スキームを使用してメモ帳（notepad.exe）を起動する

Windows 11 でカスタム URL スキームを使用してメモ帳（notepad.exe）を起動するための具体的な手順は以下の通りです。この例では、カスタム URL スキームとして \`mynotepad://\` を使用します。

## ステップ 1: レジストリエディタの開始

1. **レジストリエディタを開く**:
    - \`Windows\` キー + \`R\` を押して「実行」ダイアログを開きます。
    - \`regedit\` と入力し、\`Enter\` キーを押してレジストリエディタを開きます。

## ステップ 2: レジストリの編集

2. **新しいレジストリキーの作成**:

    - レジストリエディタで、\`HKEY_CLASSES_ROOT\` を展開します。
    - 右クリックして「新規」＞「キー」を選択し、新しいキーとして \`mynotepad\` を作成します。

3. **カスタム URL スキームの設定**:

    - \`mynotepad\` キーを選択し、右側の領域で \`(既定)\` の値をダブルクリックします。
    - 値のデータに「URL:mynotepad」と入力し、\`OK\` をクリックします。
    - \`mynotepad\` キーの中に新しい文字列値を作成し、名前を \`URL Protocol\` とし、値は空のままにします。

4. **コマンドキーの作成**:
    - \`mynotepad\` キーの中に新しいキー \`shell\` を作成します。
    - \`shell\` の中に新しいキー \`open\` を作成します。
    - \`open\` の中に新しいキー \`command\` を作成します。
    - \`command\` キーを選択し、右側の \`(既定)\` の値をダブルクリックします。
    - 値のデータに \`notepad.exe\` と入力し、\`OK\` をクリックします。

## ステップ 3: Web ページのリンク作成

5. **HTML でのリンク設定**:
    - Web ページに以下のようなリンクを設定します。

\`\`\`html
<a href="mynotepad://">メモ帳を開く</a>
\`\`\`

## 注意点

-   **セキュリティ**: レジストリの編集は慎重に行ってください。誤った編集はシステムに影響を与える可能性があります。
-   **テスト**: 変更を行った後は、リンクが正しく機能するかを確認してください。
-   **管理者権限**: レジストリの編集には管理者権限が必要です。

この手順により、カスタム URL スキームを使用してメモ帳を起動することができます。

---

## 参考

-   [URI に応じた既定のアプリの起動 - UWP applications | Microsoft Learn](https://learn.microsoft.com/ja-jp/windows/uwp/launch-resume/launch-default-app)
-   [ブラウザ上のリンクから任意のデスクトップアプリのファイルを開けると超便利 #初心者 - Qiita](https://qiita.com/kojimadev/items/74100c8557a92939ef69)
`;