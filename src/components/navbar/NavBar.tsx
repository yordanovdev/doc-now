import logo from '../../assets/navigation/logo.svg'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'
import { useEffect, useRef, useState } from 'react'
import { NavBarMobile } from './NavBarMobile'
import { Link } from '@tanstack/react-router'

export const NavBar = () => {
  const [navBarMobileOpen, setNavBarMobileOpen] = useState(false)

  const onCloseNavBarMobile = () => {
    setNavBarMobileOpen(false)
  }

  const containerRef = useRef<HTMLDivElement | null>(null)
  const highlightRef = useRef<HTMLSpanElement | null>(null)

  const handleButtonEnter = (el: HTMLElement) => {
    moveHighlightTo(el)
    if (highlightRef.current)
      highlightRef.current.style.background = 'var(--secondary)'
  }

  const moveHighlightTo = (el: HTMLElement) => {
    if (!containerRef.current || !highlightRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()

    const left =
      elRect.left - containerRect.left + containerRef.current.scrollLeft
    const top = elRect.top - containerRect.top + containerRef.current.scrollTop

    highlightRef.current.style.width = `${Math.round(elRect.width)}px`
    highlightRef.current.style.height = `${Math.round(elRect.height)}px`
    highlightRef.current.style.transform = `translate(${Math.round(
      left,
    )}px, ${Math.round(top)}px)`
  }

  useEffect(() => {
    // Position highlight under first button on mount
    const first = containerRef.current?.querySelector<HTMLButtonElement>(
      '[data-slot="button"]',
    )
    if (first) moveHighlightTo(first)
    if (highlightRef.current)
      highlightRef.current.style.background = 'var(--primary)'
    // reposition on window resize
    const onResize = () => {
      const btn = containerRef.current?.querySelector<HTMLButtonElement>(
        '[data-slot="button"]',
      )
      if (btn) moveHighlightTo(btn)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return (
    <nav className="xl:border-b z-10 bg-white">
      <NavBarMobile open={navBarMobileOpen} onClose={onCloseNavBarMobile} />
      <div className="flex items-center justify-between max-w-378 max-md:max-w-md mx-auto px-4 md:px-6 xl:px-10 py-4 xl:py-3">
        <div className="flex justify-start xl:flex-1 md:mr-6 xl:mr-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-25.75 h-4.5" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center justify-start gap-6 xl:flex-1 xl:justify-center">
          <Typography variant={'link'} as={'li'}>
            <Link to="/">Начало</Link>
          </Typography>
          <Typography variant={'link'} as={'li'} className="whitespace-nowrap">
            <Link to="/about-us">За Нас</Link>
          </Typography>
          <Typography variant={'link'} as={'li'}>
            Услуги
          </Typography>
        </ul>
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setNavBarMobileOpen(true)}
            className="cursor-pointer md:hidden flex flex-col gap-1 w-8 h-6 items-center justify-center"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
          <div
            ref={containerRef}
            onMouseLeave={() => {
              if (highlightRef.current)
                highlightRef.current.style.background = 'var(--primary)'
            }}
            className="hidden md:flex bg-light-green w-fit p-1.5 rounded-full gap-1 items-center relative"
          >
            <span
              ref={highlightRef}
              aria-hidden
              className="pointer-events-none absolute rounded-full"
              style={{
                transform: 'translate(0px, 0px)',
                width: '0px',
                height: '0px',
                left: 0,
                top: 0,
                transition:
                  'background-color 420ms ease, transform 600ms cubic-bezier(.2,.9,.2,1), width 600ms cubic-bezier(.2,.9,.2,1), height 600ms cubic-bezier(.2,.9,.2,1)',
                background: 'var(--primary)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
                zIndex: 0,
              }}
            />

            <Button
              variant={'blank'}
              className="px-4.5 py-3 relative z-10"
              onMouseEnter={(e) =>
                handleButtonEnter(e.currentTarget as HTMLElement)
              }
            >
              <Typography variant={'p'} className="font-transformaMix">
                Вход
              </Typography>
            </Button>
            <Button
              variant={'blank'}
              className="px-4.5 py-3 relative z-10"
              onMouseEnter={(e) =>
                handleButtonEnter(e.currentTarget as HTMLElement)
              }
            >
              <Typography variant={'p'} className="font-transformaMix">
                Регистрация
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
