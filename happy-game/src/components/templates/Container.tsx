export default function Container(props: any){
    return(
        <div className="flex w-3/4  items-center justify-between">
            {props.children}
        </div>
    )
}