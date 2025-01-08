import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { mainSalesCards } from "~/const/cards";

export default function SalesCard() {
  return (
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
                <AvatarFallback>
                  {item.name
                    .split(" ")
                    .map((str) => str[0].toUpperCase())
                    .join("")}
                </AvatarFallback>
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
  );
}
