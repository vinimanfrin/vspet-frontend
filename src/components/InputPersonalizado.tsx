interface InputPersonalizadoProps {
    label:string,
    value:string,
    onChange: (value: string) => void;
}

const InputPersonalizado: React.FC<InputPersonalizadoProps> = (props : InputPersonalizadoProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <div className="bg-colorinput rounded-md p-2 w-[500px]">
            <label className="top-0 left-0 text-md text-labelinput" htmlFor={props.label}>{props.label}:</label>
            <input className="w-full py-2 focus:border-blue-500 outline-none bg-transparent" type="text" id={props.label} onChange={handleChange} value={props.value}/>
        </div>

    )
}

export default InputPersonalizado;