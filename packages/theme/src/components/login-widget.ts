import clsx from 'clsx'

const loginInnerStateClsx = () => ({
  connecting: {
    container:
      'flex flex-col items-center justify-center p-3 w-screen max-w-sm',
    imgWrapper: 'flex items-center mt-5',
    img: 'w-12 h-12 rounded-full',
    divider: 'w-16 border border-dashed border-primary-solid-focus relative',
    icon: 'w-12 h-12 rounded',
    message: 'mt-5 text-sm font-semibold text-text-primary',
    'message-detail': 'mt-2 text-sm text-text-secondary text-center',
    error: 'text-sm text-center text-danger-solid-focus',
    header: 'mt-4 text-lg font-medium text-center text-text-primary',
    buttons: 'mt-8 space-x-3',
    'connect-icon-success':
      'flex items-center justify-center w-5 h-5 bg-success-solid rounded-full absolute -top-2.5 left-1/2 -translate-x-1/2',
    'connect-icon-error':
      'flex items-center justify-center w-5 h-5 bg-danger-solid rounded-full absolute -top-2.5 left-1/2 -translate-x-1/2',
    'connect-icon': 'w-3 h-3 text-neutral-solid-fg',
  },
  idle: {
    container: 'flex flex-col items-center',
    icon: 'mb-7 w-20 h-20',
    heading: 'text-base text-text-primary',
    message: 'text-sm font-light text-center text-text-secondary',
  },
})

const loginWidgetTriggerClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx(
    'px-1.5 text-sm rounded-md border shadow bg-neutral-outline-active border-neutral-solid-focus',
    className,
  )

const loginWidgetDialogOverlayClsx = ({
  className = '',
}: {
  className?: string
} = {}) => clsx('fixed z-50 w-screen h-screen bg-neutral-solid/40', className)

const loginWidgetDialogContentWrapperClsx = ({
  className = '',
}: {
  className?: string
} = {}) =>
  clsx(
    'flex fixed top-1/2 w-full max-w-sm left-1/2 z-50 bg-background-popup rounded-2xl -translate-x-1/2 -translate-y-1/2 p-3',
    className,
  )

const loginWallet = ({
  isInstalled,
  className = '',
}: {
  isInstalled?: boolean
  className?: string
}) =>
  clsx(
    'flex flex-col items-center justify-center h-20 gap-2 border rounded-lg border-neutral-outline-active',
    {
      'hover:bg-neutral-outline-hover transition': isInstalled,
      'opacity-25 cursor-not-allowed': !isInstalled,
    },
    className,
  )

const loginWalletIconClsx = ({ className = '' }: { className?: string } = {}) =>
  clsx('w-6 h-6 rounded', className)

const loginWalletNameClsx = ({ className = '' }: { className?: string } = {}) =>
  clsx('text-sm font-medium text-text-secondary', className)

const loginWalletListTabsClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx('max-w-sm w-screen space-y-3 h-[292px]', className)

const loginWalletListTabListClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx(
    'flex rounded-lg bg-neutral-outline-active p-0.5 items-center',
    className,
  )

const loginWalletListTabTriggerWrapperClsx = ({
  className = '',
}: { className?: string } = {}) => clsx('pl-0 pr-0', className)

const loginWalletListTabTriggerClsx = ({
  className = '',
  isSelected,
}: { className?: string; isSelected?: boolean } = {}) =>
  clsx('rounded-md ', { 'bg-background-popup': isSelected }, className)

const loginWalletListTabTriggerDividerClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx('h-3 border-r border-neutral-solid-focus', className)

const loginWalletListTabContentClsx = ({
  className = '',
}: { className?: string } = {}) => clsx('grid grid-cols-4 gap-1', className)

const loginWalletListDropdownTriggerClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx(
    'flex items-center justify-center rounded-md hover:bg-background-popup text-text-secondary w-7 h-7',
    className,
  )

const loginWalletListDropdownItemWrapperClsx = ({
  className = '',
}: { className?: string } = {}) => clsx('py-0.5', className)

const loginWalletListDropdownItemClsx = ({
  className = '',
}: { className?: string } = {}) => clsx('text-text-secondary', className)

const loginWidget = {
  loginInnerStateClsx,
  loginWidgetTriggerClsx,
  loginWidgetDialogOverlayClsx,
  loginWidgetDialogContentWrapperClsx,
  loginWallet,
  loginWalletIconClsx,
  loginWalletNameClsx,
  loginWalletListTabsClsx,
  loginWalletListTabListClsx,
  loginWalletListTabTriggerWrapperClsx,
  loginWalletListTabTriggerClsx,
  loginWalletListTabTriggerDividerClsx,
  loginWalletListTabContentClsx,
  loginWalletListDropdownTriggerClsx,
  loginWalletListDropdownItemWrapperClsx,
  loginWalletListDropdownItemClsx,
}

export { loginWidget }
