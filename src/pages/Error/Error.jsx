  // import css files
import './Error.css'

  // impor react router components
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className='errorPageContainer center'>
      <div className="cardContaienr col gap30 center">
        <img width={260} height={200} src={require("./../../assets/Images/Err404.webp")} alt="Looks like you’ve got lost…."/>
        <p className="H4D">Looks like you've got lost...</p>
        <Link className='linkHomePage center' to={"/"}>Back To Home</Link>
      </div>
    </div>
  )
}
