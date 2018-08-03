import {Service} from 'egg';

export interface NewsItem {
    id: number;
    brand_id: number;
    title: string;
    keyword: string;
    sale_time: number;
    content: string;
    created: number;
    modified: number;
    deleted: number;
    picture: string;
    min_price: number;
    max_price: number;
}
export default class Mobile extends Service {
    public async index( ) {
        const user = await this.app.mysql.select('mb_mobile');
        return  {user} ;
    }
    public async getDetail(id: number) {
        const mobile = await this.app.mysql.get('mb_mobile', { id: id });
        return mobile;
    }
    public async add(item: NewsItem) {
        const result = await this.app.mysql.insert('mb_mobile', item);
        console.log(result);
        const insertSuccess = result.affectedRows === 1;
        if (insertSuccess) {
            return '添加成功';
        }else {
            return '添加失败';
        }
    }
}
