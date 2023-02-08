import { getLocalStorage, setLocalStorage } from "@/storage/storage";
import { Button, Form, Input } from "antd";
import React from "react";
import { toast } from "react-toastify";

const TaskInput = ({ taskList, setTaskList }: any) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    let tasks = getLocalStorage("TaskList");
    if (!tasks) tasks = [];
    if (tasks.includes(values?.TaskName)) console.log("Ache");

    if (values?.TaskName && !tasks.includes(values?.TaskName)) {
      tasks.push(values?.TaskName);
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
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="TaskName" label="Task Name" rules={[{ required: true }]}>
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
