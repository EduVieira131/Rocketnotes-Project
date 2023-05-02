import { Container, Links, Content } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            distinctio cupiditate nobis, voluptatibus, suscipit repellat dolores
            explicabo, commodi corporis totam voluptate error! Ratione eos
            assumenda expedita esse officia, tempore perferendis.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.linkexemplo.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.linkexemplo.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
