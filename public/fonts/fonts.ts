import { Great_Vibes, Public_Sans, Playfair_Display, Geist, Geist_Mono } from 'next/font/google';

export const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-great-vibes', //переменные CSS для использования
});

export const publicSans = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-public-sans', //переменные CSS для использования
});

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair-display', //переменные CSS для использования
});

export const geist = Geist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geist', //переменные CSS для использования
});

export const geistMono = Geist_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geistMono', //переменные CSS для использования
});

