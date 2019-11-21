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
        addPackItem: jest.fn()
      },
      getters: {
        packItensCount: jest.fn()
      },
      state: {
        packItensCount: 0
      }
    }

    store = new Vuex.Store({
      modules: {
        pack
      }
    })

    wrapper = shallowMount(Pack, {
      store,
      localVue,
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

  describe('when listen to child emmited event', () => {
    // listem to child emmited event
    it('should trigger the buyBottle method', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      wrapper.find(Bottle).vm.$emit('buyBottle')
      expect(wrapper.vm.buyBottle()).toBe(true)
    })

    // testing action dispatch
    it('should dispatch the removePackItem action', () => {
      wrapper.vm.buyBottle()
      expect(pack.actions.addPackItem).toHaveBeenCalled()
    })
  })
})
