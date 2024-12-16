  // import css files
import "./LinksContainer.css"

  // import components
import NavigationLink from '../NavigationLink/NavigationLink'

  // import react router hooks
import { useLocation } from "react-router-dom"

  // import react redux hooks
import { useSelector } from "react-redux"

  // import react redux data
import { draft } from "../../../../states/slices/TodoListSlice"

  // import react hooks
import { useEffect, useState } from "react"

export default function LinksContainer() {
    // declare the location
  const location = useLocation()
    // if editing page show me
  const sigmentNew = location.pathname.split("/").pop().toString() === "new-to-do"
    // get the draft and check if there is
  const draftData = useSelector(draft)
    // declare the notification draft
  const [isDraft, setDraftIs] = useState(false)
    // first load notific
  useEffect(() => {
    if(draftData.title !== "" || draftData.attachments !== "" || draftData.content?.length !== 0)
      setDraftIs(true)
    else
      setDraftIs(false)
  } ,[draftData])
  return (
    <div className="col gap10">
      <NavigationLink className={"row gap30"} to={"/"}>
        <svg id='list' width="15" height="18" viewBox="0 0 15 18"  xmlns="http://www.w3.org/2000/svg">
          <path d="M5.50781 2.1875C5.88021 1.27083 6.48177 0.8125 7.3125 0.8125C8.14323 0.8125 8.74479 1.27083 9.11719 2.1875H10.75H11.4375H13.5H14.1875V2.875V17.3125V18H13.5H1.125H0.4375V17.3125V2.875V2.1875H1.125H3.1875H3.875H5.50781ZM7.78516 2.40234C7.67057 2.25911 7.51302 2.1875 7.3125 2.1875C7.11198 2.1875 6.9401 2.25911 6.79688 2.40234C6.68229 2.51693 6.625 2.67448 6.625 2.875V3.5625H5.9375H4.5625V4.9375H10.0625V3.5625H8.6875H8V2.875C8 2.67448 7.92839 2.51693 7.78516 2.40234ZM1.8125 3.5625V16.625H12.8125V3.5625H11.4375V5.625V6.3125H10.75H3.875H3.1875V5.625V3.5625H1.8125Z" fill="#202224"/>
        </svg>
        To-Do
      </NavigationLink>

      <NavigationLink className={"row gap30"} to={"/saved"}>
        <svg id='savedstar' width="18" height="18" viewBox="0 0 28 28" fill='none' xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.8401 1.51507L18.7064 9.175L26.148 9.91222C26.5097 9.94228 26.8209 10.18 26.945 10.5211C27.0692 10.8622 26.9835 11.2444 26.7257 11.4999L20.6015 17.5698L22.8721 25.8179C22.967 26.1753 22.8434 26.5551 22.5564 26.7882C22.2694 27.0213 21.8724 27.0644 21.5421 26.8983L13.9977 23.1625L6.4637 26.8937C6.13337 27.0598 5.73633 27.0167 5.44934 26.7836C5.16236 26.5504 5.03881 26.1707 5.1337 25.8133L7.4043 17.5652L1.27543 11.4953C1.01761 11.2398 0.931977 10.8576 1.05611 10.5165C1.18023 10.1754 1.49144 9.93766 1.85319 9.90759L9.29472 9.17037L13.1553 1.51507C13.3172 1.1989 13.6425 1 13.9977 1C14.3529 1 14.6782 1.1989 14.8401 1.51507Z" stroke="#B3B3B3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Saved
      </NavigationLink>

      <NavigationLink className={"row gap30"} to={"/checked"}>
        <svg id='doneList' width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.04688 0.359375L6.07812 1.39062L3.32812 4.14062L2.8125 4.57031L2.29688 4.14062L0.921875 2.76562L1.95312 1.73438L2.8125 2.63672L5.04688 0.359375ZM8.3125 1.5625H17.25V2.9375H8.3125V1.5625ZM5.04688 5.85938L6.07812 6.89062L3.32812 9.64062L2.8125 10.0703L2.29688 9.64062L0.921875 8.26562L1.95312 7.23438L2.8125 8.13672L5.04688 5.85938ZM8.3125 7.0625H17.25V8.4375H8.3125V7.0625ZM5.04688 11.3594L6.07812 12.3906L3.32812 15.1406L2.8125 15.5703L2.29688 15.1406L0.921875 13.7656L1.95312 12.7344L2.8125 13.6367L5.04688 11.3594ZM8.3125 12.5625H17.25V13.9375H8.3125V12.5625Z" fill="#202224"/>
        </svg>
        Checked
      </NavigationLink>

      <NavigationLink className={"row gap30"} to={"/bin"}>
        <svg id='binList' width="18" height="16" viewBox="0 0 18 16"  xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.2001 15.4H4.8001C4.13736 15.4 3.6001 14.8628 3.6001 14.2V3.40002H14.4001V14.2C14.4001 14.8628 13.8628 15.4 13.2001 15.4Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.20029 11.8V7" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.8004 11.8V7" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.2002 3.4H16.8002" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Bin
      </NavigationLink>

      <NavigationLink className={`row gap30`} to={"/new-to-do"}>
        {(isDraft && !sigmentNew) && <div className={"notific"}></div>}
        <svg id='newList' width="18" height="18" viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7933 2.20666C15.3346 1.74992 14.7124 1.49543 14.0651 1.49981C13.4178 1.50419 12.7991 1.76708 12.3467 2.22999L2.68 11.8967L1.5 16.5L6.10333 15.3193L15.77 5.65266C16.233 5.20039 16.496 4.58177 16.5004 3.93452C16.5048 3.28728 16.2502 2.66515 15.7933 2.20666Z" stroke="#202224" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.0708 2.50665L15.4935 5.92932" stroke="#202224" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.68066 11.896L6.10666 15.316" stroke="#202224" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        New To-Do
      </NavigationLink>
    </div>
  )
}