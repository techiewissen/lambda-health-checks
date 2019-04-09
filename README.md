Create a lambda which will take the event input details, parse the event input and get the function name, execute the target lambda.
To give permission to SNS , Add permission using the following (Need AWS credentials to perform this). - with out this principal, lambda will not be invoked.
$ aws lambda add-permission --function-name testLambdaInvokedOrNot --action lambda:InvokeFunction --statement-id sns-my-topic --principal sns.amazonaws.com --source-arn arn:aws:sns:us-east-1:086903667957:serverless-hello-world-staging-alerts-alarm
 This lambda should have permissions to invoke lambda:InvokeFunction action in policy, otherwise this will not be able to invoke the target lambda.
Update the serverless.yml files with following , change the endpoint to above created and email endpoint , if you want to change the default settings (definitions) , update the settings accordingly.
The below automatically created if topic is not there already , otherwise we can create a new SNS topic and update the arn , topic:
The following setting handles both functional errors and throttles, if you don't want to handle throttles you can remove it.


Troubleshoot the issues -

SNS is not able to invoke the lambda - you can enable cloudwatch logs for topic (both Success and Failure) you can validate.
Check lambda access to invoke target lambda.
