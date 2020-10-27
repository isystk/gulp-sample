//インターフェース
export interface IHello{
  greeting (name :string) :string
}

//クラス
export class Hello implements IHello{
   greeting (name :string){
     return "Hello "+name;
   }
}


