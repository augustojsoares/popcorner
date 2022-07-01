import { LinkUI, LogoUI, TitleUI } from 'components/Header/styles'
import logo from 'assets/logo.webp'

export default function Header() {
  return (
    <header>
      <LinkUI to="/">
        <LogoUI src={logo} />
        <TitleUI>Popcorner</TitleUI>
      </LinkUI>
    </header>
  )
}
