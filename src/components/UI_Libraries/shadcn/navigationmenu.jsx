"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu" // adjust path if needed
import { Box } from "@mui/material"

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Projects */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/projects">Projects</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Designs with dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Designs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Box className="grid gap-2 md:w-[300px] lg:w-[400px]">
                            <NavigationMenuLink asChild>
                                <Link to="/designs/kitchen">Modular Kitchen</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link to="/designs/bedroom">Bedroom</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link to="/designs/living-room">Living Room</Link>
                            </NavigationMenuLink>
                        </Box>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
