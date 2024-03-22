import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoHerdeiro = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao fontSize="14px" principal={false}>
        Outro Btn
      </Botao>

      <BotaoHerdeiro as="a" principal fontSize="12px">
        <span>Botao Herdeiro</span>
      </BotaoHerdeiro>
    </>
  )
}

export default Teste
