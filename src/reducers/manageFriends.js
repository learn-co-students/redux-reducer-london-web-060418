export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const newFriendList = state.friends.filter( friend => friend.id !== action.id )
      return {...state, friends: newFriendList}
    default:
      return state
  }
}
