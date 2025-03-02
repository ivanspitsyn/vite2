import { useEffect, useRef, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, InputNumber, } from 'antd';




const Add = (data) => {



	const [form] = Form.useForm();
	const [clientReady, setClientReady] = useState<boolean>(false);



	const inputRef = useRef(null);
	const setFocus = () => inputRef.current.focus();










	const onFinish = (values: any) => {
		console.log('Finish:', values, data);


	};





	return (
		<div>
			<Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} style={{ paddingLeft: 120 }} >
				<Form.Item
					name="username2"
					rules={[{ required: true, message: 'Please input your username!', }]}
				>
					<InputNumber ref={inputRef} style={{ width: 50 }} />
				</Form.Item>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							disabled={
								!clientReady ||
								!form.isFieldsTouched(true) ||
								!!form.getFieldsError().filter(({ errors }) => errors.length).length
							}
							onClick={setFocus}
						>
							Log in
						</Button>
					)}
				</Form.Item>
			</Form>


		</div>
	)
};
export default Add