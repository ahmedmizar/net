import { Button, Drawer, Form, Input, Select } from "antd";
import { CloseIcon, DownIcon } from "assets/svg";

import { toast } from "react-toastify";

const { Option } = Select;
const EditForm = ({ isOpen, onClose, id }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("values", { values });
  };

  const onSubmit = () => {
    form.submit();
    toast.success("api created successfuly", {
      position: "bottom-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="details">
      {" "}
      <Drawer
        title={id ? "Edit API" : "Add API"}
        placement="right"
        onClose={onClose}
        visible={isOpen}
        className="drawer-step-form"
        width={396}
        closeIcon={<CloseIcon />}
      >
        <Form
          layout="vertical"
          name="apis-form"
          form={form}
          onFinish={onFinish}
          style={{ padding: "24px 24px 0" }}
        >
          <Form.Item name="name" label="API Name*" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="method" label="Method*" rules={[{ required: true }]}>
            <Select allowClear={false} suffixIcon={<DownIcon />}>
              <Option value="post">post</Option>
            </Select>
          </Form.Item>
          <Form.Item name="url" label="URL*" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="params" label="Params" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            // rules={[{ required: true }]}
          >
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
        </Form>

        <div>
          <div className="form-actions">
            <Button
              className="prev-btn-step"
              type="primary"
              onClick={() => onClose()}
            >
              CANCEL
            </Button>
            <Button className="next-btn-step" type="primary" onClick={onSubmit}>
              {id ? "Edit API" : "Add API"}
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default EditForm;
