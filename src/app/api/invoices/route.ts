import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    
    // Calculate GST based on items
    let subtotal = 0;
    let cgst = 0;
    let sgst = 0;
    let igst = 0; // Assuming intra-state for default logic (CGST + SGST)

    body.items.forEach((item: any) => {
      const amount = item.quantity * item.rate;
      subtotal += amount;
      
      // Default 18% split into 9% CGST and 9% SGST
      const taxAmount = amount * 0.18;
      cgst += taxAmount / 2;
      sgst += taxAmount / 2;
    });

    const total = subtotal + cgst + sgst + igst;

    const invoice = await prisma.invoice.create({
      data: {
        invoiceNo: `INV-${Date.now()}`,
        userId: userId, // The customer or dealer ID
        type: 'TAX_INVOICE',
        subtotal,
        cgst,
        sgst,
        igst,
        total,
        status: 'UNPAID',
        items: {
          create: body.items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            rate: item.rate,
            amount: item.quantity * item.rate
          }))
        }
      },
      include: {
        items: true
      }
    });

    return NextResponse.json(invoice);
  } catch (error) {
    console.error('Invoice Creation Error:', error);
    return NextResponse.json({ error: 'Failed to generate invoice' }, { status: 500 });
  }
}
