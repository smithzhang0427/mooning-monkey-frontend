export const GET_MAX_CREDITS = 'GET_MAX_CREDITS';
export const GET_MAX_CREDITS_ERROR = 'GET_MAX_CREDITS_ERROR';
export const BET_REQUEST = 'BET_REQUEST';
export const BET_SUCCESS = 'BET_SUCCESS';
export const BET_ERROR = 'BET_ERROR';
export const STOP_BET_SUCCESS = 'STOP_BET_SUCCESS';
export const STOP_BET_ERROR = 'STOP_BET_ERROR';
export const END_BET = 'END_BET';
export const SET_AUTO_BET = 'SET_AUTO_BET';
export const STOP_AUTO_BET = 'STOP_AUTO_BET';

export const SET_PUBLICKEY = 'SET_PUBLICKEY';

export const GET_TRANSACTION_HISTORY_SUCCESS = 'GET_TRANSACTION_HISTORY_SUCCESS';
export const GET_TRANSACTION_HISTORY_ERROR = 'GET_TRANSACTION_HISTORY_ERROR';

export const GET_MY_RECENT_WINS_SUCCESS = 'GET_MY_RECENT_WINS_SUCCESS';
export const GET_MY_RECENT_WINS_ERROR = 'GET_MY_RECENT_WINS_ERROR';

export const GET_ALL_BET_SUCCESS = 'GET_ALL_BET_SUCCESS';
export const GET_ALL_BET_ERROR = 'GET_ALL_BET_ERROR';

export const GET_GAME_HISTORY_SUCCESS = 'GET_GAME_HISTORY_SUCCESS';
export const GET_GAME_HISTORY_ERROR = 'GET_GAME_HISTORY_ERROR';

export const GET_LEADERBOARD_SUCCESS = 'GET_LEADERBOARD_SUCCESS';
export const GET_LEADERBOARD_ERROR = 'GET_LEADERBOARD_ERROR';

export const GET_LOGIN_REQUEST_REQUEST = 'GET_LOGIN_REQUEST_REQUEST';
export const GET_LOGIN_REQUEST_SUCCESS = 'GET_LOGIN_REQUEST_SUCCESS';
export const GET_LOGIN_REQUEST_ERROR = 'GET_LOGIN_REQUEST_ERROR';

export const GET_REGISTERED_STATUS_REQUEST = 'GET_REGISTERED_STATUS_REQUEST';
export const GET_REGISTERED_STATUS_SUCCESS = 'GET_REGISTERED_STATUS_SUCCESS';
export const GET_REGISTERED_STATUS_ERROR = 'GET_REGISTERED_STATUS_ERROR';

export const GET_STATS_REQUEST = 'GET_STATS_REQUEST';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const GET_USER_STATS_REQUEST = 'GET_USER_STATS_REQUEST';
export const GET_USER_STATS_SUCCESS = 'GET_USER_STATS_SUCCESS';
export const GET_USER_STATS_ERROR = 'GET_USER_STATS_ERROR';

export const GET_USERNAME_REQUEST = 'GET_USERNAME_REQUEST';
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS';
export const GET_USERNAME_ERROR = 'GET_USERNAME_ERROR';

export const GET_ONLINE_PLEYERS_SUCCESS = 'GET_ONLINE_PLEYERS_SUCCESS';
export const GET_ONLINE_PLEYERS_ERROR = 'GET_ONLINE_PLEYERS_ERROR';

export const SET_GAME_RESULT = 'SET_GAME_RESULT';

export const SET_POPUP = 'SET_POPUP';

export const ADD_FRIEND = 'ADD_FRIEND';

export const CHANGE_GAME_STATE = 'CHANGE_GAME_STATE';

export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';

export const SHOW_STATS_MODAL = 'SHOW_STATS_MODAL';
export const HIDE_STATS_MODAL = 'HIDE_STATS_MODAL';

export const HIDE_HELP_MODAL = 'HIDE_HELP_MODAL';
export const SHOW_HELP_MODAL = 'SHOW_HELP_MODAL';

export const HIDE_HELP_DETAIL_MODAL = 'HIDE_HELP_DETAIL_MODAL';
export const SHOW_HELP_DETAIL_MODAL = 'SHOW_HELP_DETAIL_MODAL';

export const SET_LATEST_RESULTS = 'SET_LATEST_RESULTS';
    
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export const TRANSACTION_TYPE = {
    WITHDRAW: 'Withdraw',
    DEPOSIT: 'Deposit',
    REWARDS: 'Rewards',
    NONE: ''
}

export const GAME_HISTORY_TYPE = {
    ALL: 'All',
    HIGH_WINS: 'High Wins',
    LUCKY_WINS: 'Lucky Wins',
    MY_WAGER: 'My Wager',
    NONE: ''
}

export const GAME_STATE = {
    WAITING: 'WAITING',
    RUNNING: 'RUNNING',
    CRASHED: 'CRASHED'
}

export const betAmountMultiple = {
    half: 'half',
    double: 'double',
    max: 'max',
    min: 'min'
};

export const MY_STATS_CHART_TYPE = {
    GAME_PLAYED: 'GAME_PLAYED',
    TOTAL_WAGERED: 'TOTAL_WAGERED',
    NET_PROFIT: 'NET_PROFIT'
};