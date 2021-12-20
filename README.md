# Kubernetes

Install minikube
and `minikube start`

# Skaffold

Used for kubernetes dev enviroment automation.

# Install Skaffold

https://skaffold.dev/docs/install/

# Verify

Try the command skaffold

# Resource Types

- User

```
{
    email: string
    password: string
}

```

- Ticket

```
{
    title:string
    price : number
    userId: ref(User)
    orderId: ref(Order)
}

```

- Order

```
{
    userId: ref(User)
    status: Created | Canceled | AwaitingPayment | Completed
    ticketId: ref(Ticket)
    expiresAt: Date
}

```

- Charge

````

{
    orderId: ref(Order),
    status: Created | Failed | Completed
    amount : number
    stripeId : string
    stripeRefundId : string
}

```

# Services

- auth => User auth. Signup/signin/signout
- tickets => Ticket creation/editing. Knows wehter a ticket can be edited.
- orders => Order creation/editing
- expiration => Watches for orders and cancels them after 15 minutes
- payments => Handle credit card payments. Cancel order if payment fails. Completes if succeeds

Resources does not need to be one to one matching with services.

# Events

- UserCreated , UserUpdated
- OrderCreated, OrderCancelled, OrderExpired
- TicketCreated, TicketUpdated
- ChargeCreated

# Endpoints :

## auth

| End Point             | Method | Body                               |
| --------------------- | ------ | ---------------------------------- |
| /api/users/signup     | POST   | {email: string, passwrod: string}  |
| /api/users/signin     | POST   | {email: string, password : string} |
| /api/users/signout    | POST   | {}                                 |
| /apiusers/currentuser | GET    | -                                  |


# Middlewares

    - ## Routes
    - ## Error Handling
```
````
