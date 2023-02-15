export type CreateTaskDto = {
  title: string;
};

export type TaskDto = {
  id: any;
  title: string;
  description: string;
  estimation: number;
  status: string;
  due: any;
  priority: string;
  labels: string[];
  createdAt: string;
  sessions: any;
  updatedAt: string;
  userId: any;
};
