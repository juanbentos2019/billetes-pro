import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { nombresPaises } from "./constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-');  // Replace multiple - with single -
}

export function generateSlug(denominacion: string, anio: string | number): string {
    return `${slugify(denominacion)}-${anio}`;
}

export function parseSlug(slug: string): { denominacionSlug: string; anio: string } | null {
    if (!slug) return null;

    const parts = slug.split('-');
    if (parts.length < 2) return null;

    const anio = parts.pop() || '';
    const denominacionSlug = parts.join('-');

    return { denominacionSlug, anio };
}

export function getCountryKeyFromSlug(slug: string): string | undefined {
    const normalizedSlug = slug.toLowerCase();
    return Object.keys(nombresPaises).find(key => {
        const name = nombresPaises[key];
        return slugify(name) === normalizedSlug || slugify(key) === normalizedSlug;
    });
}
