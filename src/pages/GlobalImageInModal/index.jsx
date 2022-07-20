import { Button, Modal, Image } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';
const GlobalImageInModal = (props) => {
  //   const { Imgsrc } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        type="primary"
      >
        展示Modal
      </Button>
      {showModal && (
        <Image
          preview={{
            visible: showModal,
            onVisibleChange: (visible, _) => {
              setShowModal(visible);
            },
          }}
          src={'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'}
        />
      )}
    </div>
  );
};

export default GlobalImageInModal;
