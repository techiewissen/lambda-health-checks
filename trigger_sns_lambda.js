'use strict';

exports.handler = (event, context, callback) => {
var strObj =   {"AlarmName":"serverless-hello-world-staging-HelloWorldFunctionErrorsAlarm-12IAZU18MYTSF","AlarmDescription":null,"AWSAccountId":"086903667957","NewStateValue":"ALARM","NewStateReason":"Threshold Crossed: 1 datapoint [1.0 (24/03/19 21:19:00)] was greater than or equal to the threshold (1.0).","StateChangeTime":"2019-03-24T21:21:01.717+0000","Region":"US East (N. Virginia)","OldStateValue":"INSUFFICIENT_DATA","Trigger":{"MetricName":"Errors","Namespace":"AWS/Lambda","StatisticType":"Statistic","Statistic":"SUM","Unit":null,"Dimensions":[{"value":"serverless-hello-world-staging-helloWorld","name":"FunctionName"}],"Period":60,"EvaluationPeriods":1,"ComparisonOperator":"GreaterThanOrEqualToThreshold","Threshold":1.0,"TreatMissingData":"","EvaluateLowSampleCountPercentile":""}}
  console.log('Inside testLambdaInvokedOrNot');
  
  //console.log('Message' + JSON.parse(JSON.stringify(event.Sns.Message)));
  const Obj =  JSON.parse(JSON.stringify(event.Sns.Message));
  console.log(Obj);
  
}; 
console.log(1+1);
