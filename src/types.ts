export type LinkProps = {
    name:string,
    icon:string | any
}
export type IconProp = {
    name:{src:string},
    className?: string
}
export type CardComponentProps={
    children:React.ReactNode
    classname?:string
    withBorder?:boolean
}
export type buttonProps={
    name:string
    classname?:string
    onClick?:(val?:any)=>void
}