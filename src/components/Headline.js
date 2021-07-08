import Button from "./Button"
export default function HeadLine() {
  return (
    <div className="head-line center-child mt-48 md:mt-24" >
        <div className=" head-line-section text-2xl md:text-6xl " >
        A cross-L2 communication protocol for a multi-L2 future.
        </div>

        <div className="social-section mt-2 md:mt-4" >
            <Button text="Contact us" />
            <Button text="Follow us on Twitter" outline={true} />
        </div>
    </div>
  )
}
