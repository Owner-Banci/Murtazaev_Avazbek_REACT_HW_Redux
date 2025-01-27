import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { updateUserName } from '../store/usersSlice';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === Number(id))
  );

  const [name, setName] = useState(user?.name || '');

  const handleSave = () => {
    if (user) {
      dispatch(updateUserName({ id: user.id, name }));
      navigate('/');
    }
  };

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>Edit User</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserDetail;
