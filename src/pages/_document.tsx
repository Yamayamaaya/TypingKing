import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          {/* ページの説明 */}
          <meta name="description" content="ここにページの説明を入力" />
          {/* OGP (Open Graph Protocol) タイトル */}
          <meta property="og:title" content="ここにサイトのタイトルを入力" />
          {/* OGP 説明 */}
          <meta property="og:description" content="ここにサイトの説明を入力" />
          {/* OGP タイプ */}
          <meta property="og:type" content="website" />
          {/* OGP URL */}
          <meta property="og:url" content="ここにサイトのURLを入力" />
          {/* OGP 画像 */}
          <meta property="og:image" content="ここにOGP画像のパスを入力" />
          {/* OGP サイト名 */}
          <meta property="og:site_name" content="ここにサイト名を入力" />
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
