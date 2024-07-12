import {
  Badge,
  BadgeIcon,
  Button,
  Card,
  Label,
  Separator,
  Typography,
} from '@mochi-ui/core'
import { faker } from '@faker-js/faker'
import { StarSolid } from '@mochi-ui/icons'
import { Progress } from './ui/progress'
import { clsx } from 'clsx'

interface Props {
  state: 'idle' | 'running'
}

export function Vault(props: Props) {
  return (
    <Card className="relative !rounded-lg shadow border-gray-200 flex flex-col !p-5 gap-y-5">
      <div className="flex absolute top-0 right-0 gap-x-1 p-1 rounded-bl bg-gray-150">
        {new Array(faker.number.int({ min: 1, max: 3 })).fill(0).map((_, i) => {
          return (
            <StarSolid
              className="w-3 h-3 text-yellow-500"
              key={`vault-quality-${i}`}
            />
          )
        })}
      </div>
      <div className="flex flex-col gap-y-1">
        <Typography level="p3" fontWeight="md">
          Vault name
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge appearance="danger">
            <BadgeIcon>🔥</BadgeIcon>
            Hot
          </Badge>
          <Badge appearance="secondary">
            <BadgeIcon>💀</BadgeIcon>
            Risky
          </Badge>
        </div>
      </div>
      <div
        className={clsx('grid grid-cols-2 auto-rows-auto gap-1', {
          hidden: props.state === 'running',
        })}
      >
        <Typography level="p5" fontWeight="md">
          Max cap
        </Typography>
        <Typography level="p5" fontWeight="md" className="ml-auto">
          10K
        </Typography>
        <Progress value={66} className="col-span-2" />
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-4 justify-evenly">
          <div className="flex flex-col gap-y-1 justify-center items-center p-2">
            <Typography level="p5" color="textTertiary" fontWeight="md">
              {props.state === 'idle' ? 'TVL' : 'Initial'}
            </Typography>
            <Typography level="p2" color="neutral" fontWeight="md">
              $0
            </Typography>
          </div>
          <div className="flex flex-col gap-y-1 justify-center items-center p-2">
            <Typography level="p5" color="textTertiary" fontWeight="md">
              {props.state === 'idle' ? 'Past Round Return' : 'Profit/Loss'}
            </Typography>
            <Typography level="p2" color="neutral" fontWeight="md">
              0%
            </Typography>
          </div>
        </div>
        {props.state === 'running' && faker.datatype.boolean() && (
          <>
            <Separator className="bg-gray-400" />
            <div className="flex gap-x-4 justify-evenly">
              <div className="flex flex-col gap-y-1 justify-center items-center p-2">
                <Typography level="p5" color="textTertiary" fontWeight="md">
                  Your share
                </Typography>
                <Typography level="p2" color="neutral" fontWeight="md">
                  10%
                </Typography>
              </div>
              <div className="flex flex-col gap-y-1 justify-center items-center p-2">
                <Typography level="p5" color="textTertiary" fontWeight="md">
                  Floating profit
                </Typography>
                <Typography level="p2" color="neutral" fontWeight="md">
                  $100
                </Typography>
              </div>
            </div>
          </>
        )}
      </div>
      <Button disabled={props.state === 'running'}>
        {props.state === 'idle' ? 'Deposit' : 'Running round 3'}
      </Button>
    </Card>
  )
}
