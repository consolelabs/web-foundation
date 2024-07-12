'use client'

import { LoginWidgetProvider } from '@mochi-web3/login-widget'
import { Platform } from '@consolelabs/mochi-formatter'
import { AUTH_TELEGRAM_ID, MOCHI_PROFILE_API } from '@/envs'

export function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <LoginWidgetProvider
      socials={[
        Platform.Discord,
        Platform.Telegram,
        Platform.Email,
        Platform.Twitter,
      ]}
      telegramBotId={AUTH_TELEGRAM_ID}
      profileApi={MOCHI_PROFILE_API}
    >
      {children}
    </LoginWidgetProvider>
  )
}
