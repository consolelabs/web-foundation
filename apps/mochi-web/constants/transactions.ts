import {
  Arb,
  Avalanche,
  Base,
  Bnb,
  DesktopCodeSolid,
  DiscordColored,
  Eth,
  Ftm,
  LinkLine,
  Matic,
  Mnt,
  WebSolid,
} from '@mochi-ui/icons'
import { SVGProps } from 'react'
import Telegram from '~cpn/MochiWidget/PlatformPicker/icons/telegram-ic'

export type TransactionActionType =
  | 'transfer'
  | 'vault_transfer'
  | 'payme'
  | 'swap'
  | 'paylink'
  | 'airdrop'
  | 'deposit'
  | 'withdraw'

export const typeFilters: {
  label: string
  value: TransactionActionType | 'all'
}[] = [
  {
    label: 'All Types',
    value: 'all',
  },
  {
    label: 'Tip',
    value: 'transfer',
  },
  {
    label: 'Deposit',
    value: 'deposit',
  },
  {
    label: 'Withdraw',
    value: 'withdraw',
  },
  {
    label: 'Pay Me',
    value: 'payme',
  },
  {
    label: 'Pay Link',
    value: 'paylink',
  },
  {
    label: 'Vault',
    value: 'vault_transfer',
  },
]

export type TransactionPlatform = 'discord' | 'web' | 'telegram'

export const platformFilters: {
  label: string
  value: TransactionPlatform | 'all'
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}[] = [
  {
    label: 'All Platforms',
    value: 'all',
    icon: WebSolid,
  },
  {
    label: 'Web',
    value: 'web',
    icon: DesktopCodeSolid,
  },
  {
    label: 'Discord',
    value: 'discord',
    icon: DiscordColored,
  },
  {
    label: 'Telegram',
    value: 'telegram',
    icon: Telegram,
  },
]

export const networkFilters: {
  label: string
  value: string
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}[] = [
  {
    label: 'All Networks',
    value: 'all',
    icon: LinkLine,
  },
  {
    label: 'Ethereum',
    value: '1',
    icon: Eth,
  },
  {
    label: 'Binance',
    value: '56',
    icon: Bnb,
  },
  {
    label: 'Base',
    value: '8453',
    icon: Base,
  },
  {
    label: 'Fantom',
    value: '250',
    icon: Ftm,
  },
  {
    label: 'Arbitrum',
    value: '42161',
    icon: Arb,
  },
  {
    label: 'Avalanche',
    value: '43114',
    icon: Avalanche,
  },
  {
    label: 'Mantle',
    value: '5000',
    icon: Mnt,
  },
  {
    label: 'Polygon',
    value: '137',
    icon: Matic,
  },
]
