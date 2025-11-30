import { Transaction, TransactionType } from './types';

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: '2023-10-01',
    description: 'Salary Deposit',
    amount: 5000,
    type: TransactionType.INCOME,
    category: 'Salary'
  },
  {
    id: '2',
    date: '2023-10-02',
    description: 'Rent Payment',
    amount: 1500,
    type: TransactionType.EXPENSE,
    category: 'Housing'
  },
  {
    id: '3',
    date: '2023-10-03',
    description: 'Grocery Shopping',
    amount: 120,
    type: TransactionType.EXPENSE,
    category: 'Food'
  },
  {
    id: '4',
    date: '2023-10-05',
    description: 'Freelance Project',
    amount: 800,
    type: TransactionType.INCOME,
    category: 'Freelance'
  },
  {
    id: '5',
    date: '2023-10-06',
    description: 'Netflix Subscription',
    amount: 15,
    type: TransactionType.EXPENSE,
    category: 'Entertainment'
  },
  {
    id: '6',
    date: '2023-10-08',
    description: 'Electric Bill',
    amount: 85,
    type: TransactionType.EXPENSE,
    category: 'Utilities'
  },
  {
    id: '7',
    date: '2023-10-10',
    description: 'Coffee Shop',
    amount: 25,
    type: TransactionType.EXPENSE,
    category: 'Food'
  },
  {
    id: '8',
    date: '2023-10-12',
    description: 'Gym Membership',
    amount: 50,
    type: TransactionType.EXPENSE,
    category: 'Health'
  },
  {
    id: '9',
    date: '2023-10-15',
    description: 'Stock Dividend',
    amount: 45,
    type: TransactionType.INCOME,
    category: 'Investment'
  },
  {
    id: '10',
    date: '2023-10-16',
    description: 'Car Insurance',
    amount: 110,
    type: TransactionType.EXPENSE,
    category: 'Insurance'
  }
];