import { RequiredFieldError } from '@/application/errors'
import { Validator } from '@/application/validation'
import { JoiValidator } from '@/infra/gateways'

export class Required implements Validator {
  constructor (
    readonly value: any,
    readonly fieldName?: string,
    readonly validator: JoiValidator = new JoiValidator()
  ) {}

  validate (): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredString extends Required {
  constructor (
    override readonly value: string,
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  override validate (): Error | undefined {
    if (super.validate() !== undefined || this.value === '') {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredNumber extends Required {
  constructor (
    override readonly value: number,
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  override validate (): Error | undefined {
    if (super.validate() !== undefined || Number.isNaN(this.value)) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredNumberArray extends Required {
  constructor (
    override readonly value: Number[],
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  override validate (): Error | undefined {
    if (super.validate() !== undefined || !this.validator.numberArrayValidate({ field: this.value })) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
