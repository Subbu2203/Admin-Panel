export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive";
  avatar: string;
  joinedDate: string;
}

export const initialUsers: User[] = [
  { id: "1", name: "Priya Sharma", email: "priya@example.com", role: "Admin", status: "Active", avatar: "PS", joinedDate: "2024-01-15" },
  { id: "2", name: "Rahul Kumar", email: "rahul@example.com", role: "Editor", status: "Active", avatar: "RK", joinedDate: "2024-02-20" },
  { id: "3", name: "Ananya Patel", email: "ananya@example.com", role: "Viewer", status: "Inactive", avatar: "AP", joinedDate: "2024-03-10" },
  { id: "4", name: "Vikram Singh", email: "vikram@example.com", role: "Editor", status: "Active", avatar: "VS", joinedDate: "2024-04-05" },
  { id: "5", name: "Meera Reddy", email: "meera@example.com", role: "Viewer", status: "Active", avatar: "MR", joinedDate: "2024-05-12" },
  { id: "6", name: "Arjun Nair", email: "arjun@example.com", role: "Admin", status: "Active", avatar: "AN", joinedDate: "2024-06-01" },
  { id: "7", name: "Kavya Iyer", email: "kavya@example.com", role: "Editor", status: "Inactive", avatar: "KI", joinedDate: "2024-07-18" },
  { id: "8", name: "Deepak Joshi", email: "deepak@example.com", role: "Viewer", status: "Active", avatar: "DJ", joinedDate: "2024-08-22" },
];

export const revenueData = [
  { month: "Jan", revenue: 4200, users: 120 },
  { month: "Feb", revenue: 5800, users: 180 },
  { month: "Mar", revenue: 4900, users: 150 },
  { month: "Apr", revenue: 7200, users: 220 },
  { month: "May", revenue: 6100, users: 190 },
  { month: "Jun", revenue: 8400, users: 280 },
  { month: "Jul", revenue: 7600, users: 250 },
];

export const trafficData = [
  { name: "Direct", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Organic", value: 30, color: "hsl(var(--chart-2))" },
  { name: "Social", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Referral", value: 15, color: "hsl(var(--chart-4))" },
];

export const activityData = [
  { day: "Mon", visits: 45, signups: 12 },
  { day: "Tue", visits: 52, signups: 18 },
  { day: "Wed", visits: 38, signups: 8 },
  { day: "Thu", visits: 65, signups: 24 },
  { day: "Fri", visits: 58, signups: 20 },
  { day: "Sat", visits: 30, signups: 6 },
  { day: "Sun", visits: 25, signups: 4 },
];
