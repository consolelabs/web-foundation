import {
  Button,
  List,
  Modal,
  ModalContent,
  Avatar,
} from '@consolelabs/ui-components'
import {
  IconDiscordColored,
  IconTelegramColored,
  IconMonitor,
  IconSlackColored,
  IconChevronRight,
} from '@consolelabs/icons'

import Link from 'next/link'
import { Fragment, useMemo, useState } from 'react'
import { AuthPanel } from '~cpn/AuthWidget'
import { useAuthStore, useProfileStore } from '~store'
import { ROUTES } from '~constants/routes'
import { MobileNavAccordionItem } from './MobileNavAccordionItem'
import { NavItem } from './type'

const MobileLoginPanel = () => {
  const [isOpenLoginPanel, setOpenLoginPanel] = useState(false)
  const { isLogging } = useAuthStore()

  return (
    <Modal open={isOpenLoginPanel} onOpenChange={setOpenLoginPanel}>
      <Button
        className="w-full justify-center sm:hidden"
        onClick={() => setOpenLoginPanel(true)}
      >
        {isLogging ? 'Logging in' : 'Login'}
      </Button>
      <ModalContent
        className="w-full !p-0"
        style={{
          width: 'calc(100% - 32px)',
        }}
      >
        <AuthPanel />
      </ModalContent>
    </Modal>
  )
}

const Header = ({ onClose }: { onClose: () => void }) => {
  const { me } = useProfileStore()
  return (
    <button className="" onClick={onClose}>
      <Link href={ROUTES.PROFILE} className="block w-full relative h-20 group">
        <div className="absolute inset-0 bg-transparent">
          <img
            className="object-cover w-full h-full"
            alt="Header"
            src="https://pbs.twimg.com/profile_banners/1168522102410010626/1684159976/300x100"
          />
        </div>
        <div className="relative z-10 flex h-full p-4 w-full items-center gap-4 text-white">
          <Avatar
            fallback={me?.profile_name}
            smallSrc={me?.platformIcon}
            src={me?.avatar as string}
          />
          <div className="flex-1 font-medium flex items-center">
            <span className=" inline-block w-40 whitespace-nowrap truncate">
              {me?.profile_name}
            </span>
          </div>
          <IconChevronRight className="text-lg group-hover:translate-x-1 transition" />
        </div>
      </Link>
    </button>
  )
}

export const MobileNav = (props: { onClose: () => void }) => {
  const { isLoggedIn } = useAuthStore()
  const { onClose } = props
  const { me } = useProfileStore()

  const mobileNavItems: NavItem[] = useMemo(
    (): NavItem[] => [
      {
        label: 'Features',
        href: '#',
      },
      {
        label: 'Develops',
        onClick: () => {},
      },
      {
        label: 'Apps',
        component: (
          <MobileNavAccordionItem
            label="Apps"
            items={[
              {
                title: '',
                data: [
                  {
                    label: 'Web Dashboard',
                    iconLeft: <IconMonitor />,
                    href: '#',
                  },
                  {
                    label: 'Discord',
                    iconLeft: <IconDiscordColored />,
                    href: '#',
                  },
                  {
                    label: 'Telegram',
                    iconLeft: <IconTelegramColored />,
                    href: '#',
                  },
                ],
              },
              {
                title: 'Soon available on',
                data: [
                  {
                    label: <span className="text-neutral-500">Discord</span>,
                    iconLeft: <IconSlackColored className="opacity-50" />,
                    href: '#',
                  },
                  {
                    label: <span className="text-neutral-500">iOS</span>,
                    iconLeft: <IconDiscordColored className="opacity-50" />,
                    href: '#',
                  },
                ],
              },
            ]}
          />
        ),
      },
      ...(!(isLoggedIn && me)
        ? [
            {
              label: 'Login',
              component: <MobileLoginPanel />,
            },
          ]
        : []),
    ],
    [isLoggedIn, me],
  )

  const itemRenderer = (item: NavItem) => {
    if (item.component) return item.component
    const wrapperClassName =
      'flex w-full text-left !text-base px-2 py-3 bg-white-pure !text-neutral-800 !font-normal hover:!text-black'

    const LinkWrapper = item.href ? Link : Fragment

    return (
      <Button
        variant="link"
        color="info"
        className={wrapperClassName}
        onClick={() => {
          onClose()
          item.onClick?.()
        }}
      >
        <LinkWrapper className="block flex-1" href={item.href as any}>
          {item.iconLeft && <span className="text-xl">{item.iconLeft}</span>}
          {item.label}
        </LinkWrapper>
      </Button>
    )
  }

  return (
    <div className="flex-1 overflow-y-scroll -mr-4">
      <div className="flex flex-col">
        {isLoggedIn && me && <Header onClose={onClose} />}
        <List
          rootClassName="flex-1 py-6 px-4 gap-4 w-full"
          data={mobileNavItems}
          renderItem={itemRenderer}
          listClassName="space-y-4 h-fit"
          viewportClassName="h-fit"
        />
      </div>
    </div>
  )
}
