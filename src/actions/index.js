export const ADD_TOKEN = 'ADD_TOKEN';
export const SAVE_INFOS = 'SAVE_INFOS';
export const SAVE_SCORE = 'SAVE_SCORE';
export const SAVE_ASSERTIONS = 'SAVE_ASSERTIONS';
export const INDEX_OF = 'INDEX_OF';
export const TIMER = 'TIMER';

export const tokenAction = (value) => ({ type: ADD_TOKEN, payload: value });

export const saveInfos = (email, name, image) => (
  {
    type: SAVE_INFOS,
    email,
    name,
    image,
  });

export const saveScore = (value) => ({ type: SAVE_SCORE, payload: value });

export const saveAssertions = (value) => ({ type: SAVE_ASSERTIONS, payload: value });

export const indexOfAction = () => ({ type: INDEX_OF });

export const timerAction = () => ({ type: TIMER });
