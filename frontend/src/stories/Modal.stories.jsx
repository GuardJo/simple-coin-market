import Modal from "../components/Modal";

export default {
  title: "Common/Modal",
  componenmt: Modal,
  argTypes: {},
};

export const Default = () => {
  return (
    <Modal>
      <div>
        <h2>Default</h2>
      </div>
    </Modal>
  );
};
