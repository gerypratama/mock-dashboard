import type { MetaFunction } from "@remix-run/node";
import HomeBarChart from "~/components/page/home/barchart";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { mainDashCards, mainSalesCards } from "~/const/cards";

export const meta: MetaFunction = () => {
  return [
    { title: "Mock Dashboard" },
    { name: "description", content: "v1" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold">Overview</h1>
      <div className="grid grid-cols-3 gap-6">
        {mainDashCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="gap-4 pb-2">
              <CardDescription className="flex justify-between items-center">
                <span>{card.title}</span>
                <card.icon />
              </CardDescription>
              <CardTitle className="text-2xl font-bold">{card.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">{card.description}</CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-6">
        <HomeBarChart />
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {mainSalesCards.map((item) => (
              <div key={item.email} className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <Avatar>
                    <AvatarFallback>{item.name.split(" ").map(str => str[0].toUpperCase()).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm">{item.email}</span>
                  </div>
                </div>
                <div className="text-bold">{`+$${item.sales}`}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
