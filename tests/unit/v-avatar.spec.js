import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Avatar from '../../src/avatar-func.vue'
import methods from '../../src/utils'

describe('Avatar.vue', function() {
  it('should divide name in parts on both space and hyphen', function() {
    expect(methods.getUsernameInitials('Hubert Felix')).to.equal('HF')
    expect(methods.getUsernameInitials('Hubert-Felix')).to.equal('HF')
    expect(methods.getUsernameInitials('Hubert-Felix Thiefaine')).to.equal(
      'HFT'
    )
  })

  it('should use only the first letter of each name parts (up to three)', function() {
    expect(
      methods.getUsernameInitials('Hubert-Felix De La Rochefoucault')
    ).to.equal('HFD')
  })

  it('should use only the uppercase letter (up to three) if the name has more than three parts', function() {
    expect(methods.getUsernameInitials('Hubert de la Rochefoucault')).to.equal(
      'HR'
    )
    expect(
      methods.getUsernameInitials('Hubert-Felix de la Rochefoucault')
    ).to.equal('HFR')
  })

  it('should use lowercase letter (up to three) if the name has no uppercase', function() {
    expect(methods.getUsernameInitials('hubert de rochefoucault')).to.equal(
      'HDR'
    )
    expect(
      methods.getUsernameInitials('hubert-felix de la rochefoucault')
    ).to.equal('HFD')
  })

  it('should use both uppercase and lowercase letter if name has three parts or less', function() {
    expect(methods.getUsernameInitials('Hubert de Rochefoucault')).to.equal(
      'HDR'
    )
  })

  it("should render initials if no 'src' is given", function() {
    var username = 'Hubert-Félix Tobey'

    const wrapper = shallowMount(Avatar, {
      context: {
        props: {
          username: username
        }
      }
    })
    const initial = wrapper.find('span').text()
    expect(initial).to.equal('HFT')

    expect(wrapper.element.querySelector('span').innerHTML).to.contain(initial)
  })

  it("should render an image with the correct 'src' when given", function() {
    var username = 'Hubert-Félix'

    const wrapper = shallowMount(Avatar, {
      context: {
        props: {
          username: username,
          src: 'path/to/img'
        }
      }
    })

    const initial = wrapper.html()
    expect(initial).to.contain('path/to/img')
  })
})
