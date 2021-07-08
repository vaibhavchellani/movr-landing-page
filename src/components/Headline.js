import Button from "./Button"
export default function HeadLine() {
  return (
    <div className="head-line center-child mt-24 " >
        <div className="text-7xl head-line-section " >
        A cross-L2 communication protocol for a multi-L2 future.
        </div>

        <div className="social-section mt-2" >
            <Button text="Contact us" />
            <Button text="Follow us on Twitter" outline={true} />
        </div>
    </div>
  )
}
