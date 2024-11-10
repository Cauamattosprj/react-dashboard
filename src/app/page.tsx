import ChartOverview from "@/components/chart";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    CircleDollarSign,
    Package,
    Percent,
    PercentSquare,
    Users,
} from "lucide-react";

export default function Home() {
    return (
        <>
            <main className="sm:ml-48 p-6">
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <CircleDollarSign className="h-5 w-5 mr-2 text-blue-600" />
                                <CardTitle className="text-lg sm:text-xl ">
                                    Total de vendas
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Total de vendas em 30 dias
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="-mt-4">
                            <p className="text-2xl text-blue-600 font-bold">
                                R$ 1.283,29
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <Users className="h-5 w-5 mr-2 text-blue-600" />
                                <CardTitle className="text-lg sm:text-xl ">
                                    Novos Clientes
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Novos clientes em 30 dias
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="-mt-4">
                            <p className="text-2xl text-blue-600 font-bold">
                                234
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <Package className="h-5 w-5 mr-2 text-blue-600" />
                                <CardTitle className="text-lg sm:text-xl ">
                                    Pedidos em 24h
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Novos pedidos em 24h
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="-mt-4">
                            <p className="text-2xl text-blue-600 font-bold">
                                37
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <Percent className="h-5 w-5 mr-2 text-blue-600" />
                                <CardTitle className="text-lg sm:text-xl ">
                                    Ticket médio 24h
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Valor do ticket médio em 24h
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="-mt-4">
                            <p className="text-2xl text-blue-600 font-bold">
                                R$ 28,49
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* charts   */}
                <section className="grid grid-cols-1 sm:grid-cols-2yy121111 mt-4 gap-4">
                    <ChartOverview />
                    <ChartOverview />
                </section>
            </main>
        </>
    );
}
