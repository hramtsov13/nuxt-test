import { Counter } from './types'

export interface IState {
  counter: Counter
}

export default (): IState => ({
  counter: 0
})
