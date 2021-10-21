import { JwtHandler } from "../jwt-handler/JwtHandleer";
export const Api = {
    baseUrl:"http://localhost:3001",
    // Auth Header
    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt(),
    }),
    //end points login
    LoginVerifyUrl: ()=> Api.baseUrl+"/login",
    //end points users
    readAllUsersUrl: ()=> Api.baseUrl+"/users",
    createUserUrl: ()=> Api.baseUrl+"/users",

    //end points perfil
    readAllPerfilUrl: ()=> Api.baseUrl+"/perfil/"
    +JSON.parse(Buffer.from(JwtHandler.getJwt().split('.')[1], 'base64').toString()).sub,
    readOnePerfilUrl: (id)=> Api.baseUrl+"/perfil/"+id+"/one",
    createPerfilUrl: ()=> Api.baseUrl+"/perfil",
    updatePerfilUrl: (id)=> Api.baseUrl+"/perfil/"+id,
    deletePerfilUrl: (id)=> Api.baseUrl+"/perfil/"+id,

    //end points Gener
    readAllGenreUrl: ()=> Api.baseUrl+"/genre",
    createGenreUrl: ()=> Api.baseUrl+"/genre",

    //end points Games
    readAllGamesUrl: ()=> Api.baseUrl+"/games",
    readOneGameUrl: (id)=> Api.baseUrl+"/games/"+id,
    createGameUrl:()=> Api.baseUrl+"/games",
    
    //end points Games user list
    readAllGamesListUrl: ()=> Api.baseUrl+"/list-of-games/"
    +JSON.parse(Buffer.from(JwtHandler.getJwt().split('.')[1], 'base64').toString()).sub,
    // get method
    buildApiGetRequest: (url,auth) =>
        fetch(url,{
            method:"GET",
            headers: auth? new Headers(Api.authHeader()): undefined,
        }),
    // Post method
    buildApiPostRequest: (url,body,auth) =>
        fetch(url,{
            method: "POST",
            headers: new Headers({
                "Content-type" : "application/json",
                ...( auth ? Api.authHeader() : {} ),
            }),
            body: JSON.stringify(body),
        }),
    // PATCH method
    buildApiPatchRequest: (url, body, auth) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),
    // Delete method
    buildApiDeleteRequest: (url, auth) =>
        fetch(url, {
            method: "DELETE",
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),
};