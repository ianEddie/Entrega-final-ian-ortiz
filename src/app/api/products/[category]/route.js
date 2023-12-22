import { NextResponse } from 'next/server';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/config';

//
export async function GET(request, { params }) {
  // Params
  const { category } = params;
  // Data
  const products = collection(db, 'products');
  // Filtered products
  const filteredproducts =
    category === 'all'
      ? products
      : query(products, where('category', '==', category));
  // Docs info
  const info = await getDocs(filteredproducts);
  // get Docs
  const docs = info.docs.map((item) => item.data());
  // Response
  return NextResponse.json(docs);
}
