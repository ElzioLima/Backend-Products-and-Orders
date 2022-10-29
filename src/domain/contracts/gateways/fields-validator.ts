export interface EmailValidator {
  emailValidate: (input: EmailValidator.Input) => EmailValidator.Output
}

export namespace EmailValidator {
  export type Input = {
    field: string
  }
  export type Output = boolean
}

export interface StringValidator {
  stringValidate: (input: StringValidator.Input) => StringValidator.Output
}

export namespace StringValidator {
  export type Input = {
    field: string
  }
  export type Output = boolean
}

export interface NumberValidator {
  numberValidate: (input: NumberValidator.Input) => NumberValidator.Output
}

export namespace NumberValidator {
  export type Input = {
    field: number
  }
  export type Output = boolean
}

export interface NumberArrayValidator {
  numberArrayValidate: (input: NumberArrayValidator.Input) => NumberArrayValidator.Output
}

export namespace NumberArrayValidator {
  export type Input = {
    field: Number[]
  }

  export type Output = boolean
}
