

import type { TableProps } from 'antd';
import { Divider, Radio, Button, Table, Tag, Space, Form, InputNumber, theme } from 'antd'
import Add from './addname';
import { DataStick } from './model/DataStick';

import { useEffect, useRef, useState, } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import uuid from 'react-uuid';

const Table_1 = () => {



	const onAddStudent = (values: any) => {


		console.log(dataSource);
		const key2 = uuid()
		const last = data.at(-1)
		const idnew = last.id + 1
		console.log('idnew', last);

		const newStudent = {

			id: idnew,
			x1: values.x1,
			y1: values.y1,
			kr1: values.kr1,
			kr2: 2,
			kr3: null,
			kr4: 1,
			key: key2,
			name: 'fff',
			age: 11,
			qty: values.Qty,
			rotate: 1,
			sxy: 1,
			skr1: 1,
			skr2: 1,
			address: 'string',
			tags: ['паз', 'присадка'],

		};
		setDataSource((pre) => {
			return [...pre, newStudent];
		});
	};

	const onDeleteStudent = (record) => {

		setDataSource((pre) => {
			return pre.filter((student) => student.id !== record.id);
		});
	}


	// const fc = (name: []) => {
	// 	data.splice(2);
	// 	console.log(name)
	// }

	const rowSelection: TableProps<DataStick>['rowSelection'] = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: DataStick[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: (record: DataStick) => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name,
		}),
	};

	const columns: TableProps<DataStick>['columns'] = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'id',
			// render: (text) => <a>{text}</a>,
		},
		{
			title: 'Длина',
			dataIndex: 'x1',
			key: 'x1',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Кр1',
			dataIndex: 'kr1',
			key: 'kr1',
		},
		{
			title: 'Кр2',
			dataIndex: 'kr2',
			key: 'kr2',
		},
		{
			title: 'Шир',
			dataIndex: 'y1',
			key: 'y1',
		},
		{
			title: 'Кр1',
			dataIndex: 'kr3',
			key: 'kr3',
		},
		{
			title: 'Кр2',
			dataIndex: 'kr4',
			key: 'kr4',
		},
		{
			title: 'Кол',
			dataIndex: 'qty',
			key: 'qty',
		},
		{
			title: '->',
			dataIndex: 'rotate',
			key: 'rotate',
		},
		{
			title: 'S',
			dataIndex: 'sxy',
			key: 'sxy',
		},
		{
			title: 'S=Кр1',
			dataIndex: 'skr1',
			key: 'skr1',

		},
		{
			title: 'S=Кр2',
			dataIndex: 'skr2',
			key: 'skr2',
		},

		{
			title: 'Работы',
			key: 'tags',
			dataIndex: 'tags',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => { onAddStudent() }}>Invite {record.name}</a>
					<a onClick={() => {
						onDeleteStudent(record);
					}}>Delete</a>
				</Space>
			),
		},
	];

	const data: DataStick[] = [
		{
			id: 1,
			x1: 400,
			y1: 300,
			kr1: 1,
			kr2: 2,
			kr3: null,
			kr4: 1,
			key: 'd1',
			name: 'fff',
			age: 11,
			qty: 1,
			rotate: 1,
			sxy: 1,
			skr1: 1,
			skr2: 1,
			address: 'string',
			tags: ['паз', 'присадка'],
		},
		{
			id: 2,
			x1: 400,
			y1: 300,
			kr1: 1,
			kr2: 2,
			kr3: null,
			kr4: 1,
			key: 'dd',
			name: 'fff',
			age: 11,
			qty: 1,
			rotate: 1,
			sxy: 1,
			skr1: 1,
			skr2: 1,
			address: 'string',
			tags: ['паз', 'присадка'],
		},
		{
			id: 3,
			x1: 400,
			y1: 300,
			kr1: 1,
			kr2: 2,
			kr3: null,
			kr4: 1,
			key: 'fff3',
			name: 'fff',
			age: 11,
			qty: 1,
			rotate: 1,
			sxy: 1,
			skr1: 1,
			skr2: 1,
			address: 'string',
			tags: ['паз', 'присадка'],
		},
		{
			id: 4,
			x1: 400,
			y1: 300,
			kr1: 1,
			kr2: 2,
			kr3: null,
			kr4: 1,
			key: 'fff34',
			name: 'fff',
			age: 11,
			qty: 1,
			rotate: 1,
			sxy: 1,
			skr1: 1,
			skr2: 1,
			address: 'string',
			tags: ['паз', 'присадка'],
		},
		{
			id: 5,
			x1: 400,
			y1: 300,
			kr1: 1,
			kr2: 2,
			kr3: null,
			kr4: 1,
			key: 'fff5',
			name: 'fff',
			age: 11,
			qty: 1,
			rotate: 1,
			sxy: 1,
			skr1: 1,
			skr2: 1,
			address: 'string',
			tags: ['паз', 'присадка'],
		}

	];

	const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
	// const [isEditing, setIsEditing] = useState(false);
	// const [editingStudent, setEditingStudent] = useState(null);
	const [dataSource, setDataSource] = useState(data)

	// console.log(dataSource);

	const [form] = Form.useForm();
	const [clientReady, setClientReady] = useState<boolean>(false);



	const inputRef = useRef(null);
	const setFocus = () => {


		// form.resetFields();
		inputRef.current.focus()

	};

	useEffect(() => {
		setClientReady(true);
	}, []);

	const onFinish = (values: any) => {
		console.log('Finish:', values, data);
		onAddStudent(values)
		form.resetFields();



	};
	const last = data.at(-1)
	console.log(last.id);
	const { token } = theme.useToken();
	const formStyle: React.CSSProperties = {

		// maxWidth: 'none',
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		padding: 24,
		paddingLeft: 100,
		// display: 'flex'
	};
	const f1: React.CSSProperties = {

		display: "flex"

	};
	return (
		<div>
			<div >
				<Form form={form} name="dependencies" layout="block" onFinish={onFinish} style={formStyle}  >
					<div>
						<Form.Item label="Заказ"

							name="order"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>

							<InputNumber placeholder="Длина" ref={inputRef} style={{ minWidth: 60, width: 'auto', fontSize: 14 }} />
						</Form.Item>
						<Form.Item label="Материал"

							name="x1"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>

							<InputNumber placeholder="Длина" ref={inputRef} style={{ minWidth: 60, width: 'auto', fontSize: 14 }} />
						</Form.Item>
					</div>

					<div style={f1}>
						<Form.Item style={{ paddingLeft: 24 }}
							name="kr2"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>
							<InputNumber placeholder="Кромка 2" style={{ minWidth: 60, width: 'auto', fontSize: 14 }} />
						</Form.Item>
						<Form.Item style={{ paddingLeft: 24 }}
							name="y1"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>
							<InputNumber placeholder="Ширина" style={{ minWidth: 60, width: 'auto' }} />
						</Form.Item>
						<Form.Item style={{ paddingLeft: 24 }}
							name="kr3"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>
							<InputNumber placeholder="Кромка 1" style={{ minWidth: 60, width: 'auto' }} />
						</Form.Item>
						<Form.Item
							name="kr4"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>
							<InputNumber placeholder="Кромка 2" style={{ minWidth: 60, width: 'auto' }} />
						</Form.Item>
						<Form.Item
							name="Qty"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>
							<InputNumber placeholder="Кол-во" style={{ minWidth: 60, width: 'auto' }} />
						</Form.Item>
						<Form.Item
							name="Rotate"
							rules={[{ required: true, message: 'Please input your username!', }]}
						>
							<InputNumber placeholder="Поворот" style={{ minWidth: 60, width: 'auto' }} />
						</Form.Item>
					</div>
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
			{/* <Divider /> */}

			<Table <DataType>

				rowSelection={{ type: selectionType, ...rowSelection }}
				columns={columns}
				dataSource={dataSource}
			/>
		</div >
	);






}

export default Table_1;
