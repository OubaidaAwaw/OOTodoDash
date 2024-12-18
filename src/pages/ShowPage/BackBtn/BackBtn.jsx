  // import css files
import "./BackBtn.css"

  // import react router components
import { Link } from "react-router-dom"

export default function BackBtn() {
  return (
    <div className="between row backContainer">
      <Link to={"/"} className="gap20 row linkText">
        <svg width={20} height={20} fill="#4880FF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path d="M78.1 0v6.2c22.4 0 40.5 18.2 40.5 40.6s-18.1 40.6-40.5 40.6H17.9l27.9-28-4.5-4.5L5.5 90.8l36 36.2 4.5-4.5-28.8-28.9h60.9c25.8 0 46.7-21 46.7-46.8S103.9 0 78.1 0z"/>
        </svg>
        Back To Home
      </Link>
      <button onClick={() => window.print()} type="button" className="printButton center">
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.6 0H14.4V3.6H3.6V0ZM2.7 4.5H15.3C16.794 4.5 18 5.706 18 7.2V12.6H14.4V16.2H3.6V12.6H0V7.2C0 5.706 1.206 4.5 2.7 4.5ZM5.4 14.4H12.6V9.9H5.4V14.4ZM15.3 8.1C14.805 8.1 14.4 7.695 14.4 7.2C14.4 6.705 14.805 6.3 15.3 6.3C15.795 6.3 16.2 6.705 16.2 7.2C16.2 7.695 15.795 8.1 15.3 8.1Z" fill="#202224"/>
        </svg>
      </button>
    </div>
  )
}
