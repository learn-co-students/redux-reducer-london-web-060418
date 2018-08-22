export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      // return Object.assign({}, state, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id})
      let newState = {...state, friends: [...state.friends, action.friend]}
      return newState
    case 'REMOVE_FRIEND':
      return {...state, friends: state.friends.filter(frand => frand.id !== action.id)}
    default:
      return state;
  }
}
