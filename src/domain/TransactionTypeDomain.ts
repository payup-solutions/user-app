export class TransactionTypeDomain {
    id: number;
    description: string;

    static getIconName(transactionTypeDomain: TransactionTypeDomain) {
        switch (transactionTypeDomain.id) {
            case 1:
                return 'beer';
            case 2:
                return 'pizza'
            default:
                break;
        }
    }
}