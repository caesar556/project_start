import { prisma } from "@/lib/prisma";
import { success } from "@/lib/api-response";

export async function GET() {
  return success(
    await prisma.service.findMany({
      include: { cities: true },
    }),
  );
}

export async function POST(req: Request) {
  const body = await req.json();
  return success(await prisma.service.create({ data: body }), 201);
}

export async function PUT(req: Request) {
  const body = await req.json();
  return success(
    await prisma.service.update({
      where: { id: body.id },
      data: body,
    }),
  );
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.service.delete({ where: { id } });
  return success({ deleted: true });
}
