import { prisma } from "@/lib/prisma";
import { success } from "@/lib/api-response";

export async function GET() {
  return success(
    await prisma.city.findMany({
      include: { services: true },
    }),
  );
}

export async function POST(req: Request) {
  const body = await req.json();

  return success(
    await prisma.city.create({
      data: {
        ...body,
        services: body.serviceIds
          ? {
              connect: body.serviceIds.map((id: string) => ({ id })),
            }
          : undefined,
      },
    }),
    201,
  );
}

export async function PUT(req: Request) {
  const body = await req.json();

  return success(
    await prisma.city.update({
      where: { id: body.id },
      data: {
        ...body,
        services: body.serviceIds
          ? {
              set: body.serviceIds.map((id: string) => ({ id })),
            }
          : undefined,
      },
    }),
  );
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.city.delete({ where: { id } });
  return success({ deleted: true });
}
