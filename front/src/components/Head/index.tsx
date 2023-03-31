import Head from "next/head";

type Props = {
  title: string;
  description: string;
  mainUrl: string;
  twitterHandle: string;
  author: string;
};

function HeadPage({
  title,
  description,
  mainUrl,
  twitterHandle,
  author,
}: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={mainUrl} />
      <meta property="og:image" content={`${mainUrl}/thumbnail-large.png`} />
      <meta property="og:image:alt" content={title} />
      <meta property="fb:image" content={`${mainUrl}/thumbnail-large.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${mainUrl}/thumbnail-twitter.png`} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      <link rel="canonical" href={mainUrl} />
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

export default HeadPage;
