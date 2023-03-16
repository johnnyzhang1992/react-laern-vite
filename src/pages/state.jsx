import React, { useState } from 'react';

const UserItem = ({ user = { name: '', id: '' } }) => {
  return (
    <li>
      <p>
        {user.id}:{user.name}
      </p>
    </li>
  );
};
const TestState = () => {
  const [users, setUsers] = useState([
    { name: '张三', id: 1 },
    { name: '李四', id: 2 },
  ]);

  const handleClick = () => {
    // 直接改变原数组
    users.push({
      id: 3,
      name: '王五',
    });
    setUsers(users);

    console.log('click-after:', users);
  };

  const handleClick1 = () => {
    console.log('preUsers:', users);
    setUsers([
      ...users,
      {
        id: 4,
        name: '王五',
      },
    ]);
    // 不是同步操作，打印的是老数据
    // 1）使用useEffect 监听users变化；2）添加一个中间参数
    // const newUsers = [...]; setUsers(newUsers);
    console.log('click1-after:', users);
  };

  console.log('users', users);

  return (
    <div className='container'>
      <h3>更新数组测试</h3>
      <p onClick={handleClick}>
        <button>新增用户，操作原数组</button>
      </p>
      <p onClick={handleClick1}>
        <button>新增用户，使用新数组</button>{' '}
      </p>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
          />
        ))}
      </ul>
    </div>
  );
};

export default TestState;
