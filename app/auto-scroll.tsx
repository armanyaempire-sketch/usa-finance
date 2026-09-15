'use client'

import { useEffect } from 'react'

export default function AutoScroll() {
  useEffect(() => {
    let animationFrame = 0
    let startTime = 0

    const animate = (timestamp: number) => {
      const article = document.querySelector('.article') as HTMLElement | null
      if (!article) return

      if (startTime === 0) startTime = timestamp

      const rect = article.getBoundingClientRect()
      const articleTop = rect.top + window.scrollY
      const target = articleTop + article.offsetHeight * 0.45 - window.innerHeight * 0.5
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const destination = Math.max(0, Math.min(target, maxScroll))

      const duration = 5000
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

      const startScroll = (animate as typeof requestAnimationFrame & { startScroll?: number }).startScroll ?? window.scrollY
      ;(animate as typeof requestAnimationFrame & { startScroll?: number }).startScroll = startScroll

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
