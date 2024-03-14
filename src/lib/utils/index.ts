import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Resolves React and Tailwind CSS styling collisions

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}