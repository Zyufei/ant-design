import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical">
    <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);

export default App;
