import { ConfigProvider, Modal } from 'antd';
import './index.css';

const Modalprop = (props: {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) => {
  const { isModalOpen, handleOk, handleCancel } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: '#232425',
          colorText: '#fff'
        }
      }}
    >
      <Modal
        title="Delete article"
        open={isModalOpen}
        centered
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            padding: '8px 48px',
            backgroundColor: '#E0E0E0',
            color: 'black',
            borderRadius: '32px',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
        cancelButtonProps={{
          style: {
            padding: '8px 48px',
            backgroundColor: 'inherit',
            color: '#E0E0E0',
            borderRadius: '32px',
            border: '1px solid #E0E0E0',
            alignItems: 'center',
            height: 'fix-content',
            marginRight: '5rem',
            justifyContent: 'center'
          }
        }}
      >
        <div className="h-[1px] w-[100%] bg-[#4d4d4e]"></div>
        <div className="mt-4" style={{ color: '#B7B7B7' }}>
          Are you sure?This article will be deleted
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default Modalprop;
