export const defaults = {
    isLoggedIn : localStorage.getItem("token") !== null ? true : false
    /* 'isLoggedIn : false' -->항상 false 이면 안된다. So, token이 있는지 확인하고 있으면 true*/
};

export const resolvers = {
    Mutation : {
        logUserIn : (_, {token}, {cache}) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data : {
                    isLoggedIn : true
                }
            });
            return null;
        },
        logUserOut : (_, __, {cache}) => {
            localStorage.removeItem("token");
            window.location.reload(); /* */
            return null;
        }
    }
};


/* App이 오프라인 상태에서 발생 */