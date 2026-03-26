"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { getServiceSlugFromName } from "@/lib/services-data"

interface Frame {
  id: number
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  isHovered: boolean
  serviceName?: string
  href?: string
}

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  showFrame: boolean
  isHovered: boolean
  serviceName?: string
  href?: string
}

function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
  serviceName,
  href,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!frameRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' } // Start loading 50px before entering viewport
    )

    observer.observe(frameRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      // Always play video when loaded, not just on hover
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }, [shouldLoad])

  const content = (
    <div
      ref={frameRef}
      className={`relative ${href ? 'cursor-pointer' : ''} ${className}`}
      style={{
        width,
        height,
        minHeight: '100%',
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-none">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {shouldLoad ? (
              <video
                className="w-full h-full object-cover"
                src={video}
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                ref={videoRef}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse flex items-center justify-center">
                <div className="text-zinc-500 text-xs text-center px-2">Loading...</div>
              </div>
            )}
          </div>
        </div>

        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            <div
              className="absolute top-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
        
        {/* Service Name Overlay on Hover */}
        {isHovered && serviceName && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-black/70 backdrop-blur-sm px-6 py-3 rounded-lg">
              <h3 className="text-white text-xl font-semibold tracking-wide">
                {serviceName}
              </h3>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link to={href} className="block w-full h-full cursor-pointer">
        {content}
      </Link>
    )
  }

  return content
}

interface DynamicFrameLayoutProps {
  frames: Frame[]
  className?: string
  showFrames?: boolean
  hoverSize?: number
  gapSize?: number
}

export function DynamicFrameLayout({ 
  frames: initialFrames, 
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

  const getRowSizes = () => {
    if (hovered === null) return "1fr 1fr 1fr"
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) return "1fr 1fr 1fr"
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: isMobile ? "1fr 1fr 1fr" : getRowSizes(),
        gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : getColSizes(),
        gap: isMobile ? `${Math.max(gapSize * 0.5, 2)}px` : `${gapSize}px`,
        transition: isMobile ? "none" : "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        minHeight: isMobile ? "600px" : "auto",
        visibility: "visible",
        opacity: 1,
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4)
        const col = Math.floor(frame.defaultPos.x / 4)
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)
        
        // Get href from frame or generate from serviceName
        const slug = frame.serviceName ? getServiceSlugFromName(frame.serviceName) : null
        const href = frame.href || (slug ? `/services/${slug}` : undefined)

        return (
          <motion.div
            key={frame.id}
            className="relative"
            style={{
              transformOrigin,
              transition: isMobile ? "none" : "transform 0.4s ease",
            }}
            onMouseEnter={() => !isMobile && setHovered({ row, col })}
            onMouseLeave={() => !isMobile && setHovered(null)}
            onTouchStart={() => {
              // On mobile, show service name on tap
              if (isMobile) {
                setHovered({ row, col })
                setTimeout(() => setHovered(null), 2000)
              }
            }}
          >
            <FrameComponent
              video={frame.video}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
              serviceName={frame.serviceName}
              href={href}
            />
            {/* Mobile touch indicator */}
            {isMobile && hovered?.row === row && hovered?.col === col && (
              <div className="absolute inset-0 border-2 border-[#14B8A6] rounded-lg pointer-events-none z-20" />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

