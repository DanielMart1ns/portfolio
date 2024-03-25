import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'

import { Descricao, Botao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Daniel Martins</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        DanielMart1ns
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor de Software
      </Descricao>
      <Botao>Trocar tema</Botao>
    </SideBarContainer>
  </aside>
)

export default Sidebar
