import Image from "next/image";
import gitHubImage from "../../../public/static/imgs/git_hub.png"
import Link from "next/link";


export default function Footer(){
    return(
        <div className="
         flex flex-col bg-[#0d3b66] min-w-[100%] py-5 
         justify-center items-center gap-3 font-semibold">
         <div className="flex justify-center items-center gap-3 ">
            <a href="https://github.com/trabalhos-si-fiap/fe_happy_game" target="blank">
             <Image
             src={gitHubImage}
             width={50}
             height={50}
             alt="Logo picture"
             className="hover:scale-105"
           />
            </a>
          
          <a href="https://github.com/trabalhos-si-fiap/fe_happy_game" target="blank"
          className="hover:scale-105" >Github do projeto</a>
          </div>
          <Link href={'/'} className="hover:scale-105">Voltar ao topo da página</Link>
        </div>
    )
}