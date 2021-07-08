import Button from "./Button"
export default function HeadLine() {
  return (
    <div className="head-line center-child mt-48 md:mt-36" >
        <div className=" head-line-section text-2xl md:text-6xl " >
        Cross-L2 Interoperability Stack
        </div>

        <div className="social-section mt-2 md:mt-4" >
            <Button  onClick={()=> window.open('mailto:contact@movr.network')} text="Contact us" />
            <Button onClick={()=> window.open('https://twitter.com/movrnetwork')} text="Follow us on Twitter" outline={true} />
        </div>
    </div>
  )
}
