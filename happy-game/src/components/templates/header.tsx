import Image from 'next/image';
import logo from '..//..//../public/static/imgs/logo.svg';
import Button from '../button';
import Link from 'next/link';

export default function Header(){
    return(
        <div className='flex bg-blue-600 justify-around items-center py-5 shadow-sm'>
            <div className='flex items-center gap-5'>
                <Image
                    src={logo}
                    width={70}
                    height={70}
                    alt="Logo picture"
                />
                <Link href={"/"}>
                    <h1 className='text-2xl font-black cursor-pointer'>EducaGames</h1>
                </Link>
               
            </div>
            <nav>
                <ul className='flex gap-3 flex-grow'>
                    <Button link={"/"}>
                        Jogos
                    </Button>
                    <Button link={"/"}>
                        Home
                    </Button>
                    <Button link={"/"}>
                        Sugerir Jogos
                    </Button>
                </ul>
            </nav>
            <div>
                <ul className='flex gap-4'>
                    <Button link={"/"}>
                       Log in
                    </Button>
                    <Button link={"/"}>
                       Cadastre-se
                    </Button>
                </ul>
            </div>
        </div>

    )
}