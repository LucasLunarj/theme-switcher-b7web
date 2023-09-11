import { PageProvider, useThemeSwitcher } from "../contexts/PageContext"

export function Page() {
    const context = useThemeSwitcher()
    console.log(context.themeSwitch)
    function handleSwitch() {
        context.setThemeSwitch(!context.themeSwitch)
    }
    return (

        <div className={context.themeSwitch === true ? 'bg-black h-screen text-white flex flex-col items-center justify-center' : 'bg-white h-screen text-black flex flex-col items-center justify-center'}>
            <h1 className="text-2xl">Título da Página</h1>
            <p>conteúdo da página</p>
            <button className={context.themeSwitch === true ? 'bg-white text-black rounded-md p-2 m-2' : 'bg-black text-white rounded-md p-2 m-2'} onClick={handleSwitch} >Clique Aqui</button>
        </div>

    )
}