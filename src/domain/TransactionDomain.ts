import { TransactionTypeDomain } from './TransactionTypeDomain';

export class TransactionDomain {
    id: number;
    timestamp: Date;
    value: number;
    transactionType: TransactionTypeDomain;
}