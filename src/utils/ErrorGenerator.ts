export default class ErrorGenerator extends Error {
  public type: number
  constructor(message: string, type: number) {
    super(message)
    this.type = type
  }
}