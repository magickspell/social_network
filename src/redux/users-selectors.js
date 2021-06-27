import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});
/*export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true); типо сложная операция на запросы
});*/

/*export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
    return users.filter(u => true);
    пример с несколькими зависимостями
})*/

/*По-прежнему простые селекторы мы создаём руками.
    А вот более сложные селекторы, которые мы не хотим перезапускать, результат работы которых мы хотим как бы "запомнить",
    чтобы не делать отработку логики по-новой, так как не изменились данные,
    которые могли бы повлиять (зависимости) на иной результат, мы будем создавать с  помощью функции createSelector*/

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}


/*users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)*/
