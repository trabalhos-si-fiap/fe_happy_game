import Link from "next/link";

export default function Button(props: any){
    return(
        <Link className="bg-orange-400 px-4 py-2 rounded-md font-semibold cursor-pointer "
        href={props.link}
        >
            {props.children}
        </Link>
    )
}