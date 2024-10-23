import { DateObject } from "react-multi-date-picker";

export type PeopleTask = {
    id: string | number;
    name: string;
    task: string;
    comment?: string[];
    file?: string[];
    startDate: DateObject | number;
    endDate: DateObject | number;
    hasUploadFile: boolean;
    completeStatus: boolean;
    evaluation: number | null;
  };
  
  export type ProjectState = {
    subject: string;
    title: string;
    projectDescription: string;
    projectDueDate: DateObject | number | null;
    peopleTasks: PeopleTask[];
  };