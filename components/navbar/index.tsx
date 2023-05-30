'use client';

import { Typography } from '@/components/typography';
import LogoIconTop from '@/components/icons/logoIconTop';
import Logo from '@/components/icons/logo';
import { WalletConnect } from '@/components/wallet';
import { usePathname } from 'next/navigation';
import {
  AutoComplete,
  ConfigProvider,
  Dropdown,
  Input,
  MenuProps,
  SelectProps,
  Space
} from 'antd';
import { SearchIcon } from '@/components/icons/search';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import { useUserStore } from '@/store';
import { Button } from '../button';
import { useState } from 'react';
import './index.css';
import SignUp from '@/components/signUp';

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        )
      };
    });

const Navbar = () => {
  const path = usePathname();
  const flag = path == '/zh-CN' || path == '/en';
  const { isLogin, setIsLogin } = useUserStore();
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  return (
    <>
      <div
        className={`absolute z-50 float-right flex h-[100px] flex-wrap items-center bg-[#04070B]
      ${!flag && 'left-[18rem] border-b-[1px] border-b-lineGrey'} ${
          flag && 'w-full'
        }`}
      >
        <div className="sticky inset-0 z-10 flex h-full  max-w-full items-center px-8 py-2 lg:px-10 lg:py-4">
          <div className="text-blue-gray-900 dark:text-blue-gray-100 flex w-full items-center">
            {/*logo*/}
            <div className="width-[18rem] absolute  left-[4vw] top-[35px] h-[100px]">
              {flag ? (
                <div className="z-100 flex items-center">
                  <LogoIconTop />
                </div>
              ) : null}
            </div>
            {/*搜索框 & sign up 是否出现 */}
            {flag ? (
              <>
                <div className="ml-[10vw] flex h-[52px] w-[50vw]"></div>
              </>
            ) : (
              <>
                {/* navbar中的竖线
                <div
                  style={{ borderColor: '#262626' }}
                  className="relative left-[6.9vw] h-[100px] border-l-[1px]"
                ></div> */}
                {/*搜索框*/}
                <ConfigProvider
                  theme={{
                    token: {
                      colorBgElevated: 'black',
                      colorText: '#ffffff',
                      colorIconHover: '#ffffff',
                      colorIcon: '#ffffff',
                      colorTextPlaceholder: '#FFFFFF66'
                    }
                  }}
                >
                  <AutoComplete
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                    style={{
                      backgroundColor: '#1f1f1f',
                      borderColor: 'rgba(255, 255, 255, 0.16)'
                    }}
                    className="flex h-[52px] w-[30vw] rounded-full border-[1px] border-solid bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  >
                    <Input
                      size="large"
                      placeholder="Search"
                      prefix={<SearchIcon />}
                      onPressEnter={() => {
                        return null;
                      }}
                      bordered={false}
                      className="flex h-[52px] w-fit items-center rounded-full"
                    />
                  </AutoComplete>
                </ConfigProvider>
                {/*Sign up for Locust*/}
                {isLogin ? (
                  <div className="ml-[24vw]"></div>
                ) : (
                  <div className="ml-[16vw] flex whitespace-nowrap font-medium text-white hover:text-[#6E62EE]">
                    <Link href="/" className="relative right-[3.6vw]">
                      <SignUp />
                    </Link>
                  </div>
                )}
              </>
            )}
            {/*WalletConnect*/}
            <div className={`${flag ? 'ml-[19vw]' : ''} flex items-center`}>
              {/*<Wallet />*/}
              <WalletConnect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
