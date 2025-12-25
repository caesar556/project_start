import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { offerSchema } from "@/lib/validations";

export async function GET() {
  const offers = await prisma.offer.findMany({
    orderBy: { createdAt: "desc" },
  });
  return success(offers);
}

export async function POST(req: Request) {
  try {
    const body = offerSchema.parse(await req.json());
    const offer = await prisma.offer.create({ data: body });
    return success(offer, 201);
  } catch (e: any) {
    return error(e.message);
  }
}

export async function PUT(req: Request) {
  try {
    const json = await req.json();
    const { id, ...data } = json;

    const validated = offerSchema.partial().parse(data);

    const offer = await prisma.offer.update({
      where: { id },
      data: validated,
    });

    return success(offer);
  } catch (e: any) {
    return error(e.message);
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.offer.delete({ where: { id } });
    return success({ deleted: true });
  } catch (e: any) {
    return error(e.message);
  }
}
