import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { faqSchema } from "@/lib/validation";

export async function GET() {
  return success(
    await prisma.faq.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    }),
  );
}

export async function POST(req: Request) {
  try {
    const body = faqSchema.parse(await req.json());
    return success(await prisma.faq.create({ data: body }), 201);
  } catch (e: any) {
    return error(e.message);
  }
}

export async function PUT(req: Request) {
  try {
    const { id, ...data } = await req.json();

    const validated = faqSchema.partial().parse(data);

    return success(
      await prisma.faq.update({
        where: { id },
        data: validated,
      }),
    );
  } catch (e: any) {
    return error(e.message);
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.faq.delete({ where: { id } });
    return success({ deleted: true });
  } catch (e: any) {
    return error(e.message);
  }
}
