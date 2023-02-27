import { headers, url } from "./headers";
import { getLocalStorageData, SORT_TYPES } from "../localStorage/getLocalStorageData";

const { ACCESS_TOKEN } = SORT_TYPES

export default async function (body) {
  const accessToken = getLocalStorageData(ACCESS_TOKEN);
  try {
    const res = await fetch(`${url}account`, {
      method: 'POST',
      headers : {
        ...headers,
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    })
    //fetch 프로미스가 HTTP 오류 상태를 반환
    if(!res.ok) {
      const errorMessage = await res.json()
      switch(res.status) {
        case 400 :
          Swal.fire({
            icon: 'error',
            title: errorMessage,
            text: '한 은행 당 하나의 계좌만 연결할 수 있습니다.',
          })
          break;
        case 401 :
          Swal.fire({
            icon: 'error',
            title: errorMessage,
            text: '재로그인 후 다시 시도해주세요.',
          })
          break;
        default : 
          Swal.fire({
            icon: 'error',
            title: 'Oops..',
            text: '알 수 없는 오류가 발생했습니다.',
          })
      }
      return false
    }
    
    const json = await res.json();
    return json;
  } catch(error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '알 수 없는 오류가 발생했습니다.',
    })
    return false
  }
}