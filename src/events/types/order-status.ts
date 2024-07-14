export enum OrderStatus {
    //When the order has been created, but no reserved.
    Created = 'created',
    
    // The ticketd the order is trying to reserve has already
    // been reserved, or the order got canceled or expires.
    Cancelled = 'cancelled',

    //When the order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // The order has reserved and purchased the ticket.
    Complete = 'complete'
}