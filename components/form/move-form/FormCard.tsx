import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormRequest from "./FormRequest";

export default function FormCard() {
  return (
    <Card className="max-w-3xl shadow-lg mx-auto bg-orange-700/10" >
      <CardHeader className="text-center" >
        <CardTitle>Umzug anfragen</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und erhalten Sie ein unverbindliches
          Angebot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormRequest />
      </CardContent>
    </Card>
  );
}
