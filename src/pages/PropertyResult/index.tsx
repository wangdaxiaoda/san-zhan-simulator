import React, { useCallback, useMemo, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Checkbox,
  Select,
  Radio,
} from "antd";
import { calcProperty } from "../../utils/property";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ADAPTABILITY: { [key: string]: string } = {
  S: "S",
  A: "A",
  B: "B",
  C: "C",
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [finalProperty, setFinalProperty] = useState<
    { name: string; finalProperty: number }[]
  >([]);

  // 初始值
  const formInitialValue = useMemo(
    () => ({
      currentLevel: 1,
      targetLevel: 50,
      faction: true,
      sameFaction: true,
      advancementCount: 0,
      troopAffinity: "S",
      extraPoints: 0,
      equipmentProperty: 0,
    }),
    []
  );

  const onFinish = useCallback((values: any) => {
    const res = calcProperty(values);
    setFinalProperty((old) => [
      ...old,
      {
        name: values.name,
        finalProperty: res,
      },
    ]);
  }, []);

  return (
    <>
      <Form
        form={form}
        {...layout}
        initialValues={formInitialValue}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row>
          <Form.Item name="name" label="武将名称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item
              name="baseProperty"
              label="基础属性"
              rules={[{ type: "number", required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="growthProperty"
              label="成长属性"
              rules={[{ type: "number", required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="equipmentProperty"
              label="装备属性"
              rules={[{ type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item
              name="currentLevel"
              label="当前等级"
              rules={[{ type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="targetLevel"
              label="目标等级"
              rules={[{ type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="advancementCount" label="进阶数">
              <Select style={{ width: "75%" }}>
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item
              name="assignAttrPoints"
              label="可分配属性"
              rules={[{ type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="extraPoints"
              label="额外属性点"
              rules={[{ type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item name="faction" label="" valuePropName="checked">
              <Checkbox>四大营</Checkbox>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="immortal" valuePropName="checked">
              <Checkbox>仙人</Checkbox>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="sameFaction" valuePropName="checked">
              <Checkbox>是否同阵营</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item name="troopAffinity" label="兵种适性">
              <Radio.Group>
                {Object.keys(ADAPTABILITY).map((item) => (
                  <Radio.Button key={item} value={item}>
                    {ADAPTABILITY[item]}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        <h1>结果：</h1>
        {finalProperty.map((item, index) => (
          <p key={index}>
            武将名称：{item.name}&nbsp;最终属性值：{item.finalProperty}
          </p>
        ))}
      </div>
    </>
  );
};

export default App;
