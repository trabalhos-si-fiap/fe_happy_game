import CampoCadastro from "@/components/CampoCadastro";
import CampoLogin from "@/components/CampoLogin";
import Container from "@/components/templates/Container";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div
      className="
         text-white flex items-center justify-center h-screen
         bg-orange-300"
    >
      <div
        className="
             flex flex-col w-3/12 gap-10 items-center py-14 h-[60%] rounded-lg
             bg-orange-400"
      >
        <h1 className="text-4xl font-black">Login</h1>

        <form className="gap-7 flex flex-col">
          <CampoCadastro
            tipo={"text"}
            nome={"usuario_login"}
            id={"id_login_usuario"}
            placeholder={"Nome de usuario"}
          />
          <CampoCadastro
            tipo={"text"}
            nome={"senha_login"}
            id={"id_login_senha"}
            placeholder={"Digite sua senha"}
          />

          <div className="flex flex-col justify-center items-center gap-10">
            <Link href={"/"}>
            <button
              className="
                    bg-blue-500  w-80 px-12 py-2 rounded-lg 
                    hover:bg-blue-400
                    text-lg font-semibold
                    "
            >
              Log in
            </button>
            </Link>
            
            <span>
              Não possui uma conta?
              <Link
                href={"/cadastro"}
                className="hover:text-blue-500 font-black"
              >
                {" "}
                Cadastrar-se
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
