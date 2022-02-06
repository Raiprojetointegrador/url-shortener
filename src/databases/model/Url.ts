import { prop, getModelForClass } from '@typegoose/typegoose';

export class Url {  
  @prop({ required: true })
  originUrl: string;

  @prop({ required: true })
  urlHash: string;
  
  @prop({ required: true })
  shortUrl: string;
}

export const UrlModel = getModelForClass(Url);