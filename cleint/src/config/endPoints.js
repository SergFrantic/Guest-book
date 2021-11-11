const {REACT_APP_HOST: host} = process.env

export const viewAll = () => `${host}messages`
export const addMessage = () => `${host}messages/add`

