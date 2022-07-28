import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Alex Barbosa</Name>
        <Function>Desenvolvedor FullStack / Administrador</Function>
        <Intro>Técnico em Programação - Javascript e Typescript.  
          Front-end e back-end (Full Stack) - Node, Express, noSQL, 
          React, hooks, Redux, Design Patterns.
          Além disto boas práticas como Manisfesto Ágil, Scrum, 
          CICD-Pepiline, Git - Versionamento, Prettier, Lint.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/perfil.jpg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}