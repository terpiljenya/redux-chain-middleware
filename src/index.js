export default function chainMiddleware() {
  return next => async action => {
    if (Array.isArray(action)) {
      let actions = action;
      let prev = Promise.resolve();
      for (let i = 0; i < actions.length; i++) {
        try {
          let curr = actions[i];
          await prev;
          prev = next(curr);
        } catch (failAction) {
          if (failAction instanceof Error) {
            throw failAction;
          }
          next(failAction);
          break;
        }
      }
    } else {
      next(action);
    }
  };
}
