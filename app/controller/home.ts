import { Controller } from 'egg';
import {NewsItem} from '../service/mobile';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobile.index();
  }
  public async detail() {
      const {ctx} = this;
      const id = ctx.request.query.id;
      const detailId = parseInt(id, 10);
      console.log(id);
      ctx.body = await ctx.service.mobile.getDetail(detailId);
  }
  public async add() {
      const {ctx} = this;
      const item: NewsItem = {
          id: 2,
          brand_id: 2,
          title: "Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G手机",
          keyword: "Apple|iPhone8Plus|",
          sale_time: 1505235600,
          content: "",
          created: 1530174473,
          modified: 1530174473,
          deleted: 1,
          picture: "https://gfs17.gomein.net.cn/T1qhEvBQZT1RCvBVdK_160.jpg",
          min_price: 5000,
          max_price: 6000,
      };
      ctx.body = await ctx.service.mobile.add(item);
  }
}
