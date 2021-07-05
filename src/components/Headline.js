import Button from "./Button"
export default function HeadLine() {
  return (
    <div className="head-line center-child mt-4 " >
        <div className="head-line-section" >
        A cross-L2 communication protocol for a multi-L2 future.
        </div>

        <div className="social-section" >
            <Button text="Contact us" />
            <Button text="Follow us on Twitter" outline={true} />
        </div>
    </div>
  )
}
