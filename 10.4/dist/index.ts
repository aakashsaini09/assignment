// private keys for cloudFront Global 
{
        "Version": "2008-10-17",
        "Id": "PolicyForCloudFrontPrivateContent",
        "Statement": [
            {
                "Sid": "AllowCloudFrontServicePrincipal",
                "Effect": "Allow",
                "Principal": {
                    "Service": "cloudfront.amazonaws.com"
                },
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::webapplication-w19/*",
                "Condition": {
                    "StringEquals": {
                      "AWS:SourceArn": "arn:aws:cloudfront::891376982051:distribution/E2MZTLAXT8HR8R"
                    }
                }
            }
        ]
      }
Distribution domain name = https://drwp9jiq9u9iz.cloudfront.net
ARN = arn:aws:cloudfront::891376982051:distribution/E2MZTLAXT8HR8R
