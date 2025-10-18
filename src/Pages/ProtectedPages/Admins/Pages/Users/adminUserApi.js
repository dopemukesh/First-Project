// Dummy API for admin users
export async function fetchAdminUsers() {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 700));
  return [
    {
      id: 1,
      name: 'Mukesh Yadav',
      email: 'mukesh@example.com',
      role: 'Super Admin',
      joined: '2023-01-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Aryan Bhutani',
      email: 'aryan@example.com',
      role: 'Admin',
      joined: '2023-03-22',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Shaurya Singh',
      email: 'shaurya@example.com',
      role: 'Teacher',
      joined: '2024-02-10',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Gautam Agarwal',
      email: 'gautam@example.com',
      role: 'Admin',
      joined: '2024-02-10',
      status: 'Active',
    },
    // Add more dummy users as needed
  ];
}
