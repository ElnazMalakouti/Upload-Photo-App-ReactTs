import classNames from 'classnames'
import { ButtonHTMLAttributes } from "react"
import {ReactElement} from 'react' 


interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactElement | string,
    disable ?: any,
    className ?: string
}

const Button = ({className , children , disable , ...props } : props) => {

    const btnClasses = classNames(
        'w-full h-[42px] rounded-[8px] bg-[#525252] text-white disabled:bg-[#E5E5E5] disabled:text-[#CCCCCC] disabled:border-transparent',
        className
    )

    return(
         <button type={props.type ?? "button"} disabled={disable} className={btnClasses} {...props}> 
            {children}
        </button>
    )
} 

export default Button 