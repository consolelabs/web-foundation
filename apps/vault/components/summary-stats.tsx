import { Typography, ValueChange, ValueChangeIndicator } from '@mochi-ui/core'
import { VaultColored } from '@mochi-ui/icons'
import { faker } from '@faker-js/faker'

export function SummaryStats() {
  return (
    <div className="grid grid-cols-9 grid-rows-2 gap-1.5 p-1.5 w-full rounded-xl bg-gray-150">
      <div className="flex overflow-hidden relative flex-col col-span-3 row-span-2 gap-y-1 p-5 pb-24 bg-white rounded-lg">
        <img
          className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-1/2"
          src="/bg.svg"
          alt=""
        />
        <VaultColored className="absolute bottom-0 left-1/2 w-28 h-28 -translate-x-1/2 translate-y-1/3" />
        <Typography level="p2" color="neutral" fontWeight="md">
          Welcome to Vaults
        </Typography>
        <Typography level="p5" fontWeight="md">
          Get ahead of the market by depositing into our vaults.
        </Typography>
      </div>
      {new Array(6).fill(0).map((_, i) => {
        const trend = faker.datatype.boolean()
        return (
          <div
            key={`${i}`}
            className="flex flex-col col-span-2 row-span-1 gap-y-3 justify-between p-5 bg-white rounded-lg"
          >
            <Typography level="p5" fontWeight="md">
              Stat #{i + 1}
            </Typography>
            <Typography level="p2" fontWeight="lg">
              $0
            </Typography>
            <div className="flex flex-wrap items-center space-x-1">
              <ValueChange trend={trend ? 'up' : 'down'}>
                <ValueChangeIndicator />
                {faker.number.int({ max: 100 })}%
              </ValueChange>
              <Typography
                level="p5"
                color={trend ? 'success' : 'danger'}
                fontWeight="md"
              >
                vs last round
              </Typography>
            </div>
          </div>
        )
      })}
    </div>
  )
}
