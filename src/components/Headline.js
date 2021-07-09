import Button from "./Button"
export default function HeadLine() {
  return (
    <div className="overflow-hidden zerome absolute flex items-center justify-center  head-line center-child" >
        <div className=" head-line-section text-2xl md:text-3xl lg:text-6xl " >
        A cross-L2 communication protocol for a multi-L2 future
        </div>

        <div className="social-section mt-2 md:mt-4" >
            <Button  onClick={()=> window.open('mailto:contact@movr.network')} text="Contact us" />
            <Button onClick={()=> window.open('https://twitter.com/movrnetwork')} text="Follow us on Twitter" outline={true} />
        </div>
    </div>
  )
}
