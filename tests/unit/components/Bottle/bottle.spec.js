import { shallowMount } from '@vue/test-utils'
import Bottle from '@/components/Bottle/Bottle'
import fixture from './fixtures'

describe('Bottle.vue', () => {
  let wrapper

  fixture.buyBottle = jest.fn()
  beforeEach(() => { wrapper = shallowMount(Bottle, { propsData: fixture }) })
  afterEach(() => { wrapper.destroy() })

  describe('when component receives the expected props', () => {
    // testing component text
    it('should render the item informations text', () => {
      expect(wrapper.text()).toContain('breja')
      expect(wrapper.text()).toContain('latinha')
      expect(wrapper.text()).toContain('3.29')
    })

    // testing component specific element
    it('should diplay the brand on h2 element', () => {
      expect(wrapper.find('h2').text()).toContain(fixture.item.brand)
    })

    // testing attributes
    it('should load the bottle image', () => {
      const image = wrapper.find('img')
      expect(image.attributes().src).toBe(fixture.item.image)
    })

    // testing computed props
    it('should show the total price', () => {
      expect(Bottle.computed.totalValue.call(fixture)).toBe((fixture.item.price * fixture.item.ammount).toFixed(2))
    })

    // testing classes
    it('should check the class on h2', () => {
      expect(wrapper.find('h2').classes()).toContain('red')
    })
  })

  describe('when buyBottle button is clicked', () => {
    // testing native events
    it('should add 1 in the ammount', () => {
      wrapper.find('#b').trigger('click')
      expect(wrapper.props().item.ammount).toBe(3)
    })

    // testing custom events
    it('should emmit the buyBottle event', () => {
      wrapper.find('#b').trigger('click')
      expect(wrapper.emitted().buyBottle).toBeTruthy()
    })
  })

  describe('when drinkBottle button is clicked', () => {
    // testing native events
    it('should add 1 in the drinking', () => {
      wrapper.find('#b2').trigger('click')
      expect(wrapper.props().item.drinking).toBe(1)
    })

    // testing custom events
    it('should not emmit the buyBottle event', () => {
      let localWrapper = shallowMount(Bottle, { propsData: {
        item: {
          type: 'breja',
          price: '3.29',
          size: 'latinha',
          brand: 'heineken',
          image: '/images/heineken.png',
          ammount: 0,
          drinking: 2
        }
      } })
      localWrapper.find('#b2').trigger('click')
      expect(localWrapper.emitted().drinkBottle).not.toBeTruthy()
    })

    it('should  emmit the buyBottle event', () => {
      wrapper.find('#b2').trigger('click')
      expect(wrapper.emitted().drinkBottle).toBeTruthy()
    })
  })

  // testing methods
  it('testing someMethod', () => {
    expect(wrapper.vm.someMethod()).toBe(1)
  })
})

// ASSERTIONS
// - toMatch
// - toContain
// - toBe

// wrapper.text() get all text in the component to make the assertion
// wrapper.find() find by searching the dom element
