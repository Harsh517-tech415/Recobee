const awsExports={
    Auth:{
        'UserPoolId':process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
        'userPoolwebClientId':process.env.REACT_APP_AWS_COGNITO_CLIENT_ID
    }
}
export default awsExports;