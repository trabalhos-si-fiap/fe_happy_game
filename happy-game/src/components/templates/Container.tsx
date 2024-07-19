export default function Container(props: any){
    return(
        <div className="flex w-3/4  items-center justify-between min-h-screen">
            {props.children}
        </div>
    )
}