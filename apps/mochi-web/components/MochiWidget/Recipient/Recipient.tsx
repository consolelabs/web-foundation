import { Profile } from '@consolelabs/mochi-rest'
import { useEffect, useMemo, useState } from 'react'
import {
  InputField,
  Popover,
  PopoverContent,
  PopoverAnchor,
} from '@consolelabs/core'
import { IconSpinner } from '@consolelabs/icons'
import { useDebounce } from '@dwarvesf/react-hooks'
import { API, GET_PATHS } from '~constants/api'
import { ChainPicker } from '../ChainPicker'
import { Platform } from '../PlatformPicker/type'
import { RecipientList } from './RecipientList'
import { PlatformPicker } from '../PlatformPicker'
import { SelectedRecipient } from './SelectedRecipient'
import { MAX_RECIPIENTS } from '../Tip/store'

interface RecipientProps {
  accessToken: string | null
  onLoginRequest?: () => void
  selectedRecipients?: Profile[]
  onSelectRecipient?: (item: Profile) => void
  onRemoveRecipient?: (item: Profile) => void
}

export const Recipient: React.FC<RecipientProps> = ({
  accessToken,
  onLoginRequest,
  selectedRecipients,
  onSelectRecipient,
  onRemoveRecipient,
}) => {
  const [isOpenRecipients, openRecipients] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>()
  const [recipients, setRecipients] = useState<Profile[]>([])
  const isOnChain = selectedPlatform?.platform === 'on-chain'
  const filteredRecipients = useMemo(
    () =>
      // TODO: remove this filter when API supprts platform query
      recipients.filter((item) => {
        const isPlatformMatch =
          item.associated_accounts?.[0].platform?.toLowerCase() ===
          selectedPlatform?.platform.toLowerCase()

        const isSearchMatch =
          item.associated_accounts?.[0].platform_metadata?.username
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
        return isPlatformMatch && isSearchMatch
      }),
    [searchTerm, selectedPlatform, recipients],
  )

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        API.MOCHI_PROFILE.get(
          GET_PATHS.PROFILE_SEARCH(searchTerm, selectedPlatform?.platform),
        )
          .json((r) => r.data)
          .then((data: Profile[]) => {
            setRecipients(data || [])
          })
          .finally(() => setIsSearching(false))
      } else {
        setRecipients([])
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm, selectedPlatform], // Only call effect if debounced search term changes
  )

  function handleFocusInput() {
    if (!accessToken) {
      onLoginRequest?.()
    } else if (!isOpenRecipients) {
      // open the recipient list
      openRecipients(true)
    }
  }

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  function onChainSearch() {
    // TODO: handle search onchain recipients
  }

  function handleInteractOutside(event: CustomEvent) {
    // Prevent recipients list from closing when interacting with platform picker and input
    const target = event.target as HTMLElement
    const platformPickerTrigger = document.getElementById(
      'platform-picker-trigger',
    )
    const platformPickerContent = document.getElementById(
      'platform-picker-content',
    )
    if (
      target.id === 'recipients' ||
      platformPickerTrigger?.contains(target) ||
      platformPickerContent?.contains(target)
    ) {
      event.preventDefault()
    }
  }

  return (
    <Popover open={isOpenRecipients} onOpenChange={openRecipients}>
      <div className="rounded-xl bg p-2 bg-[#f4f3f2] flex flex-col gap-y-3">
        <div className="flex justify-between items-center px-4 h-[34px]">
          <label
            htmlFor="recipients"
            className="text-sm font-semibold text-neutral-600"
          >
            Recipients
          </label>
          <span className="text-sm font-semibold text-neutral-600">
            {selectedRecipients?.length ?? 0}/{MAX_RECIPIENTS}
          </span>
        </div>

        <PopoverAnchor>
          <div
            className="flex gap-x-2 items-center py-2.5 px-4 rounded-lg bg-white-pure border border-white-pure"
            style={
              isOpenRecipients
                ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    border: '1px solid #017AFF',
                    boxShadow:
                      '0px 0px 0px 4px rgba(1, 122, 255, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
                  }
                : {}
            }
          >
            <span className="h-[34px] text-lg text-[#848281] pt-0.5">@</span>
            <input
              id="recipients"
              className="flex-1 min-w-[100px] h-full bg-transparent outline-none"
              placeholder={isOnChain ? 'Enter address' : 'Enter username'}
              value={searchTerm}
              onFocus={handleFocusInput}
              onChange={onSearchChange}
            />
            {isSearching && <IconSpinner width={18} height={18} />}
            <PlatformPicker
              triggerId="platform-picker-trigger"
              contentId="platform-picker-content"
              onSelect={setSelectedPlatform}
            />
          </div>
        </PopoverAnchor>
        {!!selectedRecipients?.length && (
          <div className="grid grid-cols-4 gap-7 py-2 px-4">
            {selectedRecipients?.map((item) => (
              <SelectedRecipient
                key={
                  (item.id || 'unknown') +
                  (item.associated_accounts?.[0].id || 'unknown')
                }
                profile={item}
                onRemove={onRemoveRecipient}
              />
            ))}
          </div>
        )}
      </div>
      <PopoverContent
        align="start"
        sideOffset={0}
        style={{ borderRadius: '0 0 8px 8px' }}
        className="flex flex-col gap-x-1 items-center py-3 px-3 shadow-md w-[398px] bg-white-pure"
        onInteractOutside={handleInteractOutside}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {isOnChain && (
          <InputField
            className="w-full text-sm !rounded-lg"
            autoFocus
            placeholder="Search address"
            startAdornment={<ChainPicker className="ml-3" />}
            onChange={onChainSearch}
          />
        )}
        <RecipientList
          data={filteredRecipients}
          selectedRecipients={selectedRecipients}
          onSelect={onSelectRecipient}
        />
      </PopoverContent>
    </Popover>
  )
}
