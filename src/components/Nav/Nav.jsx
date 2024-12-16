  // import css files
import './Nav.css'

  // import comonents
import LinksContainer from './components/LinksContainer/LinksContainer'
import Logo from './components/Logo/Logo'

export default function Nav() {
  return (
    <nav role='navigation' className='navContainer col gap10'>
      <Logo/>
      <LinksContainer/>
    </nav>
  )
}
