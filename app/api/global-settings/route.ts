import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";

export async function GET() {
  const settings = await prisma.globalSetting.findFirst();
  return success(settings);
}

export async function PUT(req: Request) {
  const body = await req.json();

  const existing = await prisma.globalSetting.findFirst();

  if (!existing) {
    const created = await prisma.globalSetting.create({ data: body });
    return success(created, 201);
  }

  const updated = await prisma.globalSetting.update({
    where: { id: existing.id },
    data: body,
  });

  return success(updated);
}