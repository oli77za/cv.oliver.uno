import { Meteor} from "meteor/meteor";

Meteor.methods({
    'fetchData': function () {
        var data = JSON.parse(Assets.getText("cv_data.json"));

        return data;
    }
});
