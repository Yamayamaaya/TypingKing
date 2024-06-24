import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          {/* ページの説明 */}
          <meta name="description" content="タイピング王に俺はなる！" />
          {/* OGP (Open Graph Protocol) タイトル */}
          <meta property="og:title" content="TypingKing" />
          {/* OGP 説明 */}
          <meta property="og:description" content="タイピング王に俺はなる！" />
          {/* OGP タイプ */}
          <meta property="og:type" content="website" />
          {/* OGP URL */}
          <meta
            property="og:url"
            content="https://typingking-3d19d.web.app/signin"
          />
          {/* OGP 画像 */}
          <meta property="og:image" content="/favicon.ico" />
          {/* OGP サイト名 */}
          <meta property="og:site_name" content="TypingKing" />
          {/* OGP ロケール */}
          <meta property="og:locale" content="ja_JP" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
