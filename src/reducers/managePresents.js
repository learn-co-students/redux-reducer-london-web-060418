export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}

//passes the test but is sooooo wrooooooong
// export function managePresents(state, action){
//   switch (action.type) {
//     case 'INCREASE':
//       return {numberOfPresents: Object.keys(state).length}
//     default:
//       return state;
//   }
// }
