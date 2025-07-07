export interface ITask{
    id: number,
    title: string,
    description? : string | undefined,
    priority: "High" | "Medium" | "Low",
    completed: boolean,
    createdAt: string,
    dueDate: string,
}

export type Theme = "dark" | "light" | "system"
  
export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}