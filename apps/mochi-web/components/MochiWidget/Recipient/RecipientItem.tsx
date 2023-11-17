import { Avatar, Heading } from '@consolelabs/core'
import { Profile } from '@consolelabs/mochi-rest'
import { truncateWallet } from '~utils/string'
import { IconCheck } from '@consolelabs/icons'
import PlatformIcon from '../PlatformPicker/PlatformIcon'

interface ItemProps {
  profile: Profile
  onSelect?: (item: Profile) => void
  isSelected?: boolean
}

export const RecipientItem: React.FC<ItemProps> = ({
  profile,
  onSelect,
  isSelected,
}) => {
  const { id, avatar, associated_accounts } = profile
  const account = associated_accounts?.[0]

  return (
    <li
      className="flex flex-row items-center w-full min-w-[230px] p-2 hover:bg-[#FAF9F7] rounded-lg space-x-2 cursor-pointer"
      key={id}
      role="presentation"
      onClick={() => onSelect?.(profile)}
    >
      <Avatar src={avatar || '/logo.png'} size="sm" />
      <div className="flex flex-col flex-1">
        <Heading as="h3" className="text-sm font-medium">
          {account?.platform_metadata.username}
        </Heading>
        <span className="text-xs text-[#848281] capitalize font-medium">
          {account?.platform} • {truncateWallet(account?.platform_identifier)}
        </span>
      </div>
      {isSelected ? (
        <IconCheck className="text-primary-700" />
      ) : (
        <PlatformIcon
          className="text-neutral-500"
          platform={account?.platform ?? ''}
          compact
        />
      )}
    </li>
  )
}
