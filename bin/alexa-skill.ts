#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AlexaSkillStack } from '../lib/alexa-skill-stack';

const app = new cdk.App();
new AlexaSkillStack(app, 'AlexaSkillStack', {

});