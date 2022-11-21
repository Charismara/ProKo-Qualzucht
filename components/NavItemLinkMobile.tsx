'use client'
import {classNames} from "app/layout";
import {Disclosure} from "@headlessui/react";
import {NavItem} from "./NavItemLink";
import {useEffect, useState} from "react";

type Props = {
    item: NavItem
}


export const NavItemLinkMobile = ({item}: Props) => {
    const [isCurrent, setCurrent] = useState<boolean>(false);
    useEffect(() => {
        setCurrent(typeof window !== "undefined" && window.location.pathname === item.href)
    }, [item]);

    return (
        <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
                isCurrent
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-slate-300 hover:text-gray-800',
                'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            )}
            aria-current={isCurrent ? 'page' : undefined}
        >
            {item.name}
        </Disclosure.Button>
    )
}