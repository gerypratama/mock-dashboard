import type { MetaFunction } from "@remix-run/node";
import HomeBarChart from "~/components/page/home/barchart";
import SalesCard from "~/components/page/home/salesCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { mainDashCards } from "~/const/cards";

export const meta: MetaFunction = () => {
  return [{ title: "Mock Dashboard" }, { name: "description", content: "v1" }];
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
        <SalesCard />
      </div>
    </>
  );
}
