'use client'

import { useEffect } from 'react'

export default function AutoScroll() {
  useEffect(() => {
    let animationFrame = 0
    let startTime: number | null = null
    let startScroll: number | null = null

    const animate = (timestamp: number) => {
      const article = document.querySelector('.article') as HTMLElement | null

      if (!article) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      if (startTime === null) startTime = timestamp
      if (startScroll === null) startScroll = window.scrollY

      const rect = article.getBoundingClientRect()
      const articleTop = rect.top + window.scrollY
      const target =
        articleTop + article.offsetHeight * 0.45 - window.innerHeight * 0.5
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      const destination = Math.max(0, Math.min(target, maxScroll))

      const duration = 5000
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2

      window.scrollTo({
        top: startScroll + (destination - startScroll) * eased,
        behavior: 'auto',
      })

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return null
}
