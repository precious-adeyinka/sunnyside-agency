import Head from "next/head";

// components

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Sunny Side Agency</title>
        <link rel="icon" href="/favicon.ico" />

        {/* META */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="agency, sunny side, landing page, creatives, brand, photography, designs"
        />
        <meta name="description" content="agency, sunny side" />
        <meta name="author" content="Precious Adeyinka" />
        <meta name="theme" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="h-auto w-full">
        <Home />
      </main>
    </div>
  );
}
