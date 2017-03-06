import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { login } from '../../../src/actions/AuthActions'
import * as actions from '../../../src/actions/AuthActions'
import * as types from '../../../src/actions/types'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('authentication actions', () => {
  it('should create an action to set username', () => {
    const username = 'foo'
    const expectedAction = {
      type: types.SET_USERNAME,
      value: username
    }
    expect(actions.setUsername(username)).toEqual(expectedAction)
  })

  it('should create an action to set password', () => {
    const password = 'foo'
    const expectedAction = {
      type: types.SET_PASSWORD,
      value: password
    }
    expect(actions.setPassword(password)).toEqual(expectedAction)
  })

  it('should create login pending action', () => {
    const expectedAction = {
      type: types.LOGIN_PENDING
    }
    expect(actions.loginPending()).toEqual(expectedAction)
  })

  it('should create login success action', () => {
    const token = '123'
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      token: token
    }
    expect(actions.loginSuccess(token)).toEqual(expectedAction)
  })

  it('should create login error action', () => {
    const error = { message: 'some error' }
    const expectedAction = {
      type: types.LOGIN_ERROR,
      error: error
    }
    expect(actions.loginError(error)).toEqual(expectedAction)
  })

  describe('async', () => {
    describe('login', () => {
      afterEach(() => {
        fetchMock.restore()
      })

      it('should create login and set token actions on success', () => {
        const data = { username: 'foobar', password: 'password' }

        fetchMock.post('*', {
          status: 200,
          body: data,
          headers: { 'Content-Type': 'application/json' }
        });

        const expectedActions = [{
          type: types.LOGIN_PENDING
        }]

        const initialState = {
          api: {
            endpoint: {
              host: 'http://example.com',
              path: 'api',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              }
            }
          }
        }

        const store = mockStore(initialState)
        store.dispatch(login(data))
          .then(() => {
            const actions = store.getActions()
            console.log(actions)
            expect(actions).toEqual(expectedActions)
          })

        // const actions = store.getActions()
        // TODO
        // should have other actions
        // console.log(actions)
        // expect(actions).toEqual(expectedActions)
      })
    })
  })
})
