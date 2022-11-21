'use client'

export default function Example() {
    return (
        <>
            <header>
                <div className="px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-7xl font-bold leading-tight tracking-tight">Übliche Qualzucht Rassen</h1>
                </div>
            </header>
            <main className={"mt-8 pb-8 mx-auto"}>
                <div className="pb-12 mt-20">
                    <div className="relative z-0">
                        <div className="absolute inset-0 h-5/6 lg:h-2/3"/>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative lg:grid lg:grid-cols-7">
                                <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                                    <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                                        <div className="flex flex-1 flex-col">
                                            <div className="bg-gray-800 px-6 py-10">
                                                <h3 className="text-center text-4xl font-medium" id="tier-hobby">
                                                    Katzen
                                                </h3>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between bg-gray-600 p-6 sm:p-10 lg:p-6 xl:p-10">
                                                <ul role="list" className="space-y-2 text-2xl list-disc">
                                                    <li>Sphinx/Nacktkatze</li>
                                                    <li>Rexkatze</li>
                                                    <li>Munchkin-Katze</li>
                                                    <li>Scottish-Fold-Katze</li>
                                                    <li>Perserkatze</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                                    <div className="relative z-10 rounded-lg shadow-xl">
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-500"
                                            aria-hidden="true"
                                        />
                                        <div className="rounded-t-lg bg-gray-800 px-6 pt-12 pb-10">
                                            <h3 className="text-center text-4xl font-semibold tracking-tight sm:-mx-6" id="tier-growth">
                                                Hunde
                                            </h3>
                                        </div>
                                        <div className="rounded-b-lg bg-gray-600 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                                            <ul role="list" className="space-y-2 text-2xl list-disc">
                                                <li>Mops</li>
                                                <li>Französische Bulldogge</li>
                                                <li>Englische Bulldogge</li>
                                                <li>Deutscher Schäferhund</li>
                                                <li>Chihuahua</li>
                                                <li>Dackel/Teckel</li>
                                                <li>Rhodesian Ridgeback</li>
                                                <li>Teacup-Hunde</li>
                                                <li>Hunde mit Merle Faktor</li>
                                                <li>Blue-Line: Blaue und Silberne Hunde</li>
                                                <li>Shar Pei und andere Faltenhunde</li>
                                                <li>Nackt und Schopfhunde</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                                    <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                                        <div className="flex flex-1 flex-col">
                                            <div className="bg-gray-800 px-6 py-10">
                                                <div>
                                                    <h3 className="text-center text-3xl font-medium" id="tier-scale">
                                                        Kleintiere
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between bg-gray-600 p-6 sm:p-10 lg:p-6 xl:p-10">
                                                <ul role="list" className="space-y-2 text-2xl list-disc">
                                                    <li>Angorakaninchen</li>
                                                    <li>Widderkaninchen</li>
                                                    <li>Zwergkaninchen</li>
                                                    <li>Schecken</li>
                                                    <li>Deutsche Riesen</li>
                                                    <li>Rexkaninchen</li>
                                                    <li>Silkbacks / Leatherbacks (Bartagame)</li>
                                                    <li>Kropftaube</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

type Props = {
    link: string
}
