import { NextResponse } from 'next/server';
import { experience } from '@/data/experience';

export const GET = () => NextResponse.json({ experience });
