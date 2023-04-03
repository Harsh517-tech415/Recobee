import {CognitoUserPool} from 'amazon-cognito-identity-js';
const poolData={
    UserPoolId:"ap-south-1_iswmclt88",
    ClientId:"2pbr5slur0mnficrvqr1ksb59a"
}
export default new CognitoUserPool(poolData);