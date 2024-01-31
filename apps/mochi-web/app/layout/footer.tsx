import { SOCIAL_LINKS } from '~constants'
import { SUBSTACK_DOMAIN } from '~envs'
import { X, Discord, Telegram, Consolelabs } from '@mochi-ui/icons'
import Link from 'next/link'
import { Logo, Footer as FooterCore, Typography } from '@mochi-ui/core'
import { ROUTES } from '~constants/routes'
import { useEffect } from 'react'
import clsx from 'clsx'

const PoweredBySolana = ({ className = '' }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
    viewBox="0 0 151 24"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
  >
    <svg
      width="151"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="svg-1864516501_9223"
    >
      <path
        d="M6.149 15.51a.572.572 0 0 1 .4-.163h13.833a.287.287 0 0 1 .262.171.274.274 0 0 1-.061.304l-2.733 2.682a.569.569 0 0 1-.4.162H3.616a.287.287 0 0 1-.26-.17.274.274 0 0 1 .06-.303l2.732-2.683Z"
        fill="url(#svg-1864516501_9223_a)"
      />
      <path
        d="M6.15 5.495a.588.588 0 0 1 .4-.162h13.833a.287.287 0 0 1 .262.172.274.274 0 0 1-.062.303L17.851 8.49a.568.568 0 0 1-.401.163H3.617a.287.287 0 0 1-.26-.172.274.274 0 0 1 .06-.301l2.732-2.685Z"
        fill="url(#svg-1864516501_9223_b)"
      />
      <path
        d="M17.85 10.471a.569.569 0 0 0-.4-.162H3.616a.287.287 0 0 0-.262.171.274.274 0 0 0 .061.303l2.733 2.683a.568.568 0 0 0 .4.163h13.833a.287.287 0 0 0 .262-.172.274.274 0 0 0-.061-.303L17.85 10.47Z"
        fill="url(#svg-1864516501_9223_c)"
      />
      <path
        d="M29.232 17V6.57h3.584c.681 0 1.279.135 1.792.406.513.261.91.635 1.19 1.12.29.476.434 1.031.434 1.666s-.145 1.19-.434 1.666c-.28.476-.677.85-1.19 1.12-.504.261-1.101.392-1.792.392h-2.464V17h-1.12Zm1.12-5.11h2.52c.448 0 .84-.084 1.176-.252a1.94 1.94 0 0 0 .784-.742c.187-.327.28-.71.28-1.148 0-.439-.093-.817-.28-1.134a1.848 1.848 0 0 0-.784-.728c-.336-.177-.728-.266-1.176-.266h-2.52v4.27Zm10.683 5.278c-.71 0-1.354-.168-1.932-.504a3.906 3.906 0 0 1-1.386-1.4c-.336-.597-.504-1.274-.504-2.03 0-.747.168-1.414.504-2.002a3.722 3.722 0 0 1 1.358-1.386c.578-.345 1.232-.518 1.96-.518s1.376.168 1.946.504a3.59 3.59 0 0 1 1.358 1.386c.336.588.504 1.26.504 2.016 0 .765-.173 1.447-.518 2.044a3.797 3.797 0 0 1-1.386 1.386 3.676 3.676 0 0 1-1.904.504Zm0-1.05a2.5 2.5 0 0 0 1.358-.378c.41-.252.732-.597.966-1.036.242-.439.364-.929.364-1.47 0-.541-.122-1.027-.364-1.456a2.678 2.678 0 0 0-.966-1.022 2.5 2.5 0 0 0-1.358-.378 2.57 2.57 0 0 0-1.372.378 2.823 2.823 0 0 0-.966 1.022c-.243.43-.364.915-.364 1.456 0 .541.121 1.031.364 1.47.242.439.564.784.966 1.036.41.252.868.378 1.372.378ZM47.93 17l-2.576-7.504h1.19l2.128 6.566h-.42l2.002-6.566h1.05l2.002 6.566h-.42l2.142-6.566h1.176L53.628 17h-1.05l-1.946-6.426h.294L48.98 17h-1.05Zm12.503.168c-.7 0-1.334-.168-1.904-.504a3.73 3.73 0 0 1-1.33-1.414c-.326-.597-.49-1.274-.49-2.03 0-.756.159-1.423.476-2.002a3.618 3.618 0 0 1 1.288-1.386 3.478 3.478 0 0 1 1.848-.504c.542 0 1.022.103 1.442.308.43.196.794.467 1.092.812.299.336.528.719.686 1.148a3.654 3.654 0 0 1 .224 1.624 4.676 4.676 0 0 1-.042.35h-6.342v-.98h5.74l-.504.42c.084-.513.024-.97-.182-1.372a2.26 2.26 0 0 0-.854-.966 2.261 2.261 0 0 0-1.26-.364c-.466 0-.9.121-1.302.364-.392.243-.7.583-.924 1.022-.224.43-.312.943-.266 1.54-.046.597.047 1.12.28 1.568.243.439.57.78.98 1.022.42.243.868.364 1.344.364.551 0 1.013-.13 1.386-.392.374-.261.677-.588.91-.98l.896.476a2.91 2.91 0 0 1-.686.938 3.76 3.76 0 0 1-1.106.686c-.42.168-.886.252-1.4.252ZM65.351 17V9.496h1.05v1.232l-.14-.182a1.97 1.97 0 0 1 .798-.84c.364-.205.802-.308 1.316-.308h.476v1.05h-.658c-.542 0-.976.168-1.302.504-.327.336-.49.812-.49 1.428V17h-1.05Zm7.866.168c-.7 0-1.335-.168-1.904-.504a3.73 3.73 0 0 1-1.33-1.414c-.327-.597-.49-1.274-.49-2.03 0-.756.159-1.423.476-2.002a3.619 3.619 0 0 1 1.288-1.386 3.478 3.478 0 0 1 1.848-.504c.541 0 1.022.103 1.442.308.43.196.793.467 1.092.812.299.336.527.719.686 1.148a3.654 3.654 0 0 1 .224 1.624c-.01.112-.023.229-.042.35h-6.342v-.98h5.74l-.504.42c.084-.513.023-.97-.182-1.372a2.26 2.26 0 0 0-.854-.966 2.261 2.261 0 0 0-1.26-.364c-.467 0-.9.121-1.302.364-.392.243-.7.583-.924 1.022-.224.43-.313.943-.266 1.54-.047.597.047 1.12.28 1.568.243.439.57.78.98 1.022.42.243.868.364 1.344.364.55 0 1.013-.13 1.386-.392.373-.261.677-.588.91-.98l.896.476c-.15.336-.378.649-.686.938-.308.28-.677.509-1.106.686a3.74 3.74 0 0 1-1.4.252Zm8.305 0c-.7 0-1.33-.168-1.89-.504a3.759 3.759 0 0 1-1.33-1.4c-.317-.597-.476-1.27-.476-2.016 0-.756.159-1.428.476-2.016a3.688 3.688 0 0 1 1.316-1.386c.56-.345 1.195-.518 1.904-.518.644 0 1.218.14 1.722.42.504.28.901.658 1.19 1.134l-.168.294V6.402h1.05V17h-1.05v-1.68l.168.154a2.843 2.843 0 0 1-1.176 1.26 3.474 3.474 0 0 1-1.736.434Zm.056-1.05a2.5 2.5 0 0 0 1.358-.378c.411-.252.733-.593.966-1.022.243-.439.364-.929.364-1.47 0-.541-.121-1.027-.364-1.456a2.65 2.65 0 0 0-.966-1.036 2.5 2.5 0 0 0-1.358-.378c-.494 0-.942.126-1.344.378a2.714 2.714 0 0 0-.952 1.022c-.224.43-.336.92-.336 1.47 0 .541.112 1.031.336 1.47.234.43.546.77.938 1.022a2.5 2.5 0 0 0 1.358.378Zm11.507 1.05a3.552 3.552 0 0 1-1.75-.434 2.866 2.866 0 0 1-1.162-1.26l.168-.154V17h-1.05V6.402h1.05v4.774l-.168-.294a3.303 3.303 0 0 1 1.19-1.134c.504-.28 1.078-.42 1.722-.42.71 0 1.34.173 1.89.518.56.336.999.798 1.316 1.386.327.588.49 1.26.49 2.016 0 .747-.163 1.419-.49 2.016a3.651 3.651 0 0 1-1.316 1.4c-.55.336-1.18.504-1.89.504Zm-.056-1.05a2.43 2.43 0 0 0 1.344-.378c.401-.252.714-.593.938-1.022a3.08 3.08 0 0 0 .35-1.47c0-.55-.117-1.04-.35-1.47a2.607 2.607 0 0 0-.938-1.022 2.43 2.43 0 0 0-1.344-.378c-.504 0-.961.126-1.372.378a2.794 2.794 0 0 0-.966 1.036 3 3 0 0 0-.35 1.456c0 .541.117 1.031.35 1.47.243.43.565.77.966 1.022.41.252.868.378 1.372.378Zm5.337 3.962c-.149 0-.303-.014-.462-.042a1.97 1.97 0 0 1-.448-.112v-.98c.094.01.21.023.35.042.15.028.299.042.448.042.458 0 .808-.098 1.05-.294.243-.187.481-.55.714-1.092l.476-1.12-.028.924-3.178-7.952h1.134l2.604 6.566h-.294l2.59-6.566h1.162l-3.43 8.456c-.149.364-.34.71-.574 1.036a2.545 2.545 0 0 1-.854.784c-.345.205-.765.308-1.26.308Zm12.839-2.912a4.225 4.225 0 0 1-1.806-.378 4.157 4.157 0 0 1-1.372-1.008c-.373-.43-.639-.9-.798-1.414l1.008-.378c.243.71.621 1.25 1.134 1.624.513.364 1.125.546 1.834.546.448 0 .84-.07 1.176-.21a1.86 1.86 0 0 0 .798-.616c.187-.261.28-.565.28-.91 0-.513-.14-.91-.42-1.19-.28-.28-.681-.495-1.204-.644l-1.876-.56c-.737-.215-1.307-.574-1.708-1.078a2.73 2.73 0 0 1-.588-1.722c0-.55.135-1.036.406-1.456.271-.43.639-.765 1.106-1.008a3.495 3.495 0 0 1 1.61-.364c.625 0 1.185.117 1.68.35.504.224.929.523 1.274.896s.593.789.742 1.246l-.98.392c-.224-.616-.574-1.083-1.05-1.4-.467-.317-1.017-.476-1.652-.476-.401 0-.756.07-1.064.21a1.63 1.63 0 0 0-.7.602c-.168.261-.252.57-.252.924 0 .43.135.817.406 1.162.271.336.686.588 1.246.756l1.652.49c.821.243 1.442.593 1.862 1.05.42.457.63 1.031.63 1.722 0 .56-.145 1.055-.434 1.484-.28.42-.677.751-1.19.994-.504.243-1.087.364-1.75.364Zm8.617 0a3.779 3.779 0 0 1-1.932-.504 3.901 3.901 0 0 1-1.386-1.4c-.336-.597-.504-1.274-.504-2.03 0-.747.168-1.414.504-2.002a3.725 3.725 0 0 1 1.358-1.386c.579-.345 1.232-.518 1.96-.518s1.377.168 1.946.504a3.589 3.589 0 0 1 1.358 1.386c.336.588.504 1.26.504 2.016 0 .765-.173 1.447-.518 2.044a3.791 3.791 0 0 1-1.386 1.386 3.675 3.675 0 0 1-1.904.504Zm0-1.05a2.5 2.5 0 0 0 1.358-.378c.411-.252.733-.597.966-1.036.243-.439.364-.929.364-1.47 0-.541-.121-1.027-.364-1.456a2.672 2.672 0 0 0-.966-1.022 2.5 2.5 0 0 0-1.358-.378c-.504 0-.961.126-1.372.378a2.83 2.83 0 0 0-.966 1.022c-.243.43-.364.915-.364 1.456 0 .541.121 1.031.364 1.47.243.439.565.784.966 1.036.411.252.868.378 1.372.378Zm5.38.882V6.402h1.05V17h-1.05Zm5.089.168c-.476 0-.901-.089-1.274-.266a2.264 2.264 0 0 1-.882-.756 1.9 1.9 0 0 1-.322-1.092c0-.392.084-.747.252-1.064a2.13 2.13 0 0 1 .784-.826c.355-.224.807-.383 1.358-.476l2.94-.49v.952l-2.688.448c-.541.093-.933.266-1.176.518-.233.252-.35.55-.35.896 0 .336.131.62.392.854.271.233.616.35 1.036.35.513 0 .961-.107 1.344-.322a2.427 2.427 0 0 0 1.218-2.142v-1.904c0-.448-.163-.812-.49-1.092-.327-.28-.751-.42-1.274-.42a2.1 2.1 0 0 0-1.204.35 2.07 2.07 0 0 0-.77.882l-.952-.518a2.49 2.49 0 0 1 .658-.868 3.577 3.577 0 0 1 1.05-.616 3.217 3.217 0 0 1 1.218-.238c.551 0 1.036.107 1.456.322.429.215.761.513.994.896.243.373.364.807.364 1.302V17h-1.05v-1.498l.154.154a2.25 2.25 0 0 1-.616.77 3.348 3.348 0 0 1-.966.546 3.54 3.54 0 0 1-1.204.196Zm5.562-.168V9.496h1.05v1.456l-.238-.056a2.36 2.36 0 0 1 .91-1.148c.429-.28.924-.42 1.484-.42.532 0 1.008.121 1.428.364a2.62 2.62 0 0 1 1.008 1.008c.252.42.378.896.378 1.428V17h-1.05v-4.466c0-.457-.084-.845-.252-1.162a1.677 1.677 0 0 0-.686-.728 1.893 1.893 0 0 0-1.008-.266c-.383 0-.724.089-1.022.266a1.736 1.736 0 0 0-.7.742c-.168.317-.252.7-.252 1.148V17h-1.05Zm9.915.168c-.476 0-.901-.089-1.274-.266a2.264 2.264 0 0 1-.882-.756 1.9 1.9 0 0 1-.322-1.092c0-.392.084-.747.252-1.064a2.13 2.13 0 0 1 .784-.826c.355-.224.807-.383 1.358-.476l2.94-.49v.952l-2.688.448c-.541.093-.933.266-1.176.518-.233.252-.35.55-.35.896 0 .336.131.62.392.854.271.233.616.35 1.036.35.513 0 .961-.107 1.344-.322a2.427 2.427 0 0 0 1.218-2.142v-1.904c0-.448-.163-.812-.49-1.092-.327-.28-.751-.42-1.274-.42a2.1 2.1 0 0 0-1.204.35 2.07 2.07 0 0 0-.77.882l-.952-.518a2.49 2.49 0 0 1 .658-.868 3.577 3.577 0 0 1 1.05-.616 3.217 3.217 0 0 1 1.218-.238c.551 0 1.036.107 1.456.322.429.215.761.513.994.896.243.373.364.807.364 1.302V17h-1.05v-1.498l.154.154a2.25 2.25 0 0 1-.616.77 3.348 3.348 0 0 1-.966.546 3.54 3.54 0 0 1-1.204.196Z"
        fill="#000"
      />
      <defs>
        <linearGradient
          id="svg-1864516501_9223_a"
          x1="19.061"
          y1="3.731"
          x2="9.764"
          y2="21.872"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="svg-1864516501_9223_b"
          x1="14.876"
          y1="1.585"
          x2="5.579"
          y2="19.727"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="svg-1864516501_9223_c"
          x1="16.955"
          y1="2.651"
          x2="7.657"
          y2="20.793"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
    </svg>
  </svg>
)

interface FooterProps {
  includeEmailSubscribe?: boolean
  className?: string
}

export const Footer = (props: FooterProps) => {
  const { includeEmailSubscribe, className } = props
  const year = new Date().getFullYear()

  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://substackapi.com/widget.js'
    script.async = true

    document.body.appendChild(script)
    ;(window as any).CustomSubstackWidget = {
      substackUrl: SUBSTACK_DOMAIN,
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      // Go to substackapi.com to unlock custom redirect
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <FooterCore
      className={className}
      copyrightText={
        <div className="flex flex-col gap-y-2">
          <PoweredBySolana className="self-center w-auto h-7 md:self-end" />
          <Typography
            level="p5"
            color="textDisabled"
            className="text-xs text-right"
          >
            Copyright © {year} Mochi, All rights reserved
          </Typography>
        </div>
      }
      logo={<Logo className="!h-9 !w-9" />}
      nav={[
        {
          title: 'Developers',
          links: [
            {
              href: SOCIAL_LINKS.DOCUMENT,
              text: 'Documentation',
              newTab: true,
            },
            { href: SOCIAL_LINKS.GITHUB, text: 'GitHub' },
          ],
        },
        {
          title: 'Resources',
          links: [{ href: ROUTES.CHANGELOG, as: Link, text: 'Changelog' }],
        },
        {
          title: 'Company',
          links: [
            { href: SOCIAL_LINKS.DISCORD, text: 'Contact' },
            { href: SOCIAL_LINKS.TWITTER, newTab: true, text: 'Twitter' },
          ],
        },
      ]}
      social={[
        {
          href: SOCIAL_LINKS.CONSOLE,
          Icon: Consolelabs,
          title: 'Console Labs',
        },
        { href: SOCIAL_LINKS.TWITTER, Icon: X, title: 'X' },
        { href: SOCIAL_LINKS.DISCORD, Icon: Discord, title: 'Discord' },
        { href: SOCIAL_LINKS.TELEGRAM, Icon: Telegram, title: 'Telegram' },
      ]}
      extraInfo={
        includeEmailSubscribe ? (
          <div>
            <div
              id="custom-substack-embed"
              className={clsx(
                '[&_input]:!bg-transparent',
                '[&_input]:placeholder:!text-text-disabled',
                '[&_input]:!text-text-primary',
                '[&_input]:!text-sm',
                '[&_input]:!border-solid',
                '[&_input]:!border',
                '[&_input]:!rounded-l',
                '[&_input]:!border-neutral-outline-border',
                '[&:has(.error)_input]:!caret-danger-outline-fg',
                '[&:has(.error)_input]:!border-danger-outline-border',
                '[&_form]:border-none',
                '[&_button]:!bg-primary-solid',
                '[&_button]:!text-primary-solid-fg',
                '[&_button]:!rounded-r',
                '[&_.error]:!text-danger-outline-fg',
                '[&_.error]:!text-xs',
                '[&_.error]:!tracking-tighter',
              )}
            />
          </div>
        ) : null
      }
    />
  )
}
