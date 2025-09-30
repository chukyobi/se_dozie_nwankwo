import { cn } from "@/lib/utils"

interface AfricaMapProps {
  className?: string
}

export function AfricaMap({ className }: AfricaMapProps) {
  return (
    <svg
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      role="img"
      aria-label="Map of Africa"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M100 20 C120 20, 140 30, 150 50 C160 70, 165 90, 165 110 C165 130, 160 150, 150 165 C145 175, 140 185, 135 195 C130 205, 125 215, 120 220 C115 225, 110 228, 105 230 C100 232, 95 232, 90 230 C85 228, 80 225, 75 220 C70 215, 65 205, 60 195 C55 185, 50 175, 45 165 C35 150, 30 130, 30 110 C30 90, 35 70, 45 50 C55 30, 75 20, 100 20 Z M100 110 C110 110, 120 115, 125 125 C130 135, 130 145, 125 155 C120 165, 110 170, 100 170 C90 170, 80 165, 75 155 C70 145, 70 135, 75 125 C80 115, 90 110, 100 110 Z M140 80 C145 80, 150 85, 150 90 C150 95, 145 100, 140 100 C135 100, 130 95, 130 90 C130 85, 135 80, 140 80 Z M60 80 C65 80, 70 85, 70 90 C70 95, 65 100, 60 100 C55 100, 50 95, 50 90 C50 85, 55 80, 60 80 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-accent transition-colors duration-300"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
