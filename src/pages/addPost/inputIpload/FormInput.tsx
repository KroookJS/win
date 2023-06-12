import { FC } from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { ButtonBy, ButtonDelete, ButtonNext } from "@/ui/Button";
import { ButtonCategotyes } from "@/ui/ButtonCategotyes";

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
  flex-direction: column;
  gap: 10px;
  align-items: center;
  /* justify-content: space-between; */
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
        <ButtonBy onClick={() => imputFileRef.current.click()}>
          Загрузить Video
        </ButtonBy>
        <input
          ref={imputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        <ButtonBy onClick={() => imputFilePrivRef.current.click()}>
          Загрузить Priviu
        </ButtonBy>
        <input
          ref={imputFilePrivRef}
          type="file"
          onChange={handleChangeFilePriviu}
          hidden
        />
        {imageUrl && (
          <ButtonDelete color="error" onClick={onClickRemoveImage}>
            Удалить
          </ButtonDelete>
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

      <ButtonNext onClick={() => setIsEdit(false)}>Далее</ButtonNext>
    </div>
  );
};

export default FormInput;
