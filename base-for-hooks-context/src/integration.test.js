import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessedWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccesfulGuess = 'train';
  const initialState = { secretWord };

  describe('no guessed words', () => {
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for unsuccesful guess', () => {
      store.dispatch(guessWord(unsuccesfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccesfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState);
    })
    test('updates state correctly for succesful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      }
      expect(newState).toEqual(expectedState);
    })
  })
  describe('some guessed words', () => {
    const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 }]
    const initialState = { secretWord, guessedWords }
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for unsuccesful guess', () => {
      store.dispatch(guessWord(unsuccesfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccesfulGuess, letterMatchCount: 3 }]
      }
      expect(newState).toEqual(expectedState);
    })
    test('updates state correctly for succesful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
      }
      expect(newState).toEqual(expectedState);
    })
  })
})