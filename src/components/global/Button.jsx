import { DynamicIcon } from 'lucide-react/dynamic';
const Button = ({ text, onClick, icon, iconSize }) => {
    return (
        <button className="bg-teal-800 cursor-pointer text-white px-5 py-2 rounded-full font-bold flex items-center" onClick={onClick}>
            {icon && <DynamicIcon name={icon} size={iconSize ? iconSize : 16} className='mr-2' />}
            {text}</button>
    )
}

export default Button