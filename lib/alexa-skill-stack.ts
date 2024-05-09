import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_lambda as lambda} from "aws-cdk-lib";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AlexaSkillStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const alexaLambda = new lambda.Function(this , "AlexaSkill", {
      functionName: 'alexa-skill',
      code: lambda.Code.fromAsset('lambda', {
        bundling: {
          image: cdk.DockerImage.fromRegistry('public.ecr.aws/sam/build-python3.10:latest'),
          command: ['bash', '-c', 'pip install --platform=manylinux_2_17_x86_64 --only-binary=:all: -r requirements.txt -t /asset-output && cp -au . /asset-output'],
        }
      }),
      handler: 'index.lambda_handler', //'index.lambda_handler'-'hello.handler'
      runtime: lambda.Runtime.PYTHON_3_10,
      timeout: cdk.Duration.seconds(20)
    })



  }
}
