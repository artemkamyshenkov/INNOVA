import { GithubOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import { Col, Row } from 'react-grid-system';
import { Page } from '@/widgets/Page';

const AboutPage = () => (
  <Page>
    <Row>
      <Col>
        <Space>
          <Tag icon={<GithubOutlined />} color="#55acee">
            {' '}
            <a
              href="https://github.com/artemkamyshenkov"
              target="_blank"
              rel="noreferrer"
            >
              Artem Kamyshenkov
            </a>
          </Tag>
          <Tag color="#55acee"> Innova </Tag>
          <Tag color="#55acee">2023</Tag>
        </Space>
      </Col>
    </Row>
  </Page>
);

export default AboutPage;
