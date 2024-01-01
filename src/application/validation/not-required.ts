import { RequiredFieldError } from '@/application/errors'
import { Validator } from '@/application/validation'

export class NotRequired implements Validator {
  constructor (
    readonly value: any,
    readonly fieldName?: string
  ) {}

  validate (): Error | undefined {
    return new RequiredFieldError(this.fieldName)
  }
}

export class NotRequiredString extends NotRequired {
  constructor (
    override readonly value: string,
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  override validate (): Error | undefined {
    if (this.value === '') {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class NotRequiredNumber extends NotRequired {
  constructor (
    override readonly value: number,
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  override validate (): Error | undefined {
    if (this.value === NaN) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
