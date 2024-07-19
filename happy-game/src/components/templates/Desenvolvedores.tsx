
import dev1 from "../../../public/static/imgs/sobre/caique.png"
import DevCard from "../DevCard";
import dev2 from "../../../public/static/imgs/sobre/elias.jpeg"
import dev3 from "../../../public/static/imgs/sobre/murilo.png"
import dev4 from "../../../public/static/imgs/sobre/rafael_costrov.jpeg"
import dev5 from "../../../public/static/imgs/sobre/1654609925905.jpg"


export default function Desenvolvedores(){
    return(
        <div className="text-black flex flex-col items-center gap-7">
            <h1 className="text-3xl font-black">Desenvolvedores</h1>
            <div className="flex min-w-screen gap-10 justify-center items-center">
                <DevCard
                 src={dev1}
                 alt={"Caique Carneiro"}
                 link={'https://www.linkedin.com/in/caique-franco-3981b32b7/'}
                 >Caique Carneiro
                </DevCard>
                <DevCard
                 src={dev2}
                 alt={"Elias Moura"}
                 link={'https://www.linkedin.com/in/elias-s-moura/'}
                 >Elias Moura
                </DevCard>
                <DevCard
                 src={dev3}
                 alt={"Murilo Godoi"}
                 link={'https://www.linkedin.com/in/murilo-godoi-a0299523a'}
                 >Murilo Godoi
                </DevCard>
                <DevCard
                 src={dev4}
                 link={'https://www.linkedin.com/in/rafael-costrov/'}
                 alt={"Rafael Costrov"}>
                 Rafael Costrov
                </DevCard>
                <DevCard
                 src={dev5}
                 link={'https://www.linkedin.com/in/marcella-esteves-9182ab241/'}
                 alt={"Marcella Lara"}>
                 Marcella Lara
                </DevCard>
            </div>
        </div>
    )
}