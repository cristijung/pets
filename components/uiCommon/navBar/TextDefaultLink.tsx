import Link from "next/link";
import styles from './TextDefaultLink.module.css';

interface TextDefaultProps {
    children: React.ReactNode;
    to: string;
}

export default function TextDefaultLink({ children, to }: TextDefaultProps) {
    return(
        <>
        <Link href={to} className={styles.text}>{children}</Link>        
        </>       
    )
}