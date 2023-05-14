import classNames from 'classnames'
import { ButtonHTMLAttributes } from "react"
import {ReactElement} from 'react' 
import './index.css'


interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant : 'primary' | 'secondary'
    children : ReactElement | string,
    disable ?: any,
    className ?: string
}

const Button = ({className , variant , children , disable , ...props } : props) => {

    const btnClasses = classNames(
        'h-[42px] rounded-[8px] bg-[#525252] text-white disabled:bg-[#E5E5E5] disabled:text-[#CCCCCC] disabled:border-transparent',
        variant === 'primary' ? 'primary' : 'secondary' ,
        className
    )

    return(
         <button type={props.type ?? "button"} disabled={disable} className={btnClasses} {...props}> 
            {children}
        </button>
    )
} 

export default Button 