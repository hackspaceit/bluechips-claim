import Head from "next/head";

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
const title = "Free Nouns Holographic NFT Mint";
const frameImgUrl = `${HOST_URL}/nounsholo.gif`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="fc:frame" content="vNext"/>
        <meta name="fc:frame:image" content={frameImgUrl}/>
        <meta name="fc:frame:image:aspect_ratio" content="1:1"/>
        <meta name="fc:frame:button:1" content="Mint NFT for Free"/>
        <meta property="fc:frame:button:1:action" content="tx"/>
        <meta 
          property="fc:frame:button:1:target"
          content={`${HOST_URL}/api/frame/op/get-tx-frame`}
        />
      </Head>
      <h1>Blue Chipset NFT</h1>
    </>
  );
}
