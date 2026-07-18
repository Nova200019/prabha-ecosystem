import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const products = await prisma.product.findMany({
      where: {
        ...(category ? { categoryId: category } : {}),
        isPublished: true
      },
      include: {
        category: true,
        inventory: true
      }
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Role check would go here in production (e.g., checking if user is ADMIN)
    const body = await request.json();
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: body.slug,
        sku: body.sku,
        brand: body.brand,
        description: body.description,
        basePrice: body.basePrice,
        mrp: body.mrp,
        hsnCode: body.hsnCode,
        categoryId: body.categoryId
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
