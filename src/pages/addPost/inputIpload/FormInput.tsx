import { FC } from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

type TProps = {
  imputFileRef: any;
  imputFilePrivRef: any;
  handleChangeFile: any;
  handleChangeFilePriviu: any;
  imageUrl: string;
  onClickRemoveImage: () => void;
  setIsEdit: any;
  title: string;
  setTitle: any;
  setText: any;
  text: string;
};

export const InputButtonBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const FormInput: FC<TProps> = ({
  imputFileRef,
  imputFilePrivRef,
  handleChangeFile,
  imageUrl,
  onClickRemoveImage,
  setIsEdit,
  handleChangeFilePriviu,
  title,
  setTitle,
  setText,
  text,
}) => {
  return (
    <div>
      <InputButtonBlock>
        <Button onClick={() => imputFileRef.current.click()}>
          Загрузить Video
        </Button>
        <input
          ref={imputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        <Button onClick={() => imputFilePrivRef.current.click()}>
          Загрузить Priviu
        </Button>
        <input
          ref={imputFilePrivRef}
          type="file"
          onChange={handleChangeFilePriviu}
          hidden
        />
        {imageUrl && (
          <Button color="error" onClick={onClickRemoveImage}>
            Удалить
          </Button>
        )}
      </InputButtonBlock>

      <Form.Item name={["title", "title"]} rules={[{ required: true }]}>
        <h2>Title: {title}</h2>
        <Input
          placeholder="Ведите title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name={["description", "description"]}
        rules={[{ required: true }]}
      >
        <h2>Description xi</h2>
        <Input.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ведите description"
        />
      </Form.Item>

      <Form.Item>
        <Button
          onClick={() => setIsEdit(false)}
          type="primary"
          htmlType="submit"
        >
          Далее
        </Button>
      </Form.Item>
    </div>
  );
};

export default FormInput;
