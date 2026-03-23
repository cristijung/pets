import TextDefaultLink from "./TextDefaultLink";

export default function NavBar() {
    return(
        <>
        <nav>
            <TextDefaultLink to="/">Home | </TextDefaultLink>
            <TextDefaultLink to="/consultas">Consultas | </TextDefaultLink>
            <TextDefaultLink to="/adote">Adote | </TextDefaultLink>
            <TextDefaultLink to="/quemSomos">Quem Somos | </TextDefaultLink>
            <TextDefaultLink to="/contato">Entre em Contato | </TextDefaultLink>
        </nav>
        
        </>
    );
}