import { Template } from "meteor/templating";

import "./cv_experience.html";
import "./cv_experience.scss";

Template.cv_experience.helpers({
    renderDescription(description) {
        if (description instanceof Array) {
            let output = [];
            description.forEach(function(item) {
                output.push('<div>');
                output.push(item);
                output.push('</div>');
            });
            return output.join('');
        } else {
            return description;
        }
    }
});

