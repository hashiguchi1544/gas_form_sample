function onFormSubmit(){
  const lessonSheet = SpreadsheetApp.getActiveSheet();

  const lastRow = lessonSheet.getLastRow();
  const lastCol = lessonSheet.getLastColumn();

  const sRanage = lessonSheet.getRange(lastRow, 1, 1, lastCol);
  const values = sRanage.getValues()[0];

  const time = values[0];
  const name = values[1];
  const email = values[2];
  const occupationDesired = values[3];
  const interviewMethod = values[4];
  const others = values[5];


  const mailSubject = "採用の申し込みありがとうございます";
  const body = "採用についてのお問い合わせいただきありがとうございます。" + "\n" +
"採用担当者が確認後、3営業日以内に登録したメールアドレスに返信させていただきます。" + "\n" +
 "\n" +
 "\n" +
"万が一返信がない場合は、お手数ですが電話にてお問い合わせをお願いいたします。"  + "\n" +
 "\n" +
 "\n" +
"下記の内容で受け付けました。"  + "\n" +
 "\n" +
"【お名前】" + "\n" +
name  + "\n" +
"\n" +
"【メールアドレス】" + "\n" +
email + "\n" +
 "\n" +
"【希望する職種】" + "\n" +
occupationDesired  + "\n" +
 "\n" +
"【面談方法】" + "\n" +
interviewMethod  + "\n" +
"\n" +
"【その他】" + "\n" +
others + "\n" +
"\n" +
"【問い合わせ時刻】" + "\n" +
time + "\n" +
"\n" +
"--------------------------------" + "\n" +
"株式会社〇〇○○　採用担当" + "\n" +
 "\n" +
"〒△△△-△△△△"  + "\n" +
"〇〇県~" + "\n" +
 "\n" +
"電話番号" + "\n" +
 "\n" +
"Webサイト" + "\n" +
"\n" +
"--------------------------------" + "\n";

  MailApp.sendEmail(email, mailSubject, body);
}