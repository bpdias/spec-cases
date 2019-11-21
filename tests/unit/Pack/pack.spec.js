import { shallowMount } from '@vue/test-utils'
import Pack from '@/components/Pack/Pack'
import Bottle from '@/components/Bottle/Bottle'
import fixture from './fixtures'

describe('Pack.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Pack, { propsData: fixture })
  })
  afterEach(() => { wrapper.destroy() })

  describe('when the component is mounted', () => {
    it('should render a Bottle for each bottle item in the item', () => {
      wrapper.setData({ packItens: fixture.data.packItens })
      expect(wrapper.findAll(Bottle)).toHaveLength(fixture.data.packItens.length)
    })
  })
})
