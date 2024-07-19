import Container from "@/components/templates/Container";

export default function LoginPage(){
    return(
        <div className="
         text-black flex items-center justify-center h-screen
         bg-gradient-to-r from-orange-400 to-orange-700">
            <div className="
             flex flex-col w-3/12 gap-10 items-center py-14 h-[60%] rounded-lg
             bg-orange-300">

                <h1 className="text-4xl font-black">Login</h1>

                <form className="gap-7 flex flex-col">
                    <div className="flex flex-col">
                     <label 
                     className="font-black text-[1.1rem]"
                     htmlFor="login_id"
                     >Username</label>
                     <input 
                      type="text" 
                      name="login" 
                      id="login_id"
                      className="px-2 py-2 rounded-lg w-80"
                      />
                    </div>
                    <div className="flex flex-col">
                     <label 
                     htmlFor="password_id"
                     className="font-black text-[1.1rem]"
                     >Password</label>
                     <input 
                      type="text" 
                      name="password" 
                      id="password_id"
                      className=" px-2 py-2 rounded-lg w-80"
                      />
                    </div>                  
                </form>

                <div>
                 <button className="
                 bg-gradient-to-r from-blue-400 w-80
                to-blue-700 px-12 py-2 rounded-lg 
                hover:scale-105 hover:duration-200
                text-lg font-semibold
                ">Log in</button>
                </div>
            </div>
        </div>
    )
}