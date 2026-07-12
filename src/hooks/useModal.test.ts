import { describe, expect, it } from 'vitest'

import { useModal } from './useModal'

describe('useModal', () => {
  it('opens and closes modal state', () => {
    const modal = useModal()

    expect(modal.visible.value).toBe(false)

    modal.show()

    expect(modal.visible.value).toBe(true)

    modal.close()

    expect(modal.visible.value).toBe(false)
  })

  it('uses provided initial visibility', () => {
    const modal = useModal(true)

    expect(modal.visible.value).toBe(true)
  })
})
