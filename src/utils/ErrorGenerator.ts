export default class ErrorGenerator extends Error {
  public type: number
  public error: Error
  constructor(message: string, type: number, error: Error) {
    super(message)
    this.type = type
    this.error = error
  }
}