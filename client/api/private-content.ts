import request from '@/utils/request';
import mockPrivatecontent from './mock/privatecontent';

export interface PrivateContentModel {
  id: number;
  url: string;
  picUrl: string;
  sPicUrl: string;
  type: string;
  copywriter: string;
  name: string;
  alg: string;
}

export const queryPrivateContent = async () => {
  type ReturnBodyType = {
    code: number;
    name: string;
    result: PrivateContentModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized/privatecontent`)).result;
  // return returnBody;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mockPrivatecontent as any).result; //returnBody;
};