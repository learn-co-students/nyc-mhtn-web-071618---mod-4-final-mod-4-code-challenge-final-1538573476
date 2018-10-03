import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    //... your code here
    this.state={
      transactions: [],
      activeCategory: '',
      // clickedCategory: ''
    }
  }


  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactionData => this.setState({
      transactions: transactionData
    }))
  }

  //
  handleChange = (event) => {
    //... your code here
    console.log(event.target.value);

    const filteredTransactions = this.state.transactions.filter(transaction => transaction.category.toLowerCase() === event.target.value.toLowerCase())
    
    this.setState({
      // activeCategory: event.target.value,
      transactions: filteredTransactions
    // }, () => console.log("activeCategory",this.state.activeCategory))
    })
  }




  handleClick = (category) => {
    console.log('this is ', this)
    console.log('set state is ', this.setState)
    // debugger
    // console.log("hit");
    this.setState({
      activeCategory: category
    // }, () => console.log("activeCategory", this.state.activeCategory))
    })
  }

  render() {
    console.log("activeCategory is", this.state.activeCategory)
    console.log("transactions", this.state.transactions);

    const filteredTransactionsList =
    (this.state.activeCategory === "All" ? this.state.transactions : this.state.transactions.filter(transaction => transaction.category.includes(this.state.activeCategory)))

    return (
      <div className="ui grid container">

        <CategorySelector selectedCategory={this.state.activeCategory} handleChange={this.handleChange} handleClick={this.handleClick} />

        <TransactionsList transactions={this.state.transactions} />

      </div>
    )
  }
}

export default AccountContainer
