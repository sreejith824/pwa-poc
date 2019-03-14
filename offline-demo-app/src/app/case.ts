import {Riskpoint} from './riskpoint';

export class Case {
    constructor() {

    }
    name: string;
    customerId: string;
    customerGroupName: string;
    caseDate: string;
    caseType: string;
    caseStatus: string;
    caseCurrency: string;
    riskpoint: Riskpoint;
}
