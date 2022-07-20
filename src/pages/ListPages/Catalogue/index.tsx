import React, { useRef, useState, useEffect } from 'react';
import { Button, Input, Collapse } from 'antd';
import styles from './index.module.less';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const Catalogue: React.FC = (props) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const chapter_input = useRef<HTMLDivElement>(null);

  // 章节的标题
  const [chapter, setChapter] = useState([]);

  const inputEvent = (inputDom: any, endFunction: any) => {
    const callbackFun = () => {
      endFunction(inputDom.current.value);
    };
    inputDom.current.focus();
    //@ts-ignore
    if (window.addEventListener) {
      inputDom.current.input.addEventListener('blur', callbackFun, false);
      inputDom.current.input.addEventListener(
        'keydown',
        function (event: any) {
          if (event.keyCode == '13') {
            inputDom.current.input.removeEventListener('blur', callbackFun);
            callbackFun();
          }
        },
        false,
      );
    }
    // inputDom.current.addEventListener("keydown",callbackFun)
  };
  useEffect(() => {
    if (showInput) {
      setTimeout(() => {
        inputEvent(chapter_input, chapterBlur);
      }, 500);
    }
  }, [showInput]);

  // 新增章节
  const chapterBlur = (value: string | null) => {
    if (!value) {
      setShowInput(false);
    } else {
      const arr = JSON.parse(JSON.stringify(chapter));
      arr.push(value);
      setChapter(arr);
    }
  };

  const showInputHanlder = () => {
    setShowInput(!showInput);
    setTimeout(() => {
      chapter_input.current?.focus();
    }, 0);
  };
  return (
    <div className={styles.container}>
      <Collapse>
        {chapter.length > 0 &&
          chapter.map((item, index) => {
            return <Panel key={index} header={item}></Panel>;
          })}
      </Collapse>
      {showInput && (
        <Input
          className={styles.inputContainer}
          placeholder={'请输入章节名称'}
          // @ts-ignore
          ref={chapter_input}
          onChange={() => {
            console.log(chapter_input);
          }}
        />
      )}
      <Button
        className={styles.addBtn}
        icon={<PlusCircleOutlined />}
        onClick={() => {
          showInputHanlder();
        }}
      >
        添加章
      </Button>
    </div>
  );
};

export default Catalogue;
