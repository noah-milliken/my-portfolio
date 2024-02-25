'use client'

import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel
  } from "@/components/ui/dropdown-menu"


function MobileNav() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
      <HamburgerMenuIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Menu</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href="/">Home</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href='/projects'>Projects</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
      <Link href='/contact'>Contact</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  ) 
}

export default MobileNav