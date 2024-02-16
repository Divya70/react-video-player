const authReducer = (authState, authAction) => {
    switch (authAction.type) {
        case "CHECK_TOKEN":
            return { ...authState, token : authAction.payload }

        case "USER_LOGIN":
            return { ...authState, token : authAction.payload}

        case "USER_SIGNUP":
        return { ...authState, token : authAction.payload }
            
        case "USER_LOGOUT":
            return { ...authState, token : null }

        default:
          return authState;
    }
}

export { authReducer };