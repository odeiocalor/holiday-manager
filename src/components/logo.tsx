import { TreePalm } from "lucide-react"

export function Logo({ size = null }: { size?: number | null }) {
    return (
        <span title="Logo da aplicação">
            <TreePalm size={size || 50} color="var(--color-primary-hex)" strokeWidth={1.5} />
        </span>
    )
}