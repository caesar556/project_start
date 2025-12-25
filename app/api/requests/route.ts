import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { requestSchema } from "@/lib/validation";

export async function GET() {
  const requests = await prisma.request.findMany({
    orderBy: { createdAt: "desc" },
  });
  return success(requests);
}

export async function POST(req: Request) {
  try {
    const body = requestSchema.parse(await req.json());

    const request = await prisma.request.create({
      data: body,
    });

    return success(request, 201);
  } catch (e: any) {
    return error(e.message);
  }
}

/**
 * تحديث status فقط (Admin Dashboard)
 */
export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json();

    const request = await prisma.request.update({
      where: { id },
      data: { status },
    });

    return success(request);
  } catch (e: any) {
    return error(e.message);
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.request.delete({ where: { id } });
    return success({ deleted: true });
  } catch (e: any) {
    return error(e.message);
  }
}
