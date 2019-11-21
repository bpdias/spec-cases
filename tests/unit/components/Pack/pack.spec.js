import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Pack from '@/components/Pack/Pack'
import Bottle from '@/components/Bottle/Bottle'
import fixture from './fixtures'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Pack.vue', () => {
  let wrapper
  let pack
  let store

  beforeEach(() => {
    pack = {
      namespaced: true,
      actions: {
        removePackItem: jest.fn()
      },
      getters: {
        packItemCount: jest.fn()
      }
    }

    store = new Vuex.Store({
      modules: {
        pack
      }
    })

    wrapper = shallowMount(Pack, {
      localVue,
      store,
      propsData: fixture
    })
  })
  afterEach(() => { wrapper.destroy() })

  // testing list of itens
  describe('when the component is mounted', () => {
    it('should render a Bottle for each bottle item in the item', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      expect(wrapper.findAll(Bottle)).toHaveLength(fixture.data.packItens.length)
    })
  })

  // listem to child emmited event
  describe('when listen to child emmited event', () => {
    it('should trigger the removeBottle method', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      wrapper.find(Bottle).vm.$emit('removeBottle')
      expect(wrapper.vm.removeBottle()).toBe(true)
    })
  })
})
