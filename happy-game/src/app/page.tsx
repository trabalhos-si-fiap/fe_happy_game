import Header from "@/components/templates/header";
import Image from "next/image";
import primeiraImagem from "../../public/static/imgs/implementacao.png"
import segundaImagem from "../../public/static/imgs/quem_somos-removebg-preview.png"
import Link from "next/link";
import Container from "@/components/templates/Container";
import TextContainer from "@/components/templates/TextContainer";

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
              <Link href={"/"} 
              className="
              text-center bg-orange-400 px-4 py-4 rounded-md font-semibold cursor-pointer 
              w-1/2 m-auto hover:bg-transparent border-4 border-orange-400 ">
                <span>Jogue agora</span>
              </Link>
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
              <Link href={"/"} 
              className="
              text-center bg-blue-800 px-4 py-4 rounded-md font-semibold cursor-pointer 
              w-1/2 m-auto hover:bg-transparent border-4 border-blue-800 ">
                <span>Jogue agora</span>
              </Link>
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
