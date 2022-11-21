'use client'
import {useEffect, useState} from "react";
import {classNames} from "src/Utils";

export type NavItem = {
    name: string,
    href: string
}

type Props = {
    item: NavItem,
}


export const NavItemLink = ({item}: Props) => {
    const [isCurrent, setCurrent] = useState<boolean>(false);
    useEffect(() => {
        setCurrent(typeof window !== "undefined" && window.location.pathname === item.href)
    }, [item]);
    return (
        <a
            key={item.name}
            href={item.href}
            className={classNames(
                isCurrent
                    ? 'border-indigo-500'
                    : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-100',
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
            )}
            aria-current={isCurrent ? 'page' : undefined}
        >
            {item.name}
        </a>
    )
}