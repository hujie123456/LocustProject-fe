/* eslint-disable prettier/prettier */
'use client';
import Link from 'next/link';
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
  Space,
  Upload,
  Input
} from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { url } from 'inspector';
import { PlusOutlined } from '@ant-design/icons';
import { create } from 'zustand';
import usePostStore from '@/store';
import './index.css';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Post = () => {
  const increase = usePostStore((state) => state.increase);
  const decrease = usePostStore((state) => state.decrease);
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  const onFinish = (e: {
    title: string;
    link: string;
    originalText: string;
    personalThoughts: string;
  }) => {
    console.log(getCurrentDate());

    Object.assign(e, { time: getCurrentDate() });
    console.log(e);
    increase(e);
    console.log(usePostStore.getState());
  };
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Enter The Article' }]}
          >
            <Input
              placeholder="+ Enter The Article"
              style={{ width: '75vw', height: 66 }}
            />
          </Form.Item>
          <Form.Item
            name="Link"
            rules={[
              { required: true, message: 'Please Enter The Original Link' }
            ]}
          >
            <Input
              placeholder="Please Enter The Original Link"
              style={{ width: '75vw', height: 66 }}
            />
          </Form.Item>
          <Form.Item
            name="OriginalText"
            rules={[
              {
                required: true,
                message: 'Please Enter The Core Content Of The Original Text'
              }
            ]}
          >
            <div>Orginal Summary</div>
            <textarea
              placeholder="Please Enter The Core Content Of The Original Text"
              style={{ width: '75vw', height: 265 }}
              rows={10}
            />
          </Form.Item>
          <Form.Item
            name="PersonalThoughts"
            rules={[
              { required: true, message: 'Please Enter Personal Thoughts' }
            ]}
          >
            <div>Personal Thoughts</div>
            <textarea
              rows={10}
              placeholder="Please Enter Personal Thoughts"
              style={{ width: '75vw', height: 265 }}
            />
          </Form.Item>
          <Form.Item>
            <div className="flex items-center justify-center">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                style={{ color: '#424144' }}
              >
                发布文章
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Post;
