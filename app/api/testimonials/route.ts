import { NextResponse } from 'next/server';
import TestimonialsJSON from './testimonials.json';

export async function getTestimonials() {
	return NextResponse.json(TestimonialsJSON).json();
}