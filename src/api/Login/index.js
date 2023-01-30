import AsyncStorage from '@react-native-async-storage/async-storage';
const uri = 'https://kwhcclab.com:20874';

/* 회원가입 정보 중복 확인 */
export const phoneCheckAPI = async (phone) => {
  const response = await fetch(
    uri + '/authapi/create/validation/phone/' + phone,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  const putValue = data.status === 'SUCCESS';
  return putValue;
};

/* 회원가입 */
export const signUpAPI = async (phone, password) => {
  const response = await fetch(uri + '/authapi/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone: String(phone),
      password: String(password),
    }),
  });
  const data = await response.json();
  const putValue = data.status === 'SUCCESS' ? 1 : 0;
  return putValue;
};

/* 로그인 */
export const loginAPI = async (phone, password) => {
  const response = await fetch(uri + '/authapi/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone: String(phone),
      password: String(password),
    }),
  });
  const data = await response.json();

  if (data.status === 'SUCCESS') {
    await AsyncStorage.removeItem('refreshToken');
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('userNickName');
    await AsyncStorage.setItem(
      'refreshToken',
      JSON.stringify(data.data[0].refreshToken),
    );
    await AsyncStorage.setItem(
      'accessToken',
      JSON.stringify(data.data[0].accessToken),
    );
    await AsyncStorage.setItem(
      'userNickName',
      JSON.stringify(data.data[0].nickName),
    );
  }
  const putValue = data.status === 'SUCCESS' ? 1 : 0;
  return putValue;
};

/* join 폼 작성 여부 확인 */
export const formCheckAPI = async () => {
  const userToken = await AsyncStorage.getItem('accessToken');
  const response = await fetch(uri + '/api/user/join/validation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userToken.slice(1, -1),
    },
  });
  const data = await response.json();
  const putValue = data.status === 'FAIL' ? 0 : 1;
  return putValue;
};

/* 이름 중복 확인 */
export const NicknameCheckAPI = async (name) => {
  const userToken = await AsyncStorage.getItem('accessToken');
  const response = await fetch(
    uri + '/api/user/join/validation/nickname/' + name,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken.slice(1, -1),
      },
    },
  );
  const data = await response.json();
  const putValue = data.status === 'SUCCESS' ? 1 : 0;
  return putValue;
};

/* 최초 추가 정보 입력 */
export const FormJoinAPI = async (userData) => {
  const userToken = await AsyncStorage.getItem('accessToken');
  const response = await fetch(uri + '/api/user/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userToken.slice(1, -1),
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  const putValue = data.status === 'SUCCESS' ? 1 : 0;
  return putValue;
};

/* Token 재발급 */
export const refreshTokenAPI = async () => {
  const userNickName = await AsyncStorage.getItem('userNickName');
  const accessToken = await AsyncStorage.getItem('accessToken');
  const refreshToken = await AsyncStorage.getItem('refreshToken');

  if (userNickName != null) {
    const response = await fetch(uri + '/authapi/refresh', {
      method: 'POST',
      headers: {
        'Access-Token': JSON.parse(accessToken),
        'Refresh-Token': JSON.parse(refreshToken),
      },
    });
    const data = await response.json();
    const putValue = data.status === 'SUCCESS' ? 1 : 0;
    return putValue;
  }
  return false;
};

/*Tag 정보 받아오기 */
export const getTagAPI = async () => {
  const userToken = await AsyncStorage.getItem('accessToken');
  const response = await fetch(uri + '/api/tag', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userToken.slice(1, -1),
    },
  });
  const data = await response.json();
  return data.data;
};

/*Tag 정보 저장하기 */
export const saveTagAPI = async (array) => {
  const userToken = await AsyncStorage.getItem('accessToken');
  const response = await fetch(uri + '/api/user/tag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userToken.slice(1, -1),
    },
    body: JSON.stringify(array),
  });
  const data = await response.json();
  return data.status;
};
