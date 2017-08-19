import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    //... your code here
  }

  handleChange() {
    //... your code here
  }

  render() {
    console.log(transactions)
    return (
      <div className="ui grid container">

        <CategorySelector />

        <TransactionsList />

      </div>
    )
  }
}

export default AccountContainer
