// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useState } from 'react'
import { BiMoon } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeChange = ({ className }) => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme !== null) {
            return savedTheme === 'dark'
        }
        return document.documentElement.classList.contains('dark')
    })

    // Helper function to update <meta name="theme-color">
    const updateThemeColor = (isDark) => {
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', isDark ? '#030712' : '#ffffff');
        }
    };


    useEffect(() => {
        // Update theme on load
        updateThemeColor(isDark)

        const updateTheme = (e) => {
            setIsDark(e.detail.isDark)
            updateThemeColor(e.detail.isDark)
        }
        window.addEventListener('themeChange', updateTheme)
        return () => window.removeEventListener('themeChange', updateTheme)
    }, [])

    useEffect(() => {
        // Update classList, localStorage, and meta theme-color
        if (isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
        updateThemeColor(isDark)
    }, [isDark])

    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        window.dispatchEvent(new CustomEvent('themeChange', {
            detail: { isDark: newIsDark }
        }))
    }

    return (
        <button
            onClick={toggleTheme}
            className={`flex items-center justify-center h-10 w-10 p-2 rounded-full border border-gray-300 dark:border-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors ${className}`}
            aria-label="Toggle theme"
            title="Toggle theme"
            data-tooltip-target="tooltip-default"
            data-tooltip-placement="top"
            data-tooltip-style="dark"
        >
            {isDark ? <MdOutlineWbSunny className='w-5 h-5 text-gray-800 dark:text-gray-200' /> : <BiMoon className='w-5 h-5 text-gray-800 dark:text-gray-200' />}
        </button>
    )
}

export default ThemeChange
