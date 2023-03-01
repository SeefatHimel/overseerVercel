import { getLocalStorage, setLocalStorage } from "@/storage/storage";
import {
  Button,
  Form,
  Input,
  RadioChangeEvent,
  Select,
  SelectProps,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { userAPI } from "APIs";
import { log } from "console";
import React, { useState } from "react";
import { toast } from "react-toastify";

const TaskInput = ({ taskList, createTask }: any) => {
  const [form] = Form.useForm();
  const [priority, setPririty] = useState("NORMAL");
  const onFinish = async (values: any) => {
    console.log(values);

    const res = createTask(values);
    console.log("🚀 ~ file: taskInput copy.tsx:23 ~ onFinish ~ res", res);
  };

  const onReset = () => {
    form.resetFields();
  };
  const [size, setSize] = useState<SizeType>("middle");
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const options: SelectProps["options"] = [];
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
        initialValue={"sample description"}
        // rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="estimation"
        initialValue={2}
        label="Estimation (in hours)"
        rules={[{ required: true }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
        {/* <Input /> */}
        <Select
          defaultValue="NORMAL"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "LOW", label: "LOW" },
            { value: "NORMAL", label: "NORMAL" },
            { value: "HIGH", label: "HIGH" },
          ]}
        />
      </Form.Item>

      <Form.Item name="label" label="Label">
        {/* <Input /> */}

        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={["Bug Fix"]}
          onChange={handleChange}
          style={{ width: "100%" }}
          options={options}
        />
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
