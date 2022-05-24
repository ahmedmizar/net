import {
  Button,
  Card,
  Collapse,
  Dropdown,
  Input,
  Menu,
  Pagination,
} from "antd";
import { MoreIcon, SearchIcon } from "assets/svg";
import React, { useState } from "react";

import { CaretRightOutlined } from "@ant-design/icons";
import DeleteModal from "./DeleteModal";
import Form from "./Form";

const { Panel } = Collapse;

const Apis = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState("");
  const hideForm = () => {
    setShowForm(false);
  };
  const actionMenu = (
    <Menu
      onClick={(item) => {
        if (item.key == 1) {
          setShowForm(true);
          setId(2);
        }

        if (item.key == 2) {
          setShowDeleteModal(true);
        }
      }}
    >
      <Menu.Item key="1">
        <span>Edit</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="apis-container">
      <div className="header-page">
        <div className="search">
          {" "}
          <Input placeholder="Search here..." prefix={<SearchIcon />} />
        </div>

        <Button
          type="primary"
          className="add"
          onClick={() => setShowForm(true)}
        >
          ADD API
        </Button>
      </div>
      <Card className="custom-card">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          accordion
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : -90} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="api name"
            key="1"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="actions-menu">
              {" "}
              <Dropdown overlay={actionMenu} trigger={["click"]}>
                <MoreIcon />
              </Dropdown>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="2"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="3"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="4"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="5"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="6"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="7"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="8"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
          <Panel
            header="api name"
            key="9"
            className="site-collapse-custom-panel"
          >
            <div className="collapse-details">
              <div className="label">Method</div>
              <div className="value">
                <span className="method">Post</span>
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">URL</div>
              <div className="value url">
                https://commercetools.com/resources/
              </div>
            </div>
            <div className="collapse-details">
              <div className="label">Params</div>
              <div className="value">Params</div>
            </div>
            <div className="collapse-details">
              <div className="label">Description</div>
              <div className="value">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </Panel>
        </Collapse>
        <div className="pagination-container">
          <Pagination
            size="small"
            total={131}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={10}
            defaultCurrent={1}
            // itemRender={paginationRender}
          />
        </div>
      </Card>
      <Form isOpen={showForm} onClose={hideForm} id={id} />
      <DeleteModal
        isVisible={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default Apis;
