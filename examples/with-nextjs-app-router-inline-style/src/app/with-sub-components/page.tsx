// Since the current page uses sub-components,
// the use of sub-components in non-client components
// is not currently supported in the app router mode of next.js.
// So we need to add "use client";
// Markers. If the component you use in your page does not contain sub-components such as Select.Option,
// you do not need to add this tag to the page.
// More about without sub-components example see: src/app/page.tsx
"use client";

import { List, Card, Typography, Space, Divider, Row, Col } from "antd";
import withTheme from "../../../theme";

const { Title } = Typography;

const Home = function Home() {
  return (
    <>
      <section style={{ textAlign: "center", marginTop: 48, marginBottom: 40 }}>
        <Space align="start">
          <img
            style={{ width: 40, height: 40 }}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="Ant Design"
          />
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design (With Sub Components)
          </Title>
        </Space>
      </section>
      <Divider style={{ marginBottom: 60 }}>List</Divider>
      <Row justify="center">
        <Col span={12}>
          <List
            grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={() => (
              <List.Item>
                <Card />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

const HomePage = () => {
  return withTheme(<Home />);
};

export default HomePage;
