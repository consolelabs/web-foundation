import { Vault } from './vault'
import { faker } from '@faker-js/faker'

export function Vaults() {
  return (
    <div className="grid grid-cols-3 auto-rows-auto gap-5 items-start mx-auto w-full">
      {new Array(4).fill(0).map((_, i) => {
        return (
          <Vault
            state={faker.datatype.boolean() ? 'idle' : 'running'}
            key={`vault-${i}`}
          />
        )
      })}
    </div>
  )
}
