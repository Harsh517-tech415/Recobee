const awsExports={
    auth:{
        mandatorySignIn: true,
        userPoolId:process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
        userPoolWebClientId:process.env.REACT_APP_AWS_COGNITO_CLIENT_ID
    }
}
export default awsExports;