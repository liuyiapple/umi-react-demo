import React from 'react';
import styles from './index.module.less';
const CourseFeatures = () => {
  const course = [
    {
      title: '课程概述',
      text: '实操课程的部分内容',
      key: '1',
    },
    {
      title: '课程目标',
      text: '本课程主要为同学实现在文化学习的同时，增强自身的实际上收能力，为工作增加更好的基础',
      key: '2',
    },
    {
      title: '考核评价',
      text: '课程考评将会以最终考试成绩为标准',
      key: '3',
    },
    {
      title: '详细介绍',
      text: '详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍',
      key: '4',
    },
  ];
  return (
    <div>
      {course.map((item, index) => {
        return (
          <div className={styles.body} key={item.key}>
            <div className={styles.container}>
              <div className={styles.sigin}></div>
              <span>{item.title}</span>
            </div>
            <div className={styles.text}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};
export default CourseFeatures;
