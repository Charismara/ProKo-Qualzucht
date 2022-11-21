'use client'

import Image from "next/image";
import QualzuchtHunde from 'public/Hunde-Qualzuchten.png'
import QualzuchtKatzen from 'public/Katzen-Qualzuchten.png'

export default function Example() {
    return (
        <>
            <header>
                <div className="px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-7xl font-bold leading-tight tracking-tight">Das Problem Qualzucht</h1>
                </div>
            </header>
            <main className={"mt-8"}>
                <div className="sm:px-6 lg:px-8">
                    <div className="px-4 py-8 sm:px-0 text-xl flex">
                        <div className={"w-full md:w-1/2 pr-4"}>
                            <p className={"mb-4"}>Qualzucht ist ein weit verbreitetes Wort, dieses Wort definiert die Zucht von Tieren, die mit Fehlbildungen und anderen Gesundheitlichen Schäden und Schmerzen aus wirtschaftlichen Gründen in
                                                  Kauf genommen werden.</p>
                            <p className={"mb-4"}>Jedoch gibt es auch Rassen die absichtlich so gezüchtet werden, weil die Menschen dieses aussehen „Hübsch“ finden und die Tiere müssen dann darunter leiden.</p>
                            <p>Die Elterntiere werden nach genauen Maßgaben herausgesucht und zur Zucht verwendet. Ihre Nachkommen haben dann meistens die gewünschten Merkmale.</p>
                        </div>
                        <div className={"w-1/2 hidden md:flex justify-center"}>
                            <div className="group">
                                <a href={"https://www.mein-haustier.de/wp-content/uploads/2022/07/Hunde-Qualzuchten.png"}>
                                    <Image
                                        className={"lg:w-2/3 object-scale-down object-center mx-auto"}
                                        src={QualzuchtHunde} alt={"https://www.mein-haustier.de/wp-content/uploads/2022/07/Hunde-Qualzuchten.png"}
                                        style={{objectFit: "scale-down"}}
                                    />
                                    <h3 className="mt-3 text-sm text-gray-500 text-center">
                                        https://www.mein-haustier.de/wp-content/uploads/2022/07/Hunde-Qualzuchten.png
                                    </h3>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sm:px-6 lg:px-8">
                    <div className="px-4 py-8 sm:px-0 text-xl flex">
                        <div className={"w-1/2 hidden md:flex justify-center"}>
                            <div className="group">
                                <a href={"https://www.mein-haustier.de/wp-content/uploads/2022/07/Katzen-Qualzuchten.png"}>
                                    <Image
                                        className={"lg:w-2/3 object-scale-down object-center mx-auto"}
                                        src={QualzuchtKatzen} alt={"https://www.mein-haustier.de/wp-content/uploads/2022/07/Katzen-Qualzuchten.png"}
                                        style={{objectFit: "scale-down"}}
                                    />
                                    <h3 className="mt-3 text-sm text-gray-500 text-center">
                                        https://www.mein-haustier.de/wp-content/uploads/2022/07/Katzen-Qualzuchten.png
                                    </h3>
                                </a>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 pl-4"}>
                            <p className={"mb-4"}>Qualzucht bezieht sich nicht nur auf Hunde, sondern auch auf Katzen und Kleintiere.</p>
                            <p className={"mb-4"}>Eigentlich alles was der Mensch züchten kann, es gibt unzählige Tierarten und Rassen mit gezüchteter Fehlbildung oder sonstige Qualzuchten, denn der Mensch formt sich das Tier so, wie es ihm
                                                  gefällt.</p>
                            <p className={"mb-4"}>Sei es Groß oder Klein, Große Ohren oder hängende Ohren. Plattes Gesicht oder gar ein komplett Nacktes Tier. </p>
                            <p>Jedes Tier welches verzüchtet wird hat seine vielen kleinen oder großen Leiden die ihnen viele Probleme bereiten.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
