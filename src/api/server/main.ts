import { Meteor } from 'meteor/meteor';
import { Restaraunts } from './collections/restaraunts';
import { Restaraunt } from './models';

Meteor.startup(() => {
  if (Restaraunts.find({}).cursor.count() === 0) {
    Restaraunts.collection.insert({
         title: 'Good Stuff Restaurant',
         description: 'Very tasty food! Great choise'
       });
       Restaraunts.collection.insert({
         title: 'Hobees Restaurant',
         description: "Don't know what to write here!!!!!!!!!!!!!!"
       });
       Restaraunts.collection.insert({
         title: "California Market at Pacific's Edge",
         description: 'Best California restaraunt. Enjoy us'
       });
       Restaraunts.collection.insert({
         title: "Old California Restaurant Row",
         description: 'The oldest one'
       });
       Restaraunts.collection.insert({
         title: "California Grill",
         description: "Good grill, let's eat here"
       });
       Restaraunts.collection.insert({
         title: "Hobee's Palo Alto",
         description: 'Palo Alto '
       });
       Restaraunts.collection.insert({
         title: "Good Stuff Restaurant",
         description: "Don't eat here, only drink"
       });
       Restaraunts.collection.insert({
         title: "Hugo's Restaurant",
         description: 'May be you will like it'
       });
       Restaraunts.collection.insert({
         title: "NORMS Restaurants",
         description: 'Hope that you will like it'
       });
  }
});
