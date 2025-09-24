import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BreweryListItem from './BreweryListItem.vue'

describe('BreweryListItem.vue', () => {
  const brewery = {
    id: '123',
    name: 'Test Brewery',
    city: 'Test City',
    state: 'Test State',
    brewery_type: 'micro',
  }

  it('renders brewery information correctly', () => {
    const wrapper = mount(BreweryListItem, {
      props: { brewery },
    })

    expect(wrapper.text()).toContain('Test Brewery')
    expect(wrapper.text()).toContain('Test City, Test State')
    expect(wrapper.text()).toContain('micro')
  })

  it('emits a "select" event when clicked', async () => {
    const wrapper = mount(BreweryListItem, {
      props: { brewery },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('select')
    expect(wrapper.emitted().select).toHaveLength(1)
  })
})
