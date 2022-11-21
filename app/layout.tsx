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
        </div>
        </body>
        </html>
    )
}
