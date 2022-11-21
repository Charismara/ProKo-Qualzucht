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
                                <a href={"https://www.mein-haustier.de/wp-content/uploads/2022/07/Hunde-Qualzuchten.png"} target={"_blank"} rel={"noreferrer"}>
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
                                <a href={"https://www.mein-haustier.de/wp-content/uploads/2022/07/Katzen-Qualzuchten.png"} target={"_blank"} rel={"noreferrer"}>
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
                <div className={"w-full border-t-8 border-gray-900"}/>
                <div className="mx-auto max-w-7xl py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Welche Ursachen können Qualzuchten haben?
                        </p>
                        <p className="mx-auto mt-8 max-w-4xl text-xl">
                            Es fehlen zum Beispiel das Wissen vor dem Kauf, wenn die Menschen das Tier sehen und denken „Ach ist der niedlich“ heißt das nicht, dass sie auch wissen welche Probleme dieses niedliche aussehen mit sich
                            bringt.
                            Zudem ist es bei vielen Rassen nicht verboten sie so zu züchten, weil einfach die richtigen Gesetze fehlen, meistens sind die vorhandenen Gesetze nicht eindeutig genug, so können Züchter willkürlich ihre
                            Qualzuchten
                            vermehren.
                            Und weil sie züchten können wie sie wollen, richten sich natürlich die Züchter nach der Art Rasse, die besonders viel Geld bringt und eine sehr hohe Nachfrage hat, denn die Welt Modernisiert Rassen mit
                            Fehlbildungen, weil sie diese „Süß“ finden und fast jeder prominente so eine Rasse hat.
                            Eine nicht ganz so schöne Art zu Züchten ist auch Inzest unter den Tieren, wenn die Züchter die Tiere dazu zwingen.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Was kann man gegen Qualzuchten machen? „ADOPT DON’T SHOP“
                        </p>
                        <p className="mx-auto mt-8 max-w-4xl text-xl">
                            Das Tierschutzgesetz sollte verschärft werden, Bei Schäferhunden ist das Züchten mit Hüftdysplasie ist bis zu einem gewissen grad erlaubt, weil der Tierschutzbund denkt, dass diese Krankheit schon zu sehr zur
                            Rasse gehört und sehr häufig auftritt. Man sollte den Hype für kranke Tiere unterdrücken und die Menschen nicht mit Aufmerksamkeit belohnen, weil sie sich eine Qual Zucht vom Züchter geholt haben welches diese
                            Qualzuchten noch beliebter macht und immer mehr Züchter Geld scheffeln wollen und nicht darauf achten was sie züchten.
                            Lieber in einem Tierheim Adoptieren. Auch diese Tiere haben es verdient ein zuhause zu finden und geliebt zu werden.
                            Unterstützt keine Züchter die solche armen Tiere züchten. Je weniger Qualzuchten gekauft werden, desto weniger werden gezüchtet. Macht die Welt aufmerksam darauf wie sehr solche Tiere leiden müssen, weil die
                            Menschen sie „Süß“ finden, wie viele Tiere an ihren erb Erkrankungen sterben und leiden. Also bleiben wir bei unserem Motto „ADOPT AND DON’T SHOP“
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
