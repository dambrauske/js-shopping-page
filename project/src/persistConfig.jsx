import storage from 'redux-persist/lib/storage' // This defaults to localStorage for web

const persistConfig = {
    key: 'root', // Key for the persisted data in local storage
    storage, // Storage engine to use (localStorage in this case)
};

export default persistConfig;
