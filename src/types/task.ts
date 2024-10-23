export enum TaskStatus {
    REQUESTED = "requested",
    ACCEPTED = "accepted",
    DECLINED = "declined",
  }
  
  export interface Task {
    id: number;
    title: string;
    date: Date;
    creatorId: number;
    assignedUserIds: number[];
    assignedUserStatus: Record<number, TaskStatus>; // Track status for each assigned user
  }

  export interface TaskState {
    tasks: Task[];
  }
  
  export interface CreateTaskPayload {
    title: string;
    date: Date;
    assignedUserIds: number[];
  }