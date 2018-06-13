import { Restaraunts } from '../api/server/collections/restaraunts';

class RestarauntService {

  delete(id :string) {
    return Restaraunts.remove({_id: id});
  }

  getRestarauntsByFilter(value) {
    if (!value || value === '')
    {
      return Restaraunts.find({});
    }
    else
    {
      return Restaraunts.find({title:{$regex:value}});
    }
  }

  save(restaraunt) {
    Restaraunts.update(restaraunt._id, {
      $set: { description: restaraunt.description }
    });
  }
}

export const RestsService = new RestarauntService();
