"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
class CustomProcessor extends jasmine_spec_reporter_1.DisplayProcessor {
    displayJasmineStarted(info, log) {
        return `${log}`;
    }
}
jasmine.getEnv().clearReporters();
// @ts-ignore
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
    spec: {
        displayStacktrace: jasmine_spec_reporter_1.StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
}));
