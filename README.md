# Skaffold

Used for kubernetes dev enviroment automation.

# Install Skaffold

https://skaffold.dev/docs/install/

# Verify

Try the command skaffold

Resource Types

- User `{email, password}`
- Ticket `{title, price, userId, orderId}`
- Order `{userId, status, ticketId, expiresAt}`
- Charge `{orderId, status, amount, stripeId, stripeRefundId }`

Services

- auth => User auth. Signup/signin/signout
- tickets => Ticket creation/editing.
- orders => Order creation/editing
- expiration => Watches for orders and cancels them after 15 minutes
- payments => Handle credit card payments.

Events

- UserCreated , UserUpdated
- OrderCreated, OrderCancelled, OrderExpired
- TicketCreated, TicketUpdated
- ChargeCreated

End Points : auth

| End Point             | Method | Body                               |
| --------------------- | ------ | ---------------------------------- |
| /api/users/signup     | POST   | {email: string, passwrod: string}  |
| /api/users/signin     | POST   | {email: string, password : string} |
| /api/users/signout    | POST   | {}                                 |
| /apiusers/currentuser | GET    | -                                  |

