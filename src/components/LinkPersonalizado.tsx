import Link from "next/link";
import arrowIcon from "../../public/imagens/icones/arrowIcon.png";

interface LinkPersonalizadoProps {
    corDeFundo: string,
    corFonte: string
    href: string,
    texto: string
}

const LinkPersonalizado: React.FC<LinkPersonalizadoProps> = (props: LinkPersonalizadoProps) => {
    return(
        <Link href={props.href}>
            <div className={`bg-${props.corDeFundo} text-${props.corFonte} flex p-4 w-[30vw] rounded-md place-content-between hover:bg-sky-600`}>
                <h1>{props.texto}</h1>
                <img src={arrowIcon.src} alt="arrow icon" />
            </div>
        </Link>
    )
}

export default LinkPersonalizado;