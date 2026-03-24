"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './TextDefaultLink.module.css';

interface TextDefaultProps {
    children: React.ReactNode;
    to: string;
}

export default function TextDefaultLink({ children, to }: TextDefaultProps) {
    const pathname = usePathname();
    const isActive = pathname === to;

    return (
        <Link 
            href={to} 
            className={`${styles.text} ${isActive ? styles.active : ''}`}
        >
            {children}
        </Link>
    );
}