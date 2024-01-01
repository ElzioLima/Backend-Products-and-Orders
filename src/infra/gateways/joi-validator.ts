import { EmailValidator, StringValidator, NumberValidator, NumberArrayValidator } from '@/domain/contracts/gateways'

import Joi from 'joi'

export class JoiValidator implements EmailValidator, StringValidator, NumberValidator, NumberArrayValidator {
  constructor () {}

  emailValidate ({ field }: EmailValidator.Input): EmailValidator.Output {
    const schema = Joi.object({
      field: Joi.string().email()
    })
    const isValid = schema.validate(field)
    if (isValid.error != null) {
      return false
    }
    return true
  }

  stringValidate ({ field }: StringValidator.Input): StringValidator.Output {
    const schema = Joi.object({
      field: Joi.string()
    })
    const isValid = schema.validate(field)
    if (isValid.error != null) {
      return false
    }
    return true
  }

  numberValidate ({ field }: NumberValidator.Input): NumberValidator.Output {
    const schema = Joi.object({
      field: Joi.number()
    })
    const isValid = schema.validate(field)
    if (isValid.error != null) {
      return false
    }
    return true
  }

  numberArrayValidate ({ field }: NumberArrayValidator.Input): NumberArrayValidator.Output {
    const schema = Joi.object({
      field: Joi.array().items(Joi.number())
    })
    const isValid = schema.validate({ field })
    if (isValid.error != null) {
      return false
    }
    return true
  }
}
