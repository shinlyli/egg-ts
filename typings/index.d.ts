import {Application} from 'egg';
import { mysql } from 'egg-mysql';
declare module 'egg' {
    interface Application {
        mysql: mysql;
    }
}