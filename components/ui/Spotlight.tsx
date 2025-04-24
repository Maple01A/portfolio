"use client"

import { cn } from "@/libs/utils"
import { useRef, useState, useEffect } from "react"

interface SpotlightProps {
    className?: string
    children?: React.ReactNode
}

export default function Spotlight({
    className = "",
    children
}: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseX = useRef(0)
    const mouseY = useRef(0)
    
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            mouseX.current = e.clientX - rect.left
            mouseY.current = e.clientY - rect.top
        }

        window.addEventListener("mousemove", handleMouseMove)
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full overflow-hidden bg-gray-50",
                className
            )}
        >
            {isMounted && (
                <div
                    className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-white opacity-[0.8]"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX.current}px ${mouseY.current}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
                    }}
                />
            )}
            {children}
        </div>
    )
}