export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {friends: [...state.friends, action.friend]})
    break;
    case "REMOVE_FRIEND":
        let objToRemove = state.friends.find(el => el.id === action.id);
        let index = state.friends.indexOf(objToRemove);
        let arr = [...state.friends];
        arr.splice(index, 1)
      if(index > -1) {
      return Object.assign({}, state, {friends: arr })
      } else {
        return state;
      }

    break;
    default:
      return state
    break;
  }
}
