import { shallowMount } from '@vue/test-utils'
import Bottle from '@/components/Bottle/Bottle'
import fixture from './fixtures'

describe('Bottle.vue', () => {
  let wrapper

  beforeEach(() => { wrapper = shallowMount(Bottle, { propsData: fixture }) })
  afterEach(() => { wrapper.destroy() })

  describe('when component receives the expected props', () => {
    it('should render the item informations text', () => {
      expect(wrapper.text()).toContain('breja')
      expect(wrapper.text()).toContain('latinha')
      expect(wrapper.text()).toContain('3.29')
    })
  })

  it('should diplay the brand on h2 element', () => {
    expect(wrapper.find('h2').text()).toBe(fixture.item.brand)
  })

  it('should load the bottle image', () => {
    const image = wrapper.find('img')
    expect(image.attributes().src).toBe(fixture.item.image)
  })

  it('should show the total price', () => {
    expect(Bottle.computed.totalValue.call(fixture)).toBe(fixture.item.price * fixture.item.ammount)
  })

  it('should check the class on h2', () => {
    expect(wrapper.find('h2').classes()).toContain('red')
  })
})

// ASSERTIONS
// - toMatch
// - toContain
// - toBe

// wrapper.text() get all text in the component to make the assertion
// wrapper.find() find by searching the dom element
