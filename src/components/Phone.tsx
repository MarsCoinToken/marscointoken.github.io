import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({imgSrc, className, dark=false,}: PhoneProps) => {
    return(
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}>
         <img src="/iphone.png" alt="" 
         className="pointer-events-none z-50 select-none" />

         <div className="absolute -z-10 inset-5">
            <img className="object-cover" src={imgSrc} alt="" />
         </div>
        </div>
    )
}

export default Phone