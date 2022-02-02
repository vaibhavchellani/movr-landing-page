import Button from "./Button"
export default function TopBar() {
  return (
    <div className="top-bar-grid relative z-20" >
        <div className="top-bar-logo" >
            <img className="top-bar-logo-image"  src="./socket.png" /> 
        </div>
        <div className="top-bar-button" >

        <Button onClick={()=> window.open('https://app.fund.movr.network')} text="FundMovr App" />
        </div>
    </div>
  )
}
