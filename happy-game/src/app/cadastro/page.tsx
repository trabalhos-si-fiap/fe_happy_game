import Image from "next/image";
import bgImg from "../../../public/static/imgs/bg-image.jpg";
import Link from "next/link";
import CampoCadastro from "@/components/CampoCadastro";

export default function PaginaDeCadastro() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Image src={bgImg} alt="Backgrund" className="max-h-screen" />
      </div>
      <div className="w-5/6 bg-orange-400 shadow-2xl flex flex-col px-24 py-8 gap-5">
        <h1 className="text-3xl font-black">Crie a sua conta</h1>
        <form action="" className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <CampoCadastro
             tipo        = {"text"}
             nome        = {"nome"}
             id          = {"id_nome"}
             placeholder = {"Nome completo"}
            />
             <CampoCadastro
             tipo        = {"email"}
             nome        = {"email"}
             id          = {"id_email"}
             placeholder = {"Endereço de email"}
            />
            <CampoCadastro
             tipo        = {"text"}
             nome        = {"data_de_nascimento"}
             id          = {"id_dtnasc"}
             placeholder = {"Data de nascimento"}
            />
            <CampoCadastro
             tipo        = {"text"}
             nome        = {"usuario"}
             id          = {"id_usuario"}
             placeholder = {"Nome de usuário"}
            />
           <CampoCadastro
             tipo        = {"password"}
             nome        = {"senha"}
             id          = {"id_senha"}
             placeholder = {"Digite uma senha"}
            />
           <CampoCadastro
             tipo        = {"password"}
             nome        = {"conf_senha"}
             id          = {"id_conf_senha"}
             placeholder = {"Confirmar senha"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="termos_de_uso" id="id_termos" />
              <label htmlFor="id_termos">Li e aceito os termos de uso</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="autorizacao_parental"
                id="id_parental"
              />
              <label htmlFor="id_parental">
                Termos de autorização para menores de idade
              </label>
            </div>
          </div>
          <button
            className="
                border-none bg-blue-500 py-2 w-1/2 rounded-md items-center m-auto
                hover:bg-blue-400"
          >
            Continuar
          </button>
        </form>
        <span>
          Já tem uma conta?{" "}
          <Link href={"/login"} className=" font-black hover:text-blue-500">
            Entrar
          </Link>
        </span>
      </div>
    </div>
  );
}
