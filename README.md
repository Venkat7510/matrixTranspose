#  Transpose Matrix API

---

##  Table of Contents

- [Features]
- [Dependencies]
- [Setup and Installation]
  - [Prerequisites]
  - [Installation Steps]
- [API Endpoints]
- [Usage]
- [Testing]
- [Screenshot]

---

##  Features

-   **Matrix Transposition**: Converts the matrix effortlessly.
-   **Data Validation**: Ensures the matrices fit the required constraints.
-   **Error identifying function**: Detailed error messages for rectifying discrepancies.

---

## Dependencies
    
1.  **Environment Framework**
     
    Express.js : In our API, This handles routing, requests, and responses. (https://expressjs.com/)
    body-parser : Parses incoming request bodies in a middleware before handlers, available under the req.body property

2.  **Testing Framework**

    Mocha -  Utilized as the primary test runner for our API's testing (https://mochajs.org/).
    Chai -   Used this  BDD/TDD assertion library for Node.js that pairs  well with Mocha, providing readable tests.(https://www.chaijs.com/)

---

## Setup and Installation

### Prerequisites

-   **Node.js**: Runtime environment.(https://nodejs.org/).

### Installation Steps

1.  **Clone the Repository**
    gh repo clone Venkat7510/matrixTranspose
    
    
2.  **Install Dependencies**
    
    npm install
    npm install -g express 
    npm install body-parser
    
3.  **Start the Server**
    
    node index.js
   

>   By default, the server will initiate on `http://localhost:3000`. 

---

##  API endPoints

**POST `/transpose`**

- **Function**: Obtain the transposed matrix.
- **Payload**: A matrix structured in JSON.
- **Returns**: The transposed matrix or an error message.

---

##  Usage

To transpose a matrix, I have sent a POST request to the `/transpose` endpoint with the matrix payload

curl -d '[[1,2,3],[4,5,6],[7,8,9]]' POST -H "Content-Type: application/json"  http://localhost:3000/transpose

---

## Testing

To ensure the reliability and validity of the matrix transposition logic,We utilize Mocha as our test runner and Chai as the assertion library to guarantee the application behaviour as expected.

1.  **Installation**
    
    npm install mocha chai --save-dev
    npm install --save-dev @types/mocha @types/chai
    
2.  **Initiate the Test**

    npm test

---

## Screenshots

![solarized dualmode](https://firebasestorage.googleapis.com/v0/b/venkatseviappanportfolio.appspot.com/o/outputScreenshotGitBash.png?alt=media&token=0df5b8bb-9886-43a3-9664-efec3b4e7d0a)

![solarized dualmode](https://firebasestorage.googleapis.com/v0/b/venkatseviappanportfolio.appspot.com/o/outputScreenshot.jpg?alt=media&token=594a2da6-4152-4289-a176-33e933d03251)



