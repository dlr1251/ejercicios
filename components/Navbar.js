import React from "react";
import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <ul style={{backgroundColor: 'red'}}>
                <li><Link href={'/'}><a>Inicio</a></Link></li>
                <li><Link href={'/nosotros'}><a>Nosotros</a></Link></li>
                <li><Link href={'/consultas'}><a>Consultas</a></Link></li>
                <li><Link href={'/servicios'}><a>Servicios</a></Link></li>
                <li><Link href={'/contacto'}><a>Contacto</a></Link></li>
            </ul>
        
        </>
    )
}