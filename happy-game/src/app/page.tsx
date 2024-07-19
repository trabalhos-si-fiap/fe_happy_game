import Header from "@/components/templates/header";
import Image from "next/image";
import primeiraImagem from "../../public/static/imgs/implementacao.png"
import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
      <div>
         <Header></Header>
         <div className="flex flex-col items-center">
          <div className="flex w-3/4  items-center justify-between">
            <Image
              src={primeiraImagem}
              width={500}
              height={500}
              alt="Homem usando computador"
            />
            <div className="w-2/5 flex flex-col gap-5" >
              <h1 className="font-black text-3xl m-auto">Implementação de projeto</h1>
              <p className=" text-justify">
                Somos um site focado em oferecer os melhores jogos digitais para aprendizado. 
                Nosso objetivo é proporcionar uma experiência envolvente e educativa, onde cada 
                jogo é cuidadosamente selecionado para promover o desenvolvimento cognitivo e 
                habilidades essenciais de forma divertida e acessível.
              </p>
              <Link href={"/"} 
              className=
              "text-center bg-orange-400 px-4 py-4 rounded-md font-semibold cursor-pointer w-1/2 m-auto hover:bg-transparent border-4 border-orange-400 ">
                <span>Jogue agora</span>
              </Link>
            </div>
          </div>
         </div>
      </div>
  )
}
