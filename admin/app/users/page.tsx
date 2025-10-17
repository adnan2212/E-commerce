import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
  return [
    {
      id: "728ed521",
      avatar: "/users/1.png",
      status: "active",
      fullName: "John Doe",
      email: "johndoe@gmail.com"
    },
    {
      id: "f1c7a9b3",
      avatar: "/users/2.png",
      status: "inactive",
      fullName: "Jane Smith",
      email: "janesmith@hotmail.com"
    },
    {
      id: "7a4bc73a",
      avatar: "/users/3.png",
      status: "active",
      fullName: "Alice Johnson",
      email: "alice.johnson@gmail.com"
    },
    {
      id: "b2f6c28d",
      avatar: "/users/4.png",
      status: "active",
      fullName: "Robert Lee",
      email: "robertlee@yahoo.com"
    },
    {
      id: "c8e2d4a1",
      avatar: "/users/5.png",
      status: "active",
      fullName: "Michael Brown",
      email: "michaelbrown@outlook.com"
    },
    {
      id: "a51d98b6",
      avatar: "/users/6.png",
      status: "inactive",
      fullName: "Sophia Davis",
      email: "sophiadavis@gmail.com"
    },
    {
      id: "9d8e233a",
      avatar: "/users/7.png",
      status: "inactive",
      fullName: "David Wilson",
      email: "davidwilson@hotmail.com"
    },
    {
      id: "64b4f7a2",
      avatar: "/users/8.png",
      status: "inactive",
      fullName: "Emily Clark",
      email: "emilyclark@yahoo.com"
    },
    {
      id: "7e1a3f5b",
      avatar: "/users/9.png",
      status: "active",
      fullName: "Matthew Taylor",
      email: "matthewtaylor@outlook.com"
    },
    {
      id: "a35c8791",
      avatar: "/users/10.png",
      status: "active",
      fullName: "Megan Harris",
      email: "meganharris@gmail.com"
    },
    {
      id: "f7d8e1c9",
      avatar: "/users/11.png",
      status: "inactive",
      fullName: "Chris Adams",
      email: "chrisadams@hotmail.com"
    },
    {
      id: "348bc6d3",
      avatar: "/users/12.png",
      status: "active",
      fullName: "Sarah Evans",
      email: "sarahevans@outlook.com"
    },
    {
      id: "2b99a7d5",
      avatar: "/users/13.png",
      status: "active",
      fullName: "Daniel Walker",
      email: "danielwalker@yahoo.com"
    },
    {
      id: "fcb01b4e",
      avatar: "/users/14.png",
      status: "inactive",
      fullName: "Olivia Hall",
      email: "oliviahall@gmail.com"
    },
    {
      id: "134fa729",
      avatar: "/users/15.png",
      status: "active",
      fullName: "James Allen",
      email: "jamesallen@hotmail.com"
    },
    {
      id: "c71e8308",
      avatar: "/users/16.png",
      status: "inactive",
      fullName: "Charlotte Young",
      email: "charlottyoung@outlook.com"
    },
    {
      id: "b1a4e5c9",
      avatar: "/users/17.png",
      status: "active",
      fullName: "Jack King",
      email: "jackking@yahoo.com"
    },
    {
      id: "82d3c03a",
      avatar: "/users/18.png",
      status: "active",
      fullName: "William Scott",
      email: "williamscott@gmail.com"
    },
    {
      id: "d0e2f517",
      avatar: "/users/19.png",
      status: "inactive",
      fullName: "Liam Perez",
      email: "liamperez@hotmail.com"
    },
    {
      id: "2fa9c7e0",
      avatar: "/users/20.png",
      status: "active",
      fullName: "Isabella Rodriguez",
      email: "isabellarodriguez@gmail.com"
    },
    {
      id: "df6b3e1a",
      avatar: "/users/21.png",
      status: "inactive",
      fullName: "Samuel Green",
      email: "samuelgreen@gmail.com"
    },
    {
      id: "ea9d52f9",
      avatar: "/users/22.png",
      status: "inactive",
      fullName: "Ava Martinez",
      email: "avamartinez@gmail.com"
    },
    {
      id: "ef5e3c2b",
      avatar: "/users/23.png",
      status: "active",
      fullName: "Henry Carter",
      email: "henrycarter@yahoo.com"
    },
    {
      id: "9930f6bc",
      avatar: "/users/24.png",
      status: "active",
      fullName: "Sophia Wilson",
      email: "sophiawilson@outlook.com"
    },
    {
      id: "58e8c61a",
      avatar: "/users/25.png",
      status: "inactive",
      fullName: "Olivia Smith",
      email: "oliviasmith@gmail.com"
    },
    {
      id: "3460d2d4",
      avatar: "/users/26.png",
      status: "active",
      fullName: "Benjamin Lee",
      email: "benjaminlee@outlook.com"
    },
    {
      id: "c73590d8",
      avatar: "/users/27.png",
      status: "active",
      fullName: "James White",
      email: "jameswhite@hotmail.com"
    },
    {
      id: "28ff6d72",
      avatar: "/users/28.png",
      status: "inactive",
      fullName: "Jessica Garcia",
      email: "jessicagarcia@gmail.com"
    },
    {
      id: "dff3e6ab",
      avatar: "/users/29.png",
      status: "inactive",
      fullName: "Elijah Davis",
      email: "elijahdavis@outlook.com"
    },
    {
      id: "2c6d82a1",
      avatar: "/users/30.png",
      status: "active",
      fullName: "Lily Anderson",
      email: "lilyanderson@yahoo.com"
    },
    {
      id: "9feec1d8",
      avatar: "/users/31.png",
      status: "active",
      fullName: "Lucas King",
      email: "lucasking@hotmail.com"
    },
    {
      id: "4539c023",
      avatar: "/users/32.png",
      status: "inactive",
      fullName: "Emma Thomas",
      email: "emmathomas@outlook.com"
    },
    {
      id: "af5e3a1e",
      avatar: "/users/33.png",
      status: "active",
      fullName: "Amelia Martinez",
      email: "ameliama@outlook.com"
    },
    {
      id: "75ad01b4",
      avatar: "/users/34.png",
      status: "active",
      fullName: "Daniel Clark",
      email: "danielclark@yahoo.com"
    },
    // {
    //   id: "faed81c6",
    //   avatar: "/users/35.png",
    //   status: "inactive",
    //   fullName: "Grace Lewis",
    //   email: "gracelewis@outlook.com"
    // },
    // {
    //   id: "60e5fc79",
    //   avatar: "/users/36.png",
    //   status: "active",
    //   fullName: "Matthew Harris",
    //   email: "matthewharris@gmail.com"
    // },
    // {
    //   id: "fbb54a6b",
    //   avatar: "/users/37.png",
    //   status: "active",
    //   fullName: "Henry Smith",
    //   email: "henrysmith@gmail.com"
    // },
    // {
    //   id: "cf07b3d6",
    //   avatar: "/users/38.png",
    //   status: "inactive",
    //   fullName: "Megan Johnson",
    //   email: "meganjohnson@yahoo.com"
    // },
    // {
    //   id: "b17f6d74",
    //   avatar: "/users/39.png",
    //   status: "inactive",
    //   fullName: "George Davis",
    //   email: "georgedavis@hotmail.com"
    // },
    // {
    //   id: "77325a83",
    //   avatar: "/users/40.png",
    //   status: "active",
    //   fullName: "Charlotte Brown",
    //   email: "charlottebrown@gmail.com"
    // }
  ];
};

const UsersPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default UsersPage;