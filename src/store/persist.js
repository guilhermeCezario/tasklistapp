import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'todos',
    storage,
    whitelist: ['todos', 'lists']
  }, reducers);

  return persistedReducer;
}