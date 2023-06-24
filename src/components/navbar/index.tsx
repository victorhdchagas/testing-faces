'use client';

import { Navbar, NavbarBrand, NavbarToggle, NavbarLink, NavbarCollapse } from '@/components/flowbite';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation'


export default function DefaultNavbar() {
    const path = usePathname()
    console.log(path)
    return (
        <Navbar
            fluid
            rounded
        >
            <NavbarBrand
                as={Link}
                href="/"
            >
                <Image
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    width='36'
                    height="36"
                    src="/robot1.svg"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                    Testing Faces
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active={path=="/"}>
                    <p>
                        Home
                    </p>
                </NavbarLink>
                <NavbarLink as={Link} href="/accounts" active={path.startsWith("/accounts")}>
                    <p>Accounts</p>
                </NavbarLink>
                <NavbarLink as={Link} href="/products" active={path.startsWith("/products")}>
                    <p>Products</p>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}


