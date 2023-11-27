import { HTMLAttributes, forwardRef } from 'react'
import { formHelperText } from '@consolelabs/theme'
import { useFromControl } from '@consolelabs/form-context'
import type * as Polymorphic from '@consolelabs/polymorphic'

type PolymorphicFormErrorMessage = Polymorphic.ForwardRefComponent<
  'span',
  HTMLAttributes<HTMLSpanElement>
>

export const FormErrorMessage = forwardRef((props, ref) => {
  const { as: Component = 'span', className } = props
  const { error } = useFromControl()

  if (!error) return

  return (
    <Component
      className={formHelperText({ className, error: true })}
      ref={ref}
      {...props}
    />
  )
}) as PolymorphicFormErrorMessage
