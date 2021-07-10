import Head from 'next/head'
import TopBar from '../src/components/TopBar'
import HeadLine from '../src/components/Headline'
import Footer from '../src/components/Footer'
import RoundArt from '../src/components/RoundArt'
import GridArt from '../src/components/GridArt'
import ClipArt from '../src/components/ClipArt'
export default function Home() {
  return (
    <>
      <Head>
        <title>Movr</title>
        <link
          rel="preload"
          href="/fonts/Konnect-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="preload"
          href="/fonts/Konnect-Medium.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Konnect-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
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
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="title" content="Movr Network" />
        <meta name="description" content="Cross-L2 Interoperability Stack" />
        <meta
          name="keywords"
          content="Cross-L2, Mulit-Chain, Multi-L2, Layer 2, Cross-L2 Composability, Interoperability, Cross-L2 Interoperability"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days"></meta>
        <title>Movr Network</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://movr.network" />
        <meta property="og:title" content="Movr Network" />
        <meta
          property="og:description"
          content="Cross-L2 Interoperability Stack"
        />
        <meta
          property="og:image"
          content="https://movr-frontend.vercel.app/3.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://movr.network" />
        <meta property="twitter:title" content="Movr Network" />
        <meta
          property="twitter:description"
          content="Cross-L2 Interoperability Stack"
        />
        <meta
          property="twitter:image"
          content="https://movr-frontend.vercel.app/3.png"
          />
      </Head>
      <TopBar />
      <HeadLine />
      <Footer />
      <RoundArt />
      <GridArt />
      <ClipArt />
    </>
  )
}
