import Header from "@/components/templates/header";
import Image from "next/image";
import primeiraImagem from "../../public/static/imgs/implementacao.png"
import segundaImagem from "../../public/static/imgs/quem_somos-removebg-preview.png"
import Link from "next/link";
import Container from "@/components/templates/Container";
import TextContainer from "@/components/templates/TextContainer";
import LargeButton from "@/components/LargeButton";

export default function Home() {
  return (
      <div>
         <Header></Header>
         <div className="flex flex-col items-center gap-7">

          #Primeira parte do conteudo principal começa aqui
          <Container>
          <Image
              src={primeiraImagem}
              width={500}
              height={500}
              alt="Homem usando computador"
            />
            <TextContainer>
              <h1 className="font-black text-3xl m-auto">Implementação de projeto</h1>
              <p className=" text-justify">
                Somos um site focado em oferecer os melhores jogos digitais para aprendizado. 
                Nosso objetivo é proporcionar uma experiência envolvente e educativa, onde cada 
                jogo é cuidadosamente selecionado para promover o desenvolvimento cognitivo e 
                habilidades essenciais de forma divertida e acessível.
              </p>
              <LargeButton link={'/'} className={'bg-orange-400 border-orange-400'}>Jogue agora</LargeButton>
            </TextContainer>
          </Container>
          #Primeira parte do conteudo principal termina aqui
        
          #Segunda parte do conteudo da pagina home começa aqui
          <Container>
            <TextContainer>
              <h1 className="font-black text-3xl m-auto">Quem Somos</h1>
              <p className="text-justify">Somos uma equipe dedicada à divulgação e criação de jogos educativos 
                inovadores, reunindo paixão pela aprendizagem e compromisso com a inclusão. 
                Nossa missão é oferecer experiências interativas que não apenas ensinam conceitos 
                importantes,mas também celebram a diversidade e promovem um ambiente acolhedor para 
                todos os jogadores, independentemente de suas origens ou habilidades.
              </p>
              <LargeButton link={'/'} className={'bg-blue-800 border-blue-800'}>Ver sobre nós</LargeButton>
            </TextContainer>
            <Image
              src={segundaImagem}
              width={500}
              height={500}
              alt="Homem usando computador"
            />
          </Container>
          #Segunda parte do conteudo da pagina home termina aqui 
         </div>
      </div>
  )
}
