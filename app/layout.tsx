'use client';
import './globals.css'
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {NavItem, NavItemLink} from "components/NavItemLink";
import {NavItemLinkMobile} from "components/NavItemLinkMobile";

const navigation: NavItem[] = [
    {name: 'Qualzucht', href: '/'},
    {name: 'Fehlbildungen', href: '/fehlbildungen'},
    {name: 'Listenhunde', href: '/listenhunde'},
    {name: 'Trendfarben', href: '/trendfarben'},
    {name: 'Rassenliste', href: '/rassenliste'},
    {name: 'Quellen', href: '/quellen'},
]

type FooterItem = {
    name: string,
    href: string,
    icon: (props: any) => JSX.Element
}

const footerItems: FooterItem[] = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/Tierheim.Karlsruhe',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/tierheimkarlsruhe?igshid=YmMyMTA2M2Y=',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    }
]


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={"h-full"}>
        <body className={"h-full bg-gray-900 text-white"}>
        <div className="min-h-full">
            <Disclosure as="nav" className="border-b border-black">
                {({open}) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="flex">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="block h-8 w-auto lg:hidden"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                            alt="Proko 2023 - Qualzucht"
                                        />
                                        <img
                                            className="hidden h-8 w-auto lg:block"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                            alt="Proko 2023 - Qualzucht"
                                        />
                                    </div>
                                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                        {navigation.map((item) => (
                                            <NavItemLink key={item.name} item={item}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <NavItemLinkMobile key={item.name} item={item}/>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <div className="py-10">
                <div className={"bg-gray-700 mx-auto max-w-7xl rounded-xl"}>
                    {children}
                </div>
            </div>
            <footer className="">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {footerItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500" target={"_blank"} rel={"noreferrer"}>
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        ))}
                        <a href={"https://www.tierheim-karlsruhe.de/impressum/"} className={"text-gray-400 hover:text-gray-500"} target={"_blank"} rel={"noreferrer"}>
                            <span>Impressum</span>
                        </a>
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-base text-gray-400">Erstellt für ProKo 2023 <strong>Adopt don&apos;t shop!</strong></p>
                    </div>
                </div>
            </footer>
        </div>
        </body>
        </html>
    )
}
