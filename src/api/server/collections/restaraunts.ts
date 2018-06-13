import { MongoObservable } from 'meteor-rxjs';
import { Restaraunt } from '../models';

export const Restaraunts = new MongoObservable.Collection<Restaraunt>('restaraunts');
