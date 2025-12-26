import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormRequset from "./FormRequset";

export default function FormCard() {
  return (
    <Card className="max-w-3xl mx-auto" >
      <CardHeader>
        <CardTitle>Umzug anfragen</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und erhalten Sie ein unverbindliches
          Angebot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormRequset />
      </CardContent>
    </Card>
  );
}
