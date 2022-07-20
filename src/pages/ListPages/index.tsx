import React from 'react';
import { Tabs, Card } from 'antd';
import styles from './index.module.less';
// 课程页面
import CourseFeatures from './CourseFeatures';
// 目录 页面
import Catalogue from './Catalogue';

// 了解受控组件和非受控组件的区别
import Controll from './ContorllAndUnContoler';
const { TabPane } = Tabs;
const ListPages: React.FC = () => {
  return (
    <Card className={styles.body}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="课程" key="1">
          {/* 课程描述的页面 */}
          <CourseFeatures />
        </TabPane>
        <TabPane tab="目录" key="2">
          {/*  目录页面  */}
          <Catalogue />
        </TabPane>
        <TabPane tab={'React的组件'} key={'3'}>
          <Controll />
        </TabPane>
      </Tabs>
    </Card>
  );
};
export default ListPages;
