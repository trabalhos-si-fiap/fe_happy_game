import Image from "next/image"
import bgImg from "../../../public/static/imgs/bg-image.jpg"
import Link from "next/link"
import LargeButton from "@/components/LargeButton"

export default function PaginaDeCadastro(){
    return(
        <div className="flex">
            <div className="w-1/2">
                <Image
                src={bgImg}
                alt="Backgrund"
                className="max-h-screen"
                />
            </div>
            <div className="w-5/6 bg-orange-400 shadow-2xl flex flex-col px-24 py-8 gap-5">
            <h1 className="text-3xl font-black">Crie a sua conta</h1>
            <form action="" className="flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                    <input
                     type="text"
                     name="nome"
                     id="id_nome"
                     placeholder="Nome completo"
                     className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                      placeholder:text-white outline-2 outline-orange-500"
                     />
                    <input
                     type="email"
                     name="email"
                     id="id_email"
                     placeholder="Endereço de email"
                     className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                      placeholder:text-white outline-2 outline-orange-500"
                     />
                    <input
                     name="data_de_nascimento"
                     id="id_dtnasc"
                     placeholder="Data de Nacimento"
                     className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                      placeholder:text-white outline-2 outline-orange-500"
                     />
                    <input
                     type="text"
                     name="usuario"
                     id="id_usuario"
                     placeholder="Nome de usuário"
                     className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                      placeholder:text-white outline-2 outline-orange-500"
                     />
                    <input
                     type="password"
                     name="senha"
                     id="id_senha"
                     placeholder="Digite uma senha"
                     className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                      placeholder:text-white outline-2 outline-orange-500"
                     />
                    <input
                     type="password"
                     name="conf_senha"
                     id="conf_senha"
                     placeholder="Confirmar Senha"
                     className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                      placeholder:text-white outline-2 outline-orange-500"
                     />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="termos_de_uso" id="id_termos"/>
                        <label htmlFor="id_termos">Li e aceito os termos de uso</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="autorizacao_parental" id="id_parental" />
                        <label htmlFor="id_parental">Termos de autorização para menores de idade</label>
                    </div>
                </div>

                <LargeButton link={"/"} className="
                bg-blue-500 border-none hover:bg-blue-400">Continuar</LargeButton>
            </form>

            <span>Já tem uma conta? <Link href={'/login'} className=" font-black hover:text-blue-500"> Entrar</Link></span>
            </div>
        </div>
    )
}