export const GET_SUBREDDIT = "GET_SUBREDDIT";
export const REQUEST_SUBREDDIT = "REQUEST_SUBREDDIT";
export const FAILED_REQUEST = "FAILED_REQUEST";

export const getSubreddit = (subreddit) => ({
  type: GET_SUBREDDIT,
  payload: subreddit,
})

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
})

export const requestSubreddit = () => ({
  type: REQUEST_SUBREDDIT,
})