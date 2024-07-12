'use client'

import {
  Button,
  DesktopNav,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  LogoWithText,
  MobileNav,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  ProfileBadge,
  Separator,
  TopBar,
  Typography,
} from '@mochi-ui/core'
import { LoginWidget, useLoginWidget } from '@mochi-web3/login-widget'
import { Layout } from '@mochi-ui/layout'
import { useState } from 'react'
import { truncateWallet } from '@/utils'
import { appVersion } from '@/constants'
import { LogoutSolid } from '@mochi-ui/icons'
import { Vaults } from '@/components/vaults'
import { SummaryStats } from '@/components/summary-stats'

const LoginPopover = () => {
  const { isLoadingProfile } = useLoginWidget()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger
        className="text-left"
        asChild
        // wrap Button by div to prevent event loss when use `asChild` props
      >
        <div>
          <Button className="justify-center w-20" loading={isLoadingProfile}>
            Login
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent className="!p-3" sideOffset={10} collisionPadding={20}>
          <LoginWidget onClose={() => setIsOpen(false)} raw />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  )
}

export default function Home() {
  const { logout, profile, isLoggedIn } = useLoginWidget()

  const mobileNavItems = [
    <div
      key="mobile-nav-login"
      className="flex flex-col gap-y-3 pb-3 border-b border-divider"
    >
      <Button
        variant="outline"
        color="danger"
        onClick={() => {
          logout()
        }}
      >
        Log out
      </Button>
    </div>,
  ]

  const desktopNavItems = [
    ...(isLoggedIn && profile
      ? [
          <DropdownMenu key="desktop-profile-dropdown-with-badge">
            <DropdownMenuTrigger>
              <ProfileBadge
                avatar={profile?.avatar || '/logo.png'}
                name={truncateWallet(profile.profile_name) || 'unknown'}
                platform="/logo.png"
              />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="text-red-600"
                  leftIcon={<LogoutSolid className="text-red-600" />}
                >
                  Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex flex-col">
                  <Typography level="p6" color="textDisabled" fontWeight="sm">
                    Powered by Console Labs
                  </Typography>
                  <Typography level="p6" color="textDisabled" fontWeight="sm">
                    Version {appVersion}
                  </Typography>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>,
        ]
      : [<LoginPopover key="desktop-login-popover" />]),
  ]

  return (
    <div className="flex flex-col min-h-full">
      <header>
        <TopBar
          leftSlot={
            <LogoWithText
              logoProps={{ size: 'xs' }}
              className="!gap-2"
              textClassName="h-8 w-18"
            />
          }
          rightSlot={
            <>
              <MobileNav
                navItems={mobileNavItems}
                /* className={isLoggedIn && profile ? '!hidden' : ''} */
                login={
                  <Drawer anchor="bottom">
                    <DrawerTrigger asChild>
                      <Button size="md">Login</Button>
                    </DrawerTrigger>
                    <DrawerPortal>
                      <DrawerOverlay />
                      <DrawerContent className="!bg-transparent [&>div]:!w-auto [&>div]:!max-w-screen [&>div]:sm:!max-w-max [&>div]:mx-auto [&>div]:!rounded-t-lg [&>div]:!rounded-b-none">
                        <LoginWidget />
                      </DrawerContent>
                    </DrawerPortal>
                  </Drawer>
                }
              />
              <DesktopNav
                navItems={desktopNavItems}
                className="relative z-10"
                /* className={ */
                /*   isLoggedIn && profile && window.innerWidth <= 1024 */
                /*     ? '!flex' */
                /*     : '' */
                /* } */
              />
            </>
          }
        />
      </header>
      <main className="flex flex-1 justify-center items-center">
        <div className="flex flex-col gap-y-16 w-full max-w-4xl">
          <SummaryStats />
          <Separator />
          <Vaults />
        </div>
      </main>
    </div>
  )
}
