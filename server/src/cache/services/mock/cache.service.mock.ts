import { Injectable } from "@nestjs/common";

@Injectable()
export class CacheServiceMock{
    get(){return null}
    set(){}
    del(){}
}