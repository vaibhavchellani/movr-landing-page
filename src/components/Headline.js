import Button from "./Button"
export default function HeadLine() {
  return (
    <div className="overflow-hidden zerome absolute flex items-center justify-center  head-line center-child" >
        <div className=" head-line-section text-2xl md:text-3xl lg:text-6xl " >
      Movr is now <img className="inline-block h-36"  src='./socket.png'/>
        </div>

        <div className="social-section mt-2 md:mt-4" >
            <Button  onClick={()=> window.open('https://socket.tech')} text="Visit Socket.tech" />
            <Button onClick={()=> window.open('https://twitter.com/socketdottech')} text="Follow us on Twitter" outline={true} />
        </div>
    </div>
  )
}
