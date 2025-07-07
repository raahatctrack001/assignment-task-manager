import type { ITask } from "../utils/types";

export const sampleTasks: ITask[] = [
  {
    id: 1,
    title: "Complete React assignment",
    description: "Build a task tracker app using React and TypeScript.",
    priority: "High",
    completed: false,
    createdAt: "2024-07-01T09:00:00Z",
    dueDate: "2024-07-08",
  },
  {
    id: 2,
    title: "Write project README",
    description: "Cover all features, instructions, and screenshots.",
    priority: "Medium",
    completed: false,
    createdAt: "2024-07-01T10:30:00Z",
    dueDate: "2024-07-05",
  },
  {
    id: 3,
    title: "Add dark mode toggle",
    description: "Implement theme context and toggle button.",
    priority: "High",
    completed: true,
    createdAt: "2024-07-02T08:00:00Z",
    dueDate: "2024-07-04",
  },
  {
    id: 4,
    title: "Refactor header component",
    description: "Make it responsive and integrate mobile menu.",
    priority: "Low",
    completed: false,
    createdAt: "2024-07-02T11:00:00Z",
    dueDate: "2024-07-07",
  },
  {
    id: 5,
    title: "Implement ProtectedRoute",
    description: "Prevent unauthenticated access to dashboard.",
    priority: "Medium",
    completed: true,
    createdAt: "2024-07-03T07:00:00Z",
    dueDate: "2024-07-05",
  },
  {
    id: 6,
    title: "Setup localStorage persistence",
    description: "Ensure tasks and theme persist after refresh.",
    priority: "High",
    completed: false,
    createdAt: "2024-07-03T14:30:00Z",
    dueDate: "2024-07-10",
  },
  {
    id: 7,
    title: "Add task priority filter",
    description: "",
    priority: "Low",
    completed: true,
    createdAt: "2024-07-04T09:45:00Z",
    dueDate: "2024-07-06",
  },
  {
    id: 8,
    title: "Implement search functionality",
    description: "Allow filtering tasks by title or description.",
    priority: "Medium",
    completed: false,
    createdAt: "2024-07-04T13:15:00Z",
    dueDate: "2024-07-09",
  },
  {
    id: 9,
    title: "Deploy on Netlify",
    description: "Connect GitHub repo and deploy live demo.",
    priority: "High",
    completed: false,
    createdAt: "2024-07-05T10:00:00Z",
    dueDate: "2024-07-08",
  },
  {
    id: 10,
    title: "Test on mobile devices",
    description: "Ensure responsiveness and touch interactions.",
    priority: "Low",
    completed: true,
    createdAt: "2024-07-05T14:20:00Z",
    dueDate: "2024-07-07",
  },
  // ... and 40 more generated similarly
];

for (let i = 11; i <= 50; i++) {
  sampleTasks.push({
    id: i,
    title: `Task number ${i}`,
    description: `Description for task ${i}.`,
    priority: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)] as "High"|"Medium"|"Low",
    completed: Math.random() > 0.5,
    createdAt: new Date(
      2024,
      6,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60)
    ).toISOString(),
    dueDate: new Date(
      2024,
      6,
      Math.floor(Math.random() * 10) + 5
    ).toISOString().substring(0, 10),
  });
}
export default sampleTasks;
