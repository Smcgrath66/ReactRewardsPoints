export default function () {
  // simulates data coming from a database.
  return Promise.resolve([{
      custid: 1,
      name: "Customer 1",
      amt: 120,
      transactionDt: "05/01/2020",
      id: 1
    },
    {
      custid: 1,
      name: "Customer 1",
      amt: 75,
      transactionDt: "05/21/2020",
      id: 1
    },
    {
      id: 2,
      custid: 1,
      name: "Customer 1",
      amt: 94,
      transactionDt: "05/21/2020"
    },
    {
      id: 4,
      custid: 1,
      name: "Customer 1",
      amt: 10,
      transactionDt: "06/01/2020"
    },
    {
      id: 5,
      custid: 1,
      name: "Customer 1",
      amt: 75,
      transactionDt: "06/21/2020"
    },
    {
      id: 6,
      custid: 1,
      name: "Customer 1",
      amt: 200,
      transactionDt: "07/01/2020"
    },
    {
      id: 7,
      custid: 1,
      name: "Customer 1",
      amt: 1,
      transactionDt: "07/04/2020"
    },
    {
      id: 8,
      custid: 1,
      name: "Customer 1",
      amt: 80,
      transactionDt: "07/03/2020"
    },
    {
      id: 9,
      custid: 1,
      name: "Customer 1",
      amt: 224,
      transactionDt: "07/21/2020"
    },
    {
      id: 10,
      custid: 2,
      name: "Customer 2",
      amt: 125,
      transactionDt: "05/01/2020"
    },
    {
      id: 11,
      custid: 2,
      name: "Customer 2",
      amt: 75,
      transactionDt: "05/21/2020"
    },
    {
      id: 12,
      custid: 2,
      name: "Customer 2",
      amt: 10,
      transactionDt: "06/01/2020"
    },
    {
      id: 13,
      custid: 2,
      name: "Customer 2",
      amt: 75,
      transactionDt: "06/21/2020"
    },
    {
      id: 14,
      custid: 2,
      name: "Customer 2",
      amt: 200,
      transactionDt: "07/01/2020"
    },
    {
      id: 16,
      custid: 2,
      name: "Customer 2",
      amt: 224,
      transactionDt: "07/21/2020"
    },
    {
      id: 17,
      custid: 3,
      name: "Customer 3",
      amt: 120,
      transactionDt: "06/21/2020"
    }
  ]);
}