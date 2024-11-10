// components/NavItem.tsx
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
    href: string;
    label: string;
    icon: LucideIcon;
    destructive?: boolean;
}

export function NavItem({ href, label, icon: Icon, destructive }: NavItemProps) {
    return (
        <Link
            href={href}
            className={`flex px-4 py-2 w-36 shrink-0 items-center justify-center rounded-lg text-white transition-colors ${destructive ? 'hover:text-red-600' : ''}  hover:text-blue-600 hover:bg-white`}
        >
            <span className="flex w-32 gap-4">
                <Icon className="h-5 w-5" />
                {label}
            </span>
        </Link>
    );
}
