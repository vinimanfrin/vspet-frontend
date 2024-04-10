import NavBar from "./NavBar"

interface TemplateProps {
    children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({children}: TemplateProps) => {
    return (
        <>
            <NavBar/>
            {children}
        </>
        
    )
}

export default Template;