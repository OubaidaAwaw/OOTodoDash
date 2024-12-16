// import react hooks
import {useEffect ,useState} from 'react'

export default function useClickedAway(ref) {
  // Clicked out side value
  const [IsClickedOut, setClickedOut] = useState(false)
  useEffect(() => {
    /* handle if clicked outside element*/
    function handleClickOutside(e) {
      // if the same elements
      if (ref.current && !ref.current.contains(e.target))
        setClickedOut(true)
      else
        setClickedOut(false)
    }
    /* Add the event listener */
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    /* Remove the event listener on clean up */
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
    // return the state to allow control
  return [IsClickedOut,setClickedOut]
}
