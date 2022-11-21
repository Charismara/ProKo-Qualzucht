'use client'

export default function Example() {
    return (
        <>
            <header>
                <div className="px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-7xl font-bold leading-tight tracking-tight">Quellen</h1>
                </div>
            </header>
            <main className={"mt-8 pb-8"}>
                <ul className={"list-disc ml-8"}>
                    <QuellenListElement link={"https://www.peta.de/themen/qualzucht-haustiere/"}/>
                    <QuellenListElement link={"https://www.tieranwalt.at/de/Projekte/Qualzucht/Qualzucht-bei-Hunden/iActivityId__418.htm"}/>
                    <QuellenListElement link={"https://www.svk-asmpa.ch/images/aktuell/2018/2018-debut-campagne-contre-le-nez-plat-excessif-chez-le-chien.jpg"}/>
                    <QuellenListElement link={"https://www.uni-giessen.de/fbz/fb10/institute_klinikum/klinikum/kleintierklinik/Chirurgie/neurologie/Patienteninformation/c/chiari-malformation"}/>
                    <QuellenListElement link={"https://www.tierschutzbund.de/information/hintergrund/heimtiere/qualzucht/"}/>
                    <QuellenListElement link={"https://www.mini-bull-terrier.de/gesundheit.html"}/>
                    <QuellenListElement link={"https://www.doccheck.com/de/detail/photos/2106-keilwirbel-kongenitale-skoliose"}/>
                    <QuellenListElement link={"https://www.tierarzt-mg.de/augenheilkunde/augenerkrankungen.html "}/>
                    <QuellenListElement link={"https://www.gesunde-bulldoggen.de/laufen/keilwirbel.html"}/>
                    <QuellenListElement link={"https://de.wikipedia.org/wiki/Keilwirbel "}/>
                    <QuellenListElement link={"https://www.tiho-hannover.de/kliniken-institute/institute/institut-fuer-tierzucht-und-vererbungsforschung/forschung/forschungsprojekte-hund/keilwirbel "}/>
                    <li>Eigenes Wissen</li>
                </ul>
            </main>
        </>
    )
}

type Props = {
    link: string
}

const QuellenListElement = ({link}: Props) => {
    return (<li><a href={link} className={"hover:underline"} target={"_blank"} rel={"noreferrer"}>{link}</a></li>)
}
