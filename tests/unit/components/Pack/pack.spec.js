import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Pack from '@/components/Pack/Pack'
import Bottle from '@/components/Bottle/Bottle'
import fixture from './fixtures'
import packMutations from '@/store/components/pack/pack.mutations'

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
        packItensCount: () => 1
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

    // testing getters
    it('should render a the number of packs stored in the state', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      expect(wrapper.find('.pack-count').text()).toContain(pack.getters.packItensCount())
    })
  })

  describe('when listen to child emmited event', () => {
    // listem to child emmited event
    it('should trigger the buyBottle method', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      wrapper.find(Bottle).vm.$emit('buyBottle')
      expect(wrapper.vm.buyBottle()).toBe(true)
    })

    it('should trigger the buyBottle method', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      wrapper.find(Bottle).vm.$emit('drinkBottle')
      expect(wrapper.vm.drinkBottle()).toBe(true)
    })

    it('should change the drunk attr if drinking > 6', () => {
      wrapper.vm.drinkBottle(7)
      expect(wrapper.vm.drunk).toBe(true)
    })

    // testing action dispatch
    it('should dispatch the removePackItem action if ammount > 6', () => {
      wrapper.vm.buyBottle(7)
      expect(pack.actions.addPackItem).toHaveBeenCalled()
    })

    // testing mutations
    it('should change the packItensCount state if ammount > 6', () => {
      packMutations.addPackItem(pack.state)
      expect(pack.state.packItensCount).toBe(1)
    })
  })
})
