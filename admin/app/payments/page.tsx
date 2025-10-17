import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      "id": "728ed521",
      "amount": 134,
      "status": "pending",
      "fullName": "John Doe",
      "userId": "34",
      "email": "johndoe@gmail.com"
    },
    {
      "id": "f1c7a9b3",
      "amount": 215,
      "status": "processing",
      "fullName": "Jane Smith",
      "userId": "63",
      "email": "janesmith@hotmail.com"
    },
    {
      "id": "7a4bc73a",
      "amount": 550,
      "status": "success",
      "fullName": "Alice Johnson",
      "userId": "99",
      "email": "alice.johnson@gmail.com"
    },
    {
      "id": "b2f6c28d",
      "amount": 121,
      "status": "failed",
      "fullName": "Robert Lee",
      "userId": "60",
      "email": "robertlee@yahoo.com"
    },
    {
      "id": "c8e2d4a1",
      "amount": 320,
      "status": "success",
      "fullName": "Michael Brown",
      "userId": "20",
      "email": "michaelbrown@outlook.com"
    },
    {
      "id": "a51d98b6",
      "amount": 400,
      "status": "pending",
      "fullName": "Sophia Davis",
      "userId": "18",
      "email": "sophiadavis@gmail.com"
    },
    {
      "id": "9d8e233a",
      "amount": 72,
      "status": "processing",
      "fullName": "David Wilson",
      "userId": "48",
      "email": "davidwilson@hotmail.com"
    },
    {
      "id": "64b4f7a2",
      "amount": 189,
      "status": "pending",
      "fullName": "Emily Clark",
      "userId": "77",
      "email": "emilyclark@yahoo.com"
    },
    {
      "id": "7e1a3f5b",
      "amount": 67,
      "status": "failed",
      "fullName": "Matthew Taylor",
      "userId": "50",
      "email": "matthewtaylor@outlook.com"
    },
    {
      "id": "a35c8791",
      "amount": 600,
      "status": "success",
      "fullName": "Megan Harris",
      "userId": "64",
      "email": "meganharris@gmail.com"
    },
    {
      "id": "f7d8e1c9",
      "amount": 44,
      "status": "pending",
      "fullName": "Chris Adams",
      "userId": "9",
      "email": "chrisadams@hotmail.com"
    },
    {
      "id": "348bc6d3",
      "amount": 250,
      "status": "success",
      "fullName": "Sarah Evans",
      "userId": "15",
      "email": "sarahevans@outlook.com"
    },
    {
      "id": "2b99a7d5",
      "amount": 300,
      "status": "failed",
      "fullName": "Daniel Walker",
      "userId": "60",
      "email": "danielwalker@yahoo.com"
    },
    {
      "id": "fcb01b4e",
      "amount": 210,
      "status": "processing",
      "fullName": "Olivia Hall",
      "userId": "15",
      "email": "oliviahall@gmail.com"
    },
    {
      "id": "134fa729",
      "amount": 575,
      "status": "success",
      "fullName": "James Allen",
      "userId": "68",
      "email": "jamesallen@hotmail.com"
    },
    {
      "id": "c71e8308",
      "amount": 480,
      "status": "pending",
      "fullName": "Charlotte Young",
      "userId": "95",
      "email": "charlottyoung@outlook.com"
    },
    {
      "id": "b1a4e5c9",
      "amount": 120,
      "status": "failed",
      "fullName": "Jack King",
      "userId": "50",
      "email": "jackking@yahoo.com"
    },
    {
      "id": "82d3c03a",
      "amount": 75,
      "status": "success",
      "fullName": "William Scott",
      "userId": "92",
      "email": "williamscott@gmail.com"
    },
    {
      "id": "d0e2f517",
      "amount": 250,
      "status": "processing",
      "fullName": "Liam Perez",
      "userId": "24",
      "email": "liamperez@hotmail.com"
    },
    {
      "id": "2fa9c7e0",
      "amount": 130,
      "status": "success",
      "fullName": "Isabella Rodriguez",
      "userId": "37",
      "email": "isabellarodriguez@gmail.com"
    },
    {
      "id": "df6b3e1a",
      "amount": 190,
      "status": "pending",
      "fullName": "Samuel Green",
      "userId": "47",
      "email": "samuelgreen@gmail.com"
    },
    {
      "id": "ea9d52f9",
      "amount": 480,
      "status": "processing",
      "fullName": "Ava Martinez",
      "userId": "52",
      "email": "avamartinez@gmail.com"
    },
    {
      "id": "ef5e3c2b",
      "amount": 310,
      "status": "failed",
      "fullName": "Henry Carter",
      "userId": "49",
      "email": "henrycarter@yahoo.com"
    },
    {
      "id": "9930f6bc",
      "amount": 420,
      "status": "success",
      "fullName": "Sophia Wilson",
      "userId": "53",
      "email": "sophiawilson@outlook.com"
    },
    {
      "id": "58e8c61a",
      "amount": 350,
      "status": "pending",
      "fullName": "Olivia Smith",
      "userId": "24",
      "email": "oliviasmith@gmail.com"
    },
    {
      "id": "3460d2d4",
      "amount": 295,
      "status": "failed",
      "fullName": "Benjamin Lee",
      "userId": "41",
      "email": "benjaminlee@outlook.com"
    },
    {
      "id": "c73590d8",
      "amount": 680,
      "status": "success",
      "fullName": "James White",
      "userId": "21",
      "email": "jameswhite@hotmail.com"
    },
    {
      "id": "28ff6d72",
      "amount": 205,
      "status": "processing",
      "fullName": "Jessica Garcia",
      "userId": "66",
      "email": "jessicagarcia@gmail.com"
    },
    {
      "id": "dff3e6ab",
      "amount": 540,
      "status": "pending",
      "fullName": "Elijah Davis",
      "userId": "52",
      "email": "elijahdavis@outlook.com"
    },
    {
      "id": "2c6d82a1",
      "amount": 390,
      "status": "failed",
      "fullName": "Lily Anderson",
      "userId": "61",
      "email": "lilyanderson@yahoo.com"
    },
    {
      "id": "9feec1d8",
      "amount": 475,
      "status": "success",
      "fullName": "Lucas King",
      "userId": "45",
      "email": "lucasking@hotmail.com"
    },
    {
      "id": "4539c023",
      "amount": 150,
      "status": "processing",
      "fullName": "Emma Thomas",
      "userId": "65",
      "email": "emmathomas@outlook.com"
    },
    {
      "id": "af5e3a1e",
      "amount": 295,
      "status": "failed",
      "fullName": "Amelia Martinez",
      "userId": "62",
      "email": "ameliama@outlook.com"
    },
    {
      "id": "75ad01b4",
      "amount": 800,
      "status": "success",
      "fullName": "Daniel Clark",
      "userId": "27",
      "email": "danielclark@yahoo.com"
    },
    {
      "id": "faed81c6",
      "amount": 120,
      "status": "pending",
      "fullName": "Grace Lewis",
      "userId": "94",
      "email": "gracelewis@outlook.com"
    },
    {
      "id": "60e5fc79",
      "amount": 310,
      "status": "failed",
      "fullName": "Matthew Harris",
      "userId": "35",
      "email": "matthewharris@gmail.com"
    },
    {
      "id": "fbb54a6b",
      "amount": 255,
      "status": "success",
      "fullName": "Henry Smith",
      "userId": "7",
      "email": "henrysmith@gmail.com"
    },
    {
      "id": "cf07b3d6",
      "amount": 450,
      "status": "processing",
      "fullName": "Megan Johnson",
      "userId": "27",
      "email": "meganjohnson@yahoo.com"
    },
    {
      "id": "b17f6d74",
      "amount": 250,
      "status": "pending",
      "fullName": "George Davis",
      "userId": "63",
      "email": "georgedavis@hotmail.com"
    },
    {
      "id": "77325a83",
      "amount": 345,
      "status": "failed",
      "fullName": "Charlotte Brown",
      "userId": "9",
      "email": "charlottebrown@gmail.com"
    }
  ];
};


const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default PaymentsPage;