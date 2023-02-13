import { getLocalStorage, setLocalStorage } from "@/storage/storage";
import { Button, Form, Input } from "antd";
import { userAPI } from "APIs";
import React from "react";
import { toast } from "react-toastify";

const TaskInput = ({ taskList, setTaskList }: any) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    const res = await userAPI.createTask(values);
    console.log("🚀 ~ file: taskInput.tsx:13 ~ onFinish ~ res", res);

    let tasks = getLocalStorage("TaskList");
    if (!tasks) tasks = [];
    if (tasks.includes(values?.title)) console.log("Ache");

    if (values?.title && !tasks.includes(values?.title)) {
      tasks.push(values?.title);
      setLocalStorage("TaskList", tasks);
      tasks != taskList && setTaskList(tasks);
    } else {
      toast.error("TaskName Exists");
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="control-hooks"
      labelCol={{ span: 7 }}
      onFinish={onFinish}
      style={{ width: "500px" }}
    >
      <Form.Item name="title" label="Task Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="estimation"
        label="Estimation (in hours)"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="label" label="Label" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <div className="flex  gap-2">
          <Button type="primary" htmlType="submit" className="bg-green-500">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default TaskInput;
