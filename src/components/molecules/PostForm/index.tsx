import { Button, Form, Input } from "antd";
import React from "react";

type Props = {
  onSubmitForm?: (data: any) => void;
  item?: any;
};

const PostForm: React.FC<Props> = ({ onSubmitForm, item }) => {
  const onFinish = (values: any) => {
    onSubmitForm?.({ ...item, ...values });
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ title: item.title, body: item.body }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="body"
        rules={[{ required: true, message: "Please enter description" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
