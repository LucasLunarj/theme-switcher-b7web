import { createContext, useContext, useEffect, useState } from "react"

export const PageContext = createContext(null)
const STORAGE_KEY = 'pageContextContent'

export const PageProvider = ({ children }) => {
    const [themeSwitch, setThemeSwitch] = useState(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'false'))

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(themeSwitch))
    }, [themeSwitch])


    return (
        <PageContext.Provider value={{ themeSwitch, setThemeSwitch }} >
            {children}
        </PageContext.Provider>
    )
}

export const useThemeSwitcher = () => useContext(PageContext)