import { Button, Modal } from "antd";

import React from "react";

//import DeleteIcon from "../../../../../assets/images/delete_icon.png";

function DeleteModal({ isVisible, onCancel }) {
  const deleteCategory = () => {
    console.log("delelte");
    onCancel();
  };
  return (
    <Modal
      visible={isVisible}
      onCancel={onCancel}
      closable={false}
      centered={true}
      footer={[
        <Button key="back" className="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          className="add"
          onClick={deleteCategory}
        >
          Yes
        </Button>,
      ]}
    >
      <img src="/img/deleteIcon.png" alt="delete" />
      <h3>Delete API</h3>
      <p>Are you sure you want to delete API name?</p>
    </Modal>
  );
}

export default DeleteModal;
