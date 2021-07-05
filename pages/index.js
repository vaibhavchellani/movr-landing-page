import Head from 'next/head'
import TopBar from '../src/components/TopBar'
import HeadLine from '../src/components/Headline'
import Footer from '../src/components/Footer'
import RoundArt from '../src/components/RoundArt'
import GridArt from '../src/components/GridArt'
export default function Home() {
  return (
   <div className="page" >
     <TopBar/>
     <HeadLine/>
     <Footer />
     <RoundArt/>
     <GridArt />

   </div>
  )
}
