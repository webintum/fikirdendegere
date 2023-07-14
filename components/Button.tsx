import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtomProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}


    const Button = forwardRef<HTMLButtonElement, ButtomProps>(({
        className,
        children,
        disabled,
        type = "button",
        ...props 
    }, ref) => {
        return (
            <button type={type} className={twMerge(`w-full rounded-full bg-teal-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`)}>
                {children}
            </button>
        )
    })    

 
export default Button;