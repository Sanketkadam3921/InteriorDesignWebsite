"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import {
    Box,
    Button,
    Menu,
    MenuItem,
    Fade,
    useTheme,
    useMediaQuery
} from "@mui/material"
import { ChevronDown } from "lucide-react"

// Custom NavigationMenu components using MUI
export const NavigationMenu = ({ children, sx = {}, ...props }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>
)

export const NavigationMenuList = ({ children, sx = {}, ...props }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>
)

export const NavigationMenuItem = ({ children, ...props }) => (
    <Box {...props}>
        {children}
    </Box>
)

export const NavigationMenuTrigger = ({ children, onMouseEnter, sx = {}, ...props }) => {
    const theme = useTheme()

    return (
        <Button
            endIcon={<ChevronDown size={16} />}
            onMouseEnter={onMouseEnter}
            sx={{
                color: 'inherit',
                textTransform: 'none',
                fontSize: '1rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    color: theme.palette.primary.main,
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    )
}

export const NavigationMenuContent = ({ children, anchorEl, open, onClose, sx = {}, ...props }) => {
    const theme = useTheme()

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            TransitionComponent={Fade}
            MenuListProps={{
                onMouseEnter: () => { }, // Keep menu open on hover
                onMouseLeave: onClose,
                sx: { pointerEvents: 'auto' }
            }}
            sx={{
                '& .MuiPaper-root': {
                    mt: 1,
                    minWidth: 200,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Menu>
    )
}

export const NavigationMenuLink = ({ children, to, asChild = false, sx = {}, ...props }) => {
    const theme = useTheme()

    if (asChild) {
        return (
            <Box
                component={Link}
                to={to}
                sx={{
                    display: 'block',
                    px: 2,
                    py: 1.5,
                    color: 'inherit',
                    textDecoration: 'none',
                    borderRadius: 1,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        color: theme.palette.primary.main,
                    },
                    ...sx
                }}
                {...props}
            >
                {children}
            </Box>
        )
    }

    return (
        <Button
            component={Link}
            to={to}
            sx={{
                color: 'inherit',
                textTransform: 'none',
                fontSize: '1rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    color: theme.palette.primary.main,
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    )
}

// Style function for trigger buttons
export const navigationMenuTriggerStyle = (theme) => ({
    color: 'inherit',
    textTransform: 'none',
    fontSize: '1rem',
    px: 2,
    py: 1,
    borderRadius: 2,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.primary.main,
    }
})