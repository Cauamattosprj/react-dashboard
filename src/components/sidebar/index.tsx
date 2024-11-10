import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
    AlignJustify,
    Box,
    BoxIcon,
    Home,
    LogOut,
    LucideArchiveX,
    Package,
    PanelBottom,
    PanelRightClose,
    PersonStanding,
    Settings,
    Settings2,
    ShoppingBag,
    Users,
} from "lucide-react";
import { NavItem } from "./NavItem";

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            {/* menu lateral desktop */}
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-48 border-r bg-blue-800 sm:flex flex-col items-center">
                <nav className="flex flex-col item-center gap-4 px-2 py-5">
                    {/* Tooltips/Links do menu lateral */}

                    <NavItem href="#" label="Dashboard" icon={Home} />
                    <NavItem href="#" label="Pedidos" icon={ShoppingBag} />
                    <NavItem href="#" label="Produtos" icon={BoxIcon} />
                    <NavItem href="#" label="Clientes" icon={Users} />
                    <NavItem href="#" label="Configurar" icon={Settings2} />
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <NavItem href="#" label="Sair" icon={LogOut} destructive />
                </nav>
            </aside>

            {/* navbar mobile */}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild className="">
                            <Button
                                size="icon"
                                variant="outline"
                                className="sm:hidden"
                            >
                                <AlignJustify className="w-5 h-5" />
                                <span className="sr-only">
                                    Abrir / Fechar menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top">
                            <nav className="flex flex-col gap-4 w-full justify-center">
                                {/* Tooltips/Links do menu lateral */}
                                <NavItem
                                    href="#"
                                    label="Dashboard"
                                    icon={Home}
                                />
                                <hr className="border-solid border-white/20 border-1 w-full " />
                                <NavItem
                                    href="#"
                                    label="Pedidos"
                                    icon={ShoppingBag}
                                />
                                <hr className="border-solid border-white/20 border-1 w-full " />

                                <NavItem
                                    href="#"
                                    label="Produtos"
                                    icon={BoxIcon}
                                />
                                <hr className="border-solid border-white/20 border-1 w-full " />

                                <NavItem
                                    href="#"
                                    label="Clientes"
                                    icon={Users}
                                />
                                <hr className="border-solid border-white/20 border-1 w-full " />

                                <NavItem
                                    href="#"
                                    label="Configurar"
                                    icon={Settings2}
                                />
                            </nav>
                            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                                <NavItem
                                    href="#"
                                    label="Sair"
                                    icon={LogOut}
                                    destructive
                                />
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    );
}
