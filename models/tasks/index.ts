export type CreateTaskDto = {
  title: string;
};

export type TaskDto = {
  id: any;
  title: string;
  description: string;
  estimation: 2;
  status: string;
  due: any;
  priority: string;
  labels: string[];
  createdAt: string;
  sessions: any;
  updatedAt: string;
  userId: any;
};
