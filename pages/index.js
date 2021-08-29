import Head from "next/head";

// components
import Home from '../components/views/Home/Home';

export default function Index() {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Sunny Side Agency</title>
        <link rel="icon" href="/assets/images/favicon-32x32.png" />

        {/* META */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="agency, sunny side, landing page, creatives, brand, photography, designs"
        />
        <meta name="description" content="agency, sunny side" />
        <meta name="author" content="Precious Adeyinka" />
        <meta name="theme" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* Icons */}
        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" 
        integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" />

        {/* Fonts */}

        {/* Fraunces */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces&display=swap" rel="stylesheet" />

        {/* Barlow */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
      </Head>

      <main className="h-auto w-full">
        <Home />
      </main>
    </div>
  );
}
