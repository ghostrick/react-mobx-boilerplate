// @flow
import { observable, action } from 'mobx'

export default class CounterStore {

  constructor() {}

  @observable.ref count: number = 0

  @action inc = () => {
    this.count = ++this.count
  }

  @action dec = () => {
    this.count = --this.count
  }
}
