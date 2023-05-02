import { Container, Profile, Logout } from './styles'
import {RiShutDownLine} from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/EduVieira131.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Eduardo Vieira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
