"use client"

import { useEffect, useRef } from "react"

const stages = [
  { label: "Strong\nPlacements" },
  { label: "Better\nBrand" },
  { label: "Stronger\nAdmissions" },
  { label: "Higher\nStudent Quality" },
  { label: "More Recruiter\nInterest" },
]

export function PlacementFlywheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const rotationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    // Much bigger canvas
    const size = Math.min(720, window.innerWidth - 32)
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const radius = size * 0.34
    const nodeRadius = size * 0.14

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, size, size)

      // Connecting arcs with arrows
      for (let i = 0; i < stages.length; i++) {
        const angle1 = (i / stages.length) * Math.PI * 2 - Math.PI / 2 + rotationRef.current
        const angle2 = ((i + 1) / stages.length) * Math.PI * 2 - Math.PI / 2 + rotationRef.current
        const x1 = cx + Math.cos(angle1) * radius
        const y1 = cy + Math.sin(angle1) * radius
        const x2 = cx + Math.cos(angle2) * radius
        const y2 = cy + Math.sin(angle2) * radius

        const midAngle = (angle1 + angle2) / 2
        const cpx = cx + Math.cos(midAngle) * radius * 0.55
        const cpy = cy + Math.sin(midAngle) * radius * 0.55

        ctx.strokeStyle = "rgba(255,255,255,0.25)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.quadraticCurveTo(cpx, cpy, x2, y2)
        ctx.stroke()

        // Arrow
        const arrowAngle = Math.atan2(y2 - cpy, x2 - cpx)
        const arrowLen = 14
        ctx.beginPath()
        ctx.moveTo(x2, y2)
        ctx.lineTo(x2 - arrowLen * Math.cos(arrowAngle - 0.4), y2 - arrowLen * Math.sin(arrowAngle - 0.4))
        ctx.moveTo(x2, y2)
        ctx.lineTo(x2 - arrowLen * Math.cos(arrowAngle + 0.4), y2 - arrowLen * Math.sin(arrowAngle + 0.4))
        ctx.stroke()
      }

      // Nodes - bigger
      for (let i = 0; i < stages.length; i++) {
        const angle = (i / stages.length) * Math.PI * 2 - Math.PI / 2 + rotationRef.current
        const x = cx + Math.cos(angle) * radius
        const y = cy + Math.sin(angle) * radius

        ctx.beginPath()
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? "#ffffff" : "rgba(255,255,255,0.06)"
        ctx.fill()
        ctx.strokeStyle = i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)"
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.fillStyle = i === 0 ? "#000000" : "#ffffff"
        // Much bigger font
        ctx.font = `800 ${Math.max(14, size * 0.032)}px system-ui, -apple-system, sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        const lines = stages[i].label.split("\n")
        lines.forEach((line, li) => {
          ctx.fillText(line, x, y + (li - (lines.length - 1) / 2) * (size * 0.042))
        })
      }

      // Center text - bigger
      ctx.fillStyle = "rgba(255,255,255,0.15)"
      ctx.font = `900 ${size * 0.035}px system-ui, -apple-system, sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("PLACEMENT", cx, cy - size * 0.025)
      ctx.fillText("FLYWHEEL", cx, cy + size * 0.025)

      rotationRef.current += 0.0003
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="max-w-full" />
}
