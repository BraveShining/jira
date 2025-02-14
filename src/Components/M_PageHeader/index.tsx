import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { ReactNode } from 'react';
import { useAuth } from 'context/auth-context';
import { NavLink } from 'react-router-dom';

const { Paragraph } = Typography;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
        <Button
            style={{
                border: 'none',
                padding: 0,
            }}
        >
            <EllipsisOutlined
                style={{
                    fontSize: 20,
                    verticalAlign: 'top',
                }}
            />
        </Button>
    </Dropdown>
);

const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
];

const IconLink: React.FC<{ src: string, text: string }> = ({ src, text }) => (
    <NavLink to="/login" className="example-link">
        <img className="example-link-icon" src={src} alt={text} />
        {text}
    </NavLink>
);

const content = (
    <>
        <Paragraph ellipsis={true}>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
        </Paragraph>
        <Paragraph>
            Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
        </Paragraph>
        <div>
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                text="Quick Start"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                text=" Product Info"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                text="Product Doc"
            />
        </div>
    </>
);

const Content: React.FC<{ children: ReactNode, extraContent: ReactNode }> = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

export const M_PageHeader = () => {

    const { user } = useAuth();

    return (
        <PageHeader
            title={user ? user.name : `当前用户未登录`}
            className="site-page-header"
            subTitle="This is a subtitle"
            tags={user ? <Tag color="blue">Running</Tag> : <Tag color="error">当前用户未登录</Tag>}
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
                </Button>,
                <DropdownMenu key="more" />,
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            breadcrumb={{ routes }}
        >
            <Content
                extraContent={
                    <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                        alt="content"
                        width="100%"
                    />
                }
            >
                {content}
            </Content>
        </PageHeader>
    )
}