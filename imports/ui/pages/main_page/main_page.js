import { Template } from "meteor/templating";
import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { FlowRouter } from "meteor/kadira:flow-router";
import { ReactiveVar } from "meteor/reactive-var";

import { main_layout } from "/imports/ui/layouts/main_layout/main_layout";
import { chip } from "/imports/ui/components/chip/chip";
import { cv_header } from "/imports/ui/components/cv_header/cv_header";
import { cv_profile } from "/imports/ui/components/cv_profile/cv_profile";
import { cv_skills } from "/imports/ui/components/cv_skills/cv_skills";
import { cv_experience } from "/imports/ui/components/cv_experience/cv_experience";
import { cv_education } from "/imports/ui/components/cv_education/cv_education";
import { cv_interests } from "/imports/ui/components/cv_interests/cv_interests";


import "./main_page.html";
import "./main_page.scss";

FlowRouter.route("/", {
    name: "main_page",
    action() {
        BlazeLayout.render(
            "main_layout",
            {
                content: "main_page"
            }
        );
    }
});

Template.main_page.onCreated(function() {
    var self = this;
    this.cvData = new ReactiveVar();
    Meteor.call("fetchData", (err, result) => {
        if (!err) {
            self.cvData.set(result);
        }
    });
});

Template.main_page.onRendered(function() {
});

Template.main_page.helpers({
    'cv_data'() {
        return Template.instance().cvData.get();
    }
});

Template.main_page.events({
});

