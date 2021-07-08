import Head from 'next/head'

export default function Footer() {
  return (
    <div className="center-child absolute bottom-8 left-0 right-0 footer z-20 ">
      <div className="footer-section-1 z-20 flex flex-row ">
        <div className="flex items-center justify-items-center">
          <img
            className="w-5 font-medium h-5 mx-2 justify-self-center"
            src="./time_icon.svg"
          />
        </div>
        <div  >STAY TUNED FOR MORE!</div>
      </div>
      {/* <div className="footer-section-2 z-20 ">
        <div>TWITTER</div>
        <div>FACEBOOK</div>
        <div>LINKDIN</div>
        <div>MAILUS</div>
      </div> */}
      <div className="footer-section-3 z-20 ">
        Movr Network - © 2021 All Rights Reserved.
      </div>
    </div>
  )
}
